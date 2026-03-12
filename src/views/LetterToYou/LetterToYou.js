"use client";
import React, { useState, useCallback } from "react";
import "./LetterToYou.css";
import Layout from "../../components/Layouts/Layout";

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const Form = () => {
  const api = "https://gymkhana.iitkgp.ac.in";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    otp: "",
    message: "",
    rollNo: "",
    graduationYear: "",
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const isEmailValid = formData.email.endsWith("@kgpian.iitkgp.ac.in");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(
        value.endsWith("@kgpian.iitkgp.ac.in")
          ? ""
          : "Please use your institute email."
      );
    }

    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = useCallback(
    debounce(async () => {
      if (!isEmailValid) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${api}/api/letter/sentOtp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });
        const data = await response.json();
        if (response.ok) {
          setIsOtpSent(true);
          setServerMessage(data.message);
        } else {
          setServerMessage(data.message);
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        setServerMessage("Failed to send OTP. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 2000),
    [formData.email]
  );

  const verifyOtp = async () => {
    if (!formData.otp) {
      setServerMessage("Please enter the OTP.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${api}/api/letter/verifyOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setServerMessage(data.message);
        setFormData({
          name: "",
          email: "",
          otp: "",
          message: "",
          rollNo: "",
          sendDate: "",
        });
        setIsOtpSent(false);
      } else {
        setServerMessage(data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setServerMessage("Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="letter-to-me-container">
        <div className="left-column">
          <div className="overlay"></div>
          <div className="desc-content">
          <h2>
            <img src="https://freedesignfile.com/image/preview/18609/graduation-hat-drawing-black-and-white-clipart.png"/>
            A Letter To The Passing <br></br> Out You!
          </h2>
          <p>
            To all the bright-eyed futurists of today, the Editorship presents
            this unique opportunity to write a heartfelt 'encrypted and totally
            secure' letter to your future self, one that will be delivered to
            you on your graduation day.<br/><br /> So, why wait? Immerse yourself in a
            reflective thought and let your words weave the bridge between the
            person you are today and the graduate you will become.<br /> <br /> Share your
            dreams, your aspirations, and the spark you wish your journey to be
            fueled with. Picture the glitter in your eyes and wonder if you
            achieved them. This is your chance to have a candid conversation
            with your future self—only to be read by you and no one else. All
            the entries are safe and unaccessed by any second person, so feel
            free to pen down whatever you have in your heart.
          </p>
          </div>

        </div>
        <div className="right-column">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="box1">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                placeholder="Graduation Year"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box1">
              <input
                type="text"
                id="rollNo"
                name="rollNo"
                placeholder="Roll Number"
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Institute Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {!isOtpSent && isEmailValid && (
              <button
                type="button"
                onClick={sendOtp}
                className={isLoading ? "loading" : ""}
                disabled={isLoading || !formData.email}
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>
            )}
            {isOtpSent && (
              <>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                />
                <button type="button" onClick={verifyOtp} disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Verify OTP & Submit"}
                </button>
              </>
            )}
          </form>
          {serverMessage && <p className="server-message">{serverMessage}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Form;
