import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [ user ] = useAuthState( auth );

  const handleSignOut = () => {
    signOut( auth );
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white mx-3 text-decoration-none fw-bold" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-white mx-3 text-decoration-none fw-bold" as={Link} to="/gallery">Gallery</Nav.Link>
            <NavDropdown className="text-white mx-3 text-decoration-none fw-bold" title="Services" id="colaps-nab">
              <NavDropdown.Item href="home#single">Single</NavDropdown.Item>
              <NavDropdown.Item href="home#double">Double</NavDropdown.Item>
              <NavDropdown.Item href="home#family">Family</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link className="text-white mx-3 text-decoration-none fw-bold" as={Link} to="/about">About</Nav.Link>
          <Nav>
            {
              user ? <Nav.Link onClick={handleSignOut} className="text-white mx-3 text-decoration-none fw-bold" as={Link} to="/login">Sign Out</Nav.Link> : <Nav.Link className="text-white mx-3 text-decoration-none fw-bold" as={Link} to="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
