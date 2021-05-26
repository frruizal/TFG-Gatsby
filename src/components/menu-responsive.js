import React, {useState} from "react";
import { Navbar, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Menuresponsive(){
  const  [showMenu, setShowMenu]= useState(false)

  let hambur
  if (showMenu){
    hambur =
      <Navbar className="navbar-custom" variant="dark">
      <Nav className="collapse navbar-collapse justify-content-center">
        <div>
          <Nav.Link href="../">Inicio</Nav.Link>
          <Nav.Link href="../introduccion">Introducción</Nav.Link>
          <Nav.Link href="../antecedentes">Antecedentes</Nav.Link>
          <Nav.Link href="#alcanceyobjetivos">Alcance y objetivos</Nav.Link>
          <Nav.Link href="#gestion">Gestión</Nav.Link>
          <Nav.Link href="#analisisydiseño">Análisis y diseño</Nav.Link>
          <Nav.Link href="#implementacion">Implementacion</Nav.Link>
          <Nav.Link href="#inplantacion">Implantacion</Nav.Link>
          <Nav.Link href="#conclusion">Conclusion</Nav.Link>
        </div>
      </Nav>
      </Navbar>
  }
  return(
    <nav className="hamburgdesign">
      <span className="text-xl">
       <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}></FontAwesomeIcon>
      </span>
      {hambur}
    </nav>


  )}
export default Menuresponsive
