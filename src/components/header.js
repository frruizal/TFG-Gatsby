import * as React from "react"
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";


export default (props) => (
  <Navbar className="navbar-custom" variant="dark">
    <Navbar.Brand href="/">Inicio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="introduccion">Introducción</Nav.Link>
      <Nav.Link href="#pricing">Antecedentes</Nav.Link>
      <Nav.Link href="#features">Alcance</Nav.Link>
      <Nav.Link href="#home">Gestión</Nav.Link>
      <Nav.Link href="#features">Diseño</Nav.Link>
      <Nav.Link href="#pricing">Antecedentes</Nav.Link>
      <Nav.Link href="#home">Implementacion</Nav.Link>
      <Nav.Link href="#features">Implantacion</Nav.Link>
      <Nav.Link href="#pricing">Conclusion</Nav.Link>
    </Nav>
  </Navbar>
)
