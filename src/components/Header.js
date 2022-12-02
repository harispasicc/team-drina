import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar
        id="header"
        style={{
          height: "80px",
        }}
        variant="lignt"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img width={200} height={60} src={logo} alt="x" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
