import React from 'react';

import { graphql, StaticQuery} from 'gatsby';
import { Navbar, Nav} from "react-bootstrap";
//Aqui se va a mostrar la lista de todos los nodos disponibles

const Contenido=({data,props}) => (
  <StaticQuery
    query={graphql`
     query {
     sitePlugin(name: {eq: "gatsby-source-drupal"}) {
        pluginOptions {
            baseUrl}
            }
        allNodeNoticia(sort: {fields: [created],order: ASC}) {
            edges {
                node {
                    title
                    path {
                        alias
                    }
                     relationships {
                      field_imagen {
                        uri{
                          url
                        }
                      }
                    }
                    body {
                        value
                        summary
                    }
                }
            }
        }
        allNodeArticle(sort: {fields: [created],order: ASC}) {
            edges {
                node {
                    title
                    path {
                        alias
                    }
                    relationships {
                      field_image {
                        uri{
                          url
                        }
                      }
                    }
                    body {
                        value
                        summary
                    }
                }
            }
        }
        }
    `}
    render={ data => {
      const head =

        <Navbar className="navbar-custom" variant="dark">

        <Nav className="collapse navbar-collapse justify-content-center">
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



      return <section >{head}</section>;
    }}
  />)

export default Contenido
