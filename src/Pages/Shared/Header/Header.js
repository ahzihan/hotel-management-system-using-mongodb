import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="text-white mx-3 text-decoration-none fw-bold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white mx-3 text-decoration-none fw-bold"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="text-white mx-3 text-decoration-none fw-bold"
              to="/about"
            >
              About
            </Link>
            {
              user ? <Link onClick={handleSignOut}
                className="text-white mx-3 text-decoration-none fw-bold"
                to="/login"
              >
                Sign Out
              </Link> : <Link
                className="text-white mx-3 text-decoration-none fw-bold"
                to="/login"
              >
                Login
              </Link>
            }

          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
