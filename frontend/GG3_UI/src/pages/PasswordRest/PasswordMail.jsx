import React, { useState } from "react";
import axios from "axios";
import "./PasswordMail.css";
import { Link } from "react-router-dom";

function PasswordMail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/emailpasswordreset", { email })
      .then(alert("check your mail"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="containerForm">
        <Link
          className="navbar-brand text-white my-5"
          style={{
            textDecoration: "none",
            fontSize: "2vw",
            fontWeight: 300,
            margin: 5,
          }}
          to={"/"}
        >
          Gadget Gateway 3
        </Link>
        <div className="containerContent">
          <div className="cardForm">
            <h3 className="h4 text-white mb-4">Reset verification link</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input-lg text-dark mb-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-block signup-btn"
                  style={{ backgroundColor: "rgb(255, 98, 0)" }}
                >
                  Get mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordMail;
