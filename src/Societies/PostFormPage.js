"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BASE_URL } from "../constants/api";
import "./PostFormPage.css";
import Layout from "../components/Layouts/Layout";
import AppImage from "../components/AppImage";

const inputTypes = {
  text: (props) => {
    const inputId = `${props.name}-input`;
    return (
      <>
        <input type='text' id={inputId} className='form-input' {...props} />
      </>
    );
  },
  email: (props) => {
    const inputId = `${props.name}-input`;
    return (
      <>
        <input type='email' id={inputId} className='form-input' {...props} />
      </>
    );
  },
  phone: (props) => {
    const inputId = `${props.name}-input`;
    return (
      <>
        <input type='tel' id={inputId} className='form-input' {...props} />
      </>
    );
  },
  textarea: (props) => {
    const inputId = `${props.name}-input`;
    return (
      <>
        <textarea id={inputId} className='form-textarea' {...props} />
      </>
    );
  },
  date: (props) => {
    const inputId = `${props.name}-input`;
    return (
      <>
        <input type='date' id={inputId} className='form-input' {...props} />
      </>
    );
  },
  checkbox: ({ options = [], name, value = [], onChange, required }) => (
    <ul className='form-options-list'>
      {options.map((opt, idx) => {
        const inputId = `${name}-${idx}`;
        return (
          <li key={idx} className='form-option-item'>
            <input
              id={inputId}
              type='checkbox'
              name={name}
              value={opt}
              checked={value.includes(opt)}
              onChange={onChange}
              required={required && value.length === 0}
              className='form-checkbox'
            />
            <label htmlFor={inputId} className='form-option-label'>
              {opt}
            </label>
          </li>
        );
      })}
    </ul>
  ),
  radio: ({ options = [], name, value, onChange, required }) => (
    <ul className='form-options-list'>
      {options.map((opt, idx) => {
        const inputId = `${name}-${idx}`;
        return (
          <li key={idx} className='form-option-item'>
            <input
              id={inputId}
              type='radio'
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              required={required && idx === 0}
              className='form-radio'
            />
            <label htmlFor={inputId} className='form-option-label'>
              {opt}
            </label>
          </li>
        );
      })}
    </ul>
  ),
};

const PostFormPage = () => {
  const routeParams = useParams();
  const postid = routeParams?.postid;
  const [post, setPost] = useState(null);
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/posts/${postid}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        if (data.form_structure) {
          try {
            const parsed = JSON.parse(data.form_structure);
            setFormFields(parsed);
            // Initialize formData with empty values
            const initial = {};
            parsed.forEach((f) => {
              if (f.input_type === "checkbox") initial[f.label] = [];
              else initial[f.label] = "";
            });
            setFormData(initial);
          } catch {
            setFormFields([]);
          }
        }
        setLoading(false);
      });
  }, [postid]);

  if (post && post.form_id) {
    if (typeof window !== "undefined") document.title = `Form for ${post.title} | TSG`;
  }
  const handleChange = (label, input_type) => (e) => {
    if (input_type === "checkbox") {
      const valueArr = formData[label] || [];
      const value = e.target.value;
      if (e.target.checked) {
        setFormData({ ...formData, [label]: [...valueArr, value] });
      } else {
        setFormData({ ...formData, [label]: valueArr.filter((v) => v !== value) });
      }
    } else if (input_type === "radio") {
      setFormData({ ...formData, [label]: e.target.value });
    } else {
      setFormData({ ...formData, [label]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Find the form ID from the post data
      const formId = post.form_id; // Assuming the form ID is the same as post ID

      const response = await fetch(`${BASE_URL}/forms/${formId}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        alert(`Form submission failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      alert("Network error. Please try again.");
    }
  };

  if (loading)
    return (
      <Layout>
        <div className='loading-message' style={{ marginTop: "5rem" }}>
          Loading...
        </div>
      </Layout>
    );
  if (!post)
    return (
      <Layout>
        <div className='error-message' style={{ marginTop: "5rem" }}>
          Post not found.
        </div>
      </Layout>
    );
  if (!post.form_structure)
    return (
      <Layout>
        <div className='error-message' style={{ marginTop: "5rem" }}>
          No form available for this post.
        </div>
      </Layout>
    );
  if (submitted)
    return (
      <Layout>
        <div className='success-message' style={{ marginTop: "5rem" }}>
          Form submitted successfully!
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <button
            type="button"
            className="form-submit-button"
            style={{ minWidth: 120 }}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className='form-container' style={{ marginTop: "5rem" }}>
        <div className='form-header'>
          <AppImage src={post.society_logo} alt={post.society_name} className='form-logo' />
          <div>
            <div className='form-society-name'>{post.society_name}</div>
            <div className='form-title'>{post.title}</div>
          </div>
        </div>
        <div className='form-description'>{post.description}</div>
        <form onSubmit={handleSubmit} className='form'>
          {formFields.map((field, idx) => (
            <div key={idx} className='form-field'>
              <label
                className='form-label'
                htmlFor={
                  field.input_type === "checkbox" || field.input_type === "radio" ? undefined : `${field.label}-input`
                }>
                {field.label}
                {field.required && <span className='form-required'>*</span>}
              </label>
              {inputTypes[field.input_type] &&
                inputTypes[field.input_type]({
                  name: field.label,
                  value: formData[field.label],
                  onChange: handleChange(field.label, field.input_type),
                  required: field.required,
                  options: field.options,
                })}
            </div>
          ))}
          <button type='submit' className='form-submit-button'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostFormPage;
