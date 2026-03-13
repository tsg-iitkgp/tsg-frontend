"use client";
import React, { useState } from "react";
import "./form.css";
import AppImage from "../../components/AppImage";
const SocietyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    poc: ["", "", ""], 
    activeMembers: "",
    formLink: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [photoGallery, setPhotoGallery] = useState([]); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("poc")) {
      const index = parseInt(name.split("-")[1], 10);
      setFormData((prev) => {
        const updatedPOC = [...prev.poc];
        updatedPOC[index] = value;
        return { ...prev, poc: updatedPOC };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (name === "profilePicture") {
      setProfilePicture(files[0]);
    } else if (name === "coverPicture") {
      setCoverPicture(files[0]);
    } else if (name === "photoGallery") {
      // Add selected files to the photo gallery
      const selectedFiles = Array.from(files);
      setPhotoGallery((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const removePhoto = (index) => {
    setPhotoGallery((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("poc", JSON.stringify(formData.poc)); // Convert the POC array to a JSON string
    data.append("activeMembers", formData.activeMembers);
    data.append("formLink", formData.formLink);

    if (profilePicture) data.append("profilePicture", profilePicture);
    if (coverPicture) data.append("coverPicture", coverPicture);

    // Append each photo in the photo gallery
    photoGallery.forEach((file) => {
      data.append("photoGallery", file);
    });

    try {
      console.log("Submitting form...");

      const response = await fetch("http://localhost:5050/api/societies/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server Response:", result);

      alert("Society created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit the form. ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Society</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Society Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Point of Contact (POC):</label>
          <input
            type="text"
            name="poc-0"
            value={formData.poc[0]}
            placeholder="POC 1"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="poc-1"
            value={formData.poc[1]}
            placeholder="POC 2"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="poc-2"
            value={formData.poc[2]}
            placeholder="POC 3"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Active Members:</label>
          <input
            type="number"
            name="activeMembers"
            value={formData.activeMembers}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          {/* <label>Form Link:</label>
          <input
            type="url"
            name="formLink"
            value={formData.formLink}
            onChange={handleInputChange}
            required
          /> */}
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Cover Picture:</label>
          <input
            type="file"
            name="coverPicture"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Photo Gallery:</label>
          <input
            type="file"
            name="photoGallery"
            onChange={handleFileChange}
            multiple
          />
        </div>

        {/* Display photo previews */}
        <div className="photo-gallery-preview">
          {photoGallery.map((file, index) => (
            <div key={index} className="photo-preview">
              <AppImage
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="photo-thumbnail"
              />
              <button
                type="button"
                onClick={() => removePhoto(index)}
                className="remove-photo-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SocietyForm;
