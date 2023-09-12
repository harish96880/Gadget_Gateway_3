import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand
        href="/"
        style={{
          marginLeft: "100px",
          color: "white",
          fontSize: "2vw",
          fontWeight: "100",
        }}
      >
        Gadget Gateway 3
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5" style={{ width: "45vw", float: "right" }}></Nav>
        <Nav style={{ marginRight: "100px", color: "white" }}>
          <Link
            className="text-white mx-5"
            to={"/login"}
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            className="text-white"
            id="sign-up-btn"
            to={"/signup"}
            style={{ textDecoration: "none" }}
          >
            Signup
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
