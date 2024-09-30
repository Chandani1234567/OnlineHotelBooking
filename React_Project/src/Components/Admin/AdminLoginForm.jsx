import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLoginForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate(); // Create navigate instance

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://onlinehotelbookingbackend.onrender.com/api/login", // Ensure this endpoint is admin-specific
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token } = response.data;
      if (token) {
        localStorage.setItem("adminToken", token);
        setIsLoggedIn(true);
        navigate("/dashboard"); // Use navigate for redirection
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data);
      setError(error.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const isAdminLoggedIn = () => {
    return !!localStorage.getItem("adminToken");
  };

  return (
    <div className="admin-login-form-container">
      {!isAdminLoggedIn() ? (
        <form onSubmit={handleSubmit} className="admin-login-form">
          <h2>Admin Login</h2>
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
          {!forgotPassword ? (
            <>
              <div className="input-box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <i className="fa-solid fa-envelope email-icon"></i>
              </div>
              <div className="input-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <i className="fa-solid fa-lock password-icon"></i>
                <i
                  className={`fa-solid fa-eye${passwordVisible ? "" : "-slash"} pw-hide`}
                  onClick={handlePasswordToggle}
                ></i>
              </div>
              <button type="submit" className="button" disabled={loading}>
                {loading ? "Logging in..." : "Login as Admin"}
              </button>
              <div className="additional-links">
                <div className="signup-link">
                  Don't have an account?{" "}
                  <Link to="/signup" id="signup">
                    Signup
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2>Forgot Password</h2>
              <p>Enter your email to receive a password reset link.</p>
              {error && <p className="error-message">{error}</p>}
              <div className="input-box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <i className="fa-solid fa-envelope email-icon"></i>
              </div>
              <button
                type="button"
                className="button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
              <button
                type="button"
                className="button"
                onClick={() => setForgotPassword(false)}
              >
                Back to Login
              </button>
            </>
          )}
        </form>
      ) : (
        <div className="admin-logged-in">
          <p>You are logged in as Admin.</p>
          <p className="success">Successfully logged in.</p>
        </div>
      )}
    </div>
  );
};

export default AdminLoginForm;
