import React from "react";
import "./LandingPage.css";
import CustomNavbar from "../../components/CustomNavbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container-fluid p-0">
      <section id="lp-sec-01">
        <div className="navbar w-100">
          <CustomNavbar />
        </div>
        <div className="lp-content">
          <h1 className="text-white" id="hero-text">
            <span>India's</span> No. 1 Web3 E-Commerce site
          </h1>
          <p id="hero-desc" className="mb-5">
            Discover a World of Technology at Gadget Gateway 3. Explore<br></br>{" "}
            our vast selection of cutting-edge computer parts and electronic{" "}
            <br></br>accessories. Elevate your digital experience with us. Your
            tech <br></br>adventure begins here.
          </p>
          <Link
            id="register-btn"
            style={{
              textDecoration: "none",
              fontSize: "1.2vw",
              textAlign: "center",
              paddingTop: "4px",
            }}
            to={"/signup"}
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
