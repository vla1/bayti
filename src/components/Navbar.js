import React from "react";
import "./Navbar.css";
import { Navbar, Container,Nav, NavDropdown} from "react-bootstrap";

function NavbarHeader(){
return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img id="logo" src={require("../img/logo-color.JPG")} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/eventos">Eventos</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
)
}
export default NavbarHeader;