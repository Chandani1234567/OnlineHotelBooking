import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminSignupForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, Link } from "react-router-dom";

const AdminSignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    secretKey: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [secretKeyVisible, setSecretKeyVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSecretKeyToggle = () => {
    setSecretKeyVisible(!secretKeyVisible);
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://onlinehotelbookingbackend.onrender.com/api/admins", formData);
      setSuccess("Signup successful!");
      setError("");
      setTimeout(() => navigate("/login"), 2);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-signup-form-container">
      <form onSubmit={handleSubmit} className="admin-signup-form">
        <h2>Admin Signup</h2>
        {success && <p className="success-message" style={{ color: "green" }}>{success}</p>}
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <div className="input-box">
          <input
            type={secretKeyVisible ? "text" : "password"}
            name="secretKey"
            value={formData.secretKey}
            onChange={handleChange}
            placeholder="Enter secret key"
            required
          />
          <i className="fa-solid fa-key secret-key-icon"></i>
          <i
            className={`fa-solid fa-eye${secretKeyVisible ? "" : "-slash"} pw-hide`}
            onClick={handleSecretKeyToggle}
          ></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <i className="fa-solid fa-envelope email-icon"></i>
        </div>
        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <i className="fa-solid fa-lock password-icon"></i>
          <i
            className={`fa-solid fa-eye${passwordVisible ? "" : "-slash"} pw-hide`}
            onClick={handlePasswordToggle}
          ></i>
        </div>
        <div className="input-box">
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
          <i className="fa-solid fa-lock password-icon"></i>
          <i
            className={`fa-solid fa-eye${confirmPasswordVisible ? "" : "-slash"} pw-hide`}
            onClick={handleConfirmPasswordToggle}
          ></i>
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Signing up..." : "Signup as Admin"}
        </button>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminSignupForm;
