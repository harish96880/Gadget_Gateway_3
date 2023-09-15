import React, { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control input-lg text-dark"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required="required"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-lg btn-block signup-btn"
          style={{ backgroundColor: "rgb(255, 98, 0)" }}
        >
          Get mail
        </button>
      </div>
    </form>
  );
}

export default PasswordMail;
