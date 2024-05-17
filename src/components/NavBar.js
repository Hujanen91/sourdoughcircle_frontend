import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/sourdoughWEBP.webp";

const NavBar = () => {
    return (
      <Navbar expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" height="75" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <Nav.Link>
                <i className="fa fa-house-chimney-user" style={{color: "#af4732",}}/>Home
              </Nav.Link>
              <Nav.Link>
                <i className="fa fa-arrow-right-to-bracket" style={{color: "#af4732",}}></i>Sign in
              </Nav.Link>
              <Nav.Link>
                <i className="fa fa-user-plus" style={{color: "#af4732",}}></i>Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;