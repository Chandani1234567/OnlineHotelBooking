import React, { useState } from "react";
import supabase from "../server/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = ({ closeLogin, toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Store the user email for "Remember Me" functionality
      if (document.getElementById("remember_me").checked) {
        localStorage.setItem("userEmail", email);
      }

      // Handle successful login
      closeLogin(); // Close the login form
      window.location.reload();
    } catch (error) {
      setError(error.message); // Display error message
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) throw error;

      alert("Password reset email sent. Please check your inbox.");
      setForgotPassword(false); // Close the forgot password form
    } catch (error) {
      setError(error.message); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`form_container ${forgotPassword ? "show" : ""}`}>
        <i className="fa-solid fa-times form_close" onClick={closeLogin}></i>
        <div className="form login_form">
          {!forgotPassword ? (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              {error && <p className="error_message">{error}</p>}

              <div className="input_box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <i className="fa-solid fa-envelope email"></i>
              </div>

              <div className="input_box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

              <div className="option_field">
                <span className="checkbox">
                  <input type="checkbox" id="remember_me" />
                  <label htmlFor="remember_me">Remember me</label>
                </span>
                <a
                  href="#"
                  className="forgot_pw"
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="button" disabled={loading}>
                {loading ? "Logging in..." : "Login Now"}
              </button>

              <div className="login_signup">
                Don't have an account?{" "}
                <a href="#" id="signup" onClick={toggleForm}>
                  Signup
                </a>
              </div>
            </form>
          ) : (
            <div className="forgot_password_form">
              <h2>Forgot Password</h2>
              <p>Enter your email to receive a password reset link.</p>
              {error && <p className="error_message">{error}</p>}
              <div className="input_box">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <i className="fa-solid fa-envelope email"></i>
              </div>
              <button
                type="button"
                className="button"
                onClick={handleForgotPassword}
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
