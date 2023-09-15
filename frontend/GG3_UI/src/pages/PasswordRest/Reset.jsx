import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Reset() {
  const { id } = useParams();

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationErrors.length == 0) {
      axios
        .post(`http://localhost:8000/get/datafor/${id}`, { password })
        .then((res) => {
          if (res.data === "successpwd") {
            navigate("/passwordcs");
          }
        });
    }
  };

  const passwordHandleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control input-lg text-dark mb-2"
          name="password"
          value={password}
          onChange={passwordHandleChange}
          placeholder="Enter your new password"
          required="required"
        />
        <input type="checkbox" onChange={toggleShowPassword} />
        &nbsp; Show password
      </div>
      <ul>
        {validationErrors.map((error, index) => (
          <li key={index} style={{ color: "black" }}>
            {error}
          </li>
        ))}
      </ul>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-lg btn-block signup-btn"
          style={{ backgroundColor: "rgb(255, 98, 0)" }}
        >
          Change password
        </button>
      </div>
    </form>
  );
}

export default Reset;
