import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css'

function CustomNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" style={{ marginLeft: '100px', color: 'white', fontSize: '2vw', fontWeight: '100'}}>
        Gadget Gateway 3
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        </Nav>
        <Nav style={{ marginRight: '100px', color: 'white' }}>
          <Nav.Link href="/login" className='text-white mx-5'>Login</Nav.Link>
          <Nav.Link href="/signup" className='text-white' id='sign-up-btn'>Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
