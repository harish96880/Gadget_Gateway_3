import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

function Page404() {
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
          src="https://lottie.host/93d5106f-264a-4999-a820-ad9d77d21450/LNyCAktIit.json"
          background="transparent"
          speed={1}
          style={{ width: "40vw" }}
          loop=""
          autoPlay=""
        />
        <p style={{ fontFamily: "monospace", fontSize: "2vw" }}>
          Page not found!!!
        </p>
      </div>
    </>
  );
}

export default Page404;
