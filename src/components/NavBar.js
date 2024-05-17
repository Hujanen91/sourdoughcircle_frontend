import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/sourdoughWEBP.webp";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fa-duotone fa-house" style={{"--fa-primary-color": "#af4732", "--fa-secondary-color": "#ff7300",}}></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fa-duotone fa-right-to-bracket" style={{"--fa-primary-color": "#af4732", "--fa-secondary-color": "#ff7300",}}></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fa-duotone fa-user-plus" style={{"--fa-primary-color": "#af4732", "--fa-secondary-color": "#ff7300",}} ></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;