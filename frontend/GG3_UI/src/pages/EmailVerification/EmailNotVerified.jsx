import React from "react";
import { Link } from "react-router-dom";
import "./EmailNotVerified.css";

function EmailNotVerified() {
  return (
    <div className="containerForm">
      <lottie-player
        src="https://lottie.host/68d9c5ab-9391-45b3-a78e-53648a53f013/bUU4dRG1yz.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        autoplay
      ></lottie-player>
      <Link to={"/passwordMailingPage"}>
        <button
          type="submit"
          className="btn btn-lg btn-block signup-btn fw-bold"
          style={{ backgroundColor: "rgb(255, 98, 0)" }}
        >
          Token invalid or expired! Try again
        </button>
      </Link>
    </div>
  );
}

export default EmailNotVerified;
