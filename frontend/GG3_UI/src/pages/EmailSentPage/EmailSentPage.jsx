import React from "react";
import { Link } from "react-router-dom";
import "./EmailSentPage.css";

function EmailSentPage() {
  return (
    <>
      <Link
        className="navbar-brand"
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
      <div className="container">
        <lottie-player
          src="https://lottie.host/ad81c111-43a9-42e4-901c-023eeb0464ce/tWji9pZhWt.json"
          background="transparent"
          speed={1}
          style={{ width: 300, height: 300 }}
          loop=""
          autoPlay=""
        />

        <p style={{ fontFamily: "monospace", fontSize: "2vw" }}>
          Email sent! Verify your email to continue
        </p>
        <Link style={{ fontSize: "1.3vw" }} to={"/login"}>
          Login here
        </Link>
      </div>
    </>
  );
}

export default EmailSentPage;
