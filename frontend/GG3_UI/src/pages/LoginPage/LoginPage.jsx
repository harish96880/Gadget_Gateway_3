import React from "react";
import "./LoginPage.css";
import CustomNavbar from "../../components/CustomNavbar";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <section>
      <CustomNavbar />
      <div className="signup-form my-5">
        <form>
          <h2 className="text-white">Login with your credentials</h2>
          <p className="hint-text">
            Log in with your social media account or email address
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
              type="email"
              className="form-control input-lg"
              name="email"
              placeholder="Email Address"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input-lg"
              name="password"
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
