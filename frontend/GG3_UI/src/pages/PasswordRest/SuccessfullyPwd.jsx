import React from "react";
import { Link } from "react-router-dom";
import "./SuccessfullyPwd.css";

function SuccessfullyPwd() {
  return (
    <div className="containerForm">
      <lottie-player
        src="https://lottie.host/84bb3a13-83c6-4c25-9286-a262a1ef9629/aV6cwzsh0u.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        autoplay
      ></lottie-player>
      <Link to={"/login"}>
        <button
          type="submit"
          className="btn btn-lg btn-block signup-btn fw-bold"
          style={{ backgroundColor: "rgb(255, 98, 0)" }}
        >
          Log in
        </button>
      </Link>
    </div>
  );
}

export default SuccessfullyPwd;
