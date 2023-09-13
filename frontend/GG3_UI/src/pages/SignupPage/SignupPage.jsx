import React, { useState } from "react";
import "./SignupPage.css";
import CustomNavbar from "../../components/CustomNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [validationErrors, setValidationErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationErrors.length == 0) {
      axios
        .post("http://localhost:8000/register", {
          firstName,
          lastName,
          email,
          password,
        })
        .then(navigate("/login"))
        .catch((err) => console.log(err));
    }
  };

  const passwordHandleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation
    const errors = [];
    if (newPassword.length < 6 || newPassword.length > 12) {
      errors.push("Password must be between 6 and 12 characters.");
    }
    if (!/[A-Z]/.test(newPassword)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(newPassword)) {
      errors.push("Password must contain at least one special character.");
    }
    if (!/\d/.test(newPassword)) {
      errors.push("Password must contain at least one number.");
    }
    setValidationErrors(errors);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <CustomNavbar />
      <div className="signup-form my-5">
        <form onSubmit={handleSubmit}>
          <h2 className="text-white">Create Account</h2>
          <p className="hint-text">
            Signup with your social media account or email address
          </p>
          <div className="social-btn text-center">
            <a href="#" className="btn btn-primary btn-lg">
              <i className="fa fa-facebook" /> Facebook
            </a>
            <a href="#" className="btn btn-info btn-lg">
              <i className="fa fa-twitter" /> Twitter
            </a>
            <a href="#" className="btn btn-danger btn-lg">
              <i className="fa fa-google" /> Google
            </a>
          </div>
          <div className="or-seperator">
            <b>or</b>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input-lg text-dark"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Firstname"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input-lg text-dark"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Lastname"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control input-lg text-dark"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control input-lg text-dark mb-2"
              name="password"
              value={password}
              onChange={passwordHandleChange}
              placeholder="Password"
              required="required"
            />
            <input type="checkbox" onChange={toggleShowPassword} />
            &nbsp;show password
            <ul>
              {validationErrors.map((error, index) => (
                <li key={index} style={{ color: "yellow" }}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-lg btn-block signup-btn"
              style={{ backgroundColor: "rgb(255, 98, 0)" }}
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center text-white">
          Already have an account?
          <Link to="/login" style={{ color: "orange", textDecoration: "none" }}>
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
