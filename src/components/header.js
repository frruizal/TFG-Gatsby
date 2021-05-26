import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import Hamburguesa from './menu-responsive'


    function header(){
      let header=
        <Navbar className="navbar-custom" variant="dark">

        <Nav className="collapse navbar-collapse justify-content-center ">
          <Nav.Link href="../">Inicio</Nav.Link>
          <Nav.Link href="../introduccion">Introducción</Nav.Link>
          <Nav.Link href="../antecedentes">Antecedentes</Nav.Link>
          <Nav.Link href="#alcanceyobjetivos">Alcance y objetivos</Nav.Link>
          <Nav.Link href="#gestion">Gestión</Nav.Link>
          <Nav.Link href="#analisisydiseño">Análisis y diseño</Nav.Link>
          <Nav.Link href="#implementacion">Implementacion</Nav.Link>
          <Nav.Link href="#inplantacion">Implantacion</Nav.Link>
          <Nav.Link href="#conclusion">Conclusion</Nav.Link>
        </Nav>
      </Navbar>
     return(
       <div className="navbar-custom"><Hamburguesa ></Hamburguesa>
       <nav className="menuweb">
         {header}
       </nav>
       </div>
     )}
    export default header
