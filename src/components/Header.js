import React, { useContext } from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
import { Context } from "../contexts/Contexts";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function Header() {
  const { handleShow, handleShowOptions } = useContext(Context);

  return (
    <div>
      <Navbar id="header" className="navbar" variant="lignt">
        <Container>
          <Navbar.Brand href="/">
            <img width={200} height={60} src={logo} alt="x" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>
          <Button className="in-memo-button" onClick={handleShow}>
            Add in memo
          </Button>
          <Button className="form-pet--button" onClick={handleShowOptions}>
            Forms for pets
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
