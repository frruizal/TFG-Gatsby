import React from 'react';

import { graphql, StaticQuery, Link} from 'gatsby';
import {Button,Card,CardImg} from "react-bootstrap";
//Aqui se va a mostrar la lista de todos los nodos disponibles
const Contenido=({data}) => (
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

      const articuloList= data.allNodeArticle.edges.map(post =>(

        <Card bg="light">
        <div className="container">
          <div className="row">
            <div className="col-12 col col-md-6 text center">
              {post.node.relationships.field_image ? <img src={myurl + post.node.relationships.field_image.uri.url} alt={post.node.relationships.field_image.alt} height={post.node.relationships.field_image.width}/> : <img src="https://www.agiliacenter.com/wp-content/uploads/2017/02/drupal-cms.png" />}
            </div>
            <div className="col-12 col-md-6 text-center text-md-left align-self-md-center">
              <h2 >{post.node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.node.body.summary}}></div>
              <div align="right"> <Link to={post.node.path.alias} className="btn btn-outline-primary">Read more</Link></div><br></br>
            </div>
          </div>
        </div>
        </Card>



        )
      );

      const noticialist= data.allNodeNoticia.edges.map(notice =>(
          <div>
            <h2 > {notice.node.title}</h2>
            <div align="right"><Link to={notice.node.path.alias} >Read more</Link></div>
            <div dangerouslySetInnerHTML={{ __html: notice.node.body.summary }}></div>

            <hr></hr>
          </div>

        )
      );

      return <section >{articuloList}{noticialist}</section>;
    }}
  />)

export default Contenido

