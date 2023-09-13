import React, { useState } from "react";
import "./LoginPage.css";
import CustomNavbar from "../../components/CustomNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.role === "admin" && res.data.verified) {
          navigate("/dashboard");
        } else if (res.data.verified) {
          navigate("/home");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <CustomNavbar />
      <div className="signup-form my-5">
        <form onSubmit={handleSubmit}>
          <h2 className="text-white">Login with your credentials</h2>
          <p className="hint-text">
            Log in with your social media account or email address
          </p>
          <div className="social-btn text-center">
            {/* <a href="#" className="btn btn-primary btn-lg">
              <i className="fa fa-facebook" /> Facebook
            </a>
            <a href="#" className="btn btn-info btn-lg">
              <i className="fa fa-twitter" /> Twitter
            </a> */}
            <a href="#" className="btn btn-danger btn-lg">
              <i className="fa fa-google" /> Google
            </a>
          </div>
          <div className="or-seperator">
            <b>or</b>
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required="required"
            />
            <input type="checkbox" onChange={toggleShowPassword} />
            &nbsp; Show password
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-lg btn-block signup-btn"
              style={{ backgroundColor: "rgb(255, 98, 0)" }}
            >
              Log in
            </button>
          </div>
        </form>
        <div className="text-center text-white">
          New to GG3?
          <Link to="/signup" style={{ color: "orange" }}>
            Register here
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
