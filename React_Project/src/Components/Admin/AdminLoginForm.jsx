import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLoginForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token } = response.data;
      if (token) {
        localStorage.setItem("authToken", token);
        // Redirect to dashboard or any other authenticated route
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data);
      setError(error.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    // Redirect to login page after logout
    window.location.href = "/login";
  };

  // Function to check if user is logged in based on token existence
  const isLoggedIn = () => {
    return !!localStorage.getItem("authToken");
  };

  return (
    <div className="admin-login-form-container">
      {!isLoggedIn() ? (
        <form onSubmit={handleSubmit} className="admin-login-form">
          <h2>Admin Login</h2>
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
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
              <a href="/signup" id="signup">
                Signup
              </a>
            </div>
          </div>
        </form>
      ) : (
        <div className="admin-logged-in">
          <p>You are logged in as Admin.</p>
          <h3 className="success" >
           Successfully
          </h3>
        </div>
      )}
    </div>
  );
};

export default AdminLoginForm;
