import React from 'react';

import { graphql, StaticQuery} from 'gatsby';
import {Carousel} from "react-bootstrap";
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
      const myurl =data.sitePlugin.pluginOptions.baseUrl;
      const noticialist=

        <Carousel>
          {data.allNodeNoticia.edges.map(notice =>(
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={myurl + notice.node.relationships.field_imagen.uri.url}
                  alt={notice.node.relationships.field_imagen.alt}
                  width="1685"
                  height="475"

                />
                <Carousel.Caption>
                  <h2>{notice.node.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: notice.node.body.summary}}></div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          )}
        </Carousel>



      return <section >{noticialist}</section>;
    }}
  />)

export default Contenido
