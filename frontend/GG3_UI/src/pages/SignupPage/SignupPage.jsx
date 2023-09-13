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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then(navigate("/login"))
      .catch((err) => console.log(err));
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
              type="password"
              className="form-control input-lg text-dark"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required="required"
            />
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
