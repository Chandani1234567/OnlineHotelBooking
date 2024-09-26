import React, { useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"; // Use the same CSS for consistency
import "@fortawesome/fontawesome-free/css/all.min.css";

const Signup = ({ closeLogin, toggleForm }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const criteria = {
      length: password.length >= 8,
      number: /[0-9]/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    for (const key in criteria) {
      if (criteria[key]) strength += 1;
    }

    if (strength === 5) return "Strong";
    if (strength >= 3) return "Moderate";
    return "Weak";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const name = nameRef.current.value;

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check password strength
    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "Weak") {
      setError(
        "Password is too weak. It should be at least 8 characters long and include numbers, uppercase letters, lowercase letters, and special characters."
      );
      return;
    }

    try {
      // Update the URL with your backend server's address and port
      await axios.post("http://localhost:4000/signup", {
        name,
        email,
        password,
      });

      // Clear the form and close the signup form
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      setError(null);
      toggleForm(); // Switch to login form
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="form_container">
      <i className="fa-solid fa-times form_close" onClick={closeLogin}></i>
      <div className="form signup_form">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="input_box">
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
              required
            />
            <i className="fa-solid fa-user name"></i>
          </div>
          <div className="input_box">
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              required
            />
            <i className="fa-solid fa-envelope email"></i>
          </div>
          <div className="input_box">
            <input
              ref={passwordRef}
              type={passwordVisible ? "text" : "password"}
              placeholder="Create password"
              required
            />
            <i className="fa-solid fa-lock password"></i>
            <i
              className={`fa-solid fa-eye${
                passwordVisible ? "" : "-slash"
              } pw_hide`}
              onClick={handlePasswordToggle}
            ></i>
          </div>
          <div className="input_box">
            <input
              ref={confirmPasswordRef}
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm password"
              required
            />
            <i className="fa-solid fa-lock password"></i>
            <i
              className={`fa-solid fa-eye${
                confirmPasswordVisible ? "" : "-slash"
              } pw_hide`}
              onClick={handleConfirmPasswordToggle}
            ></i>
          </div>

          <button type="submit" className="button">
            Signup Now
          </button>

          <div className="login_signup">
            Already have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
