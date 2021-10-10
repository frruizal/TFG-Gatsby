import React from 'react';

import { graphql, StaticQuery, Link} from 'gatsby';

//Aqui se va a mostrar la lista de todos los nodos disponibles
const Contenido=({data,props}) => (
  <StaticQuery
    query={graphql`
     query {
     sitePlugin(name: {eq: "gatsby-source-drupal"}) {
        pluginOptions {
            baseUrl}
            }
        allNodeNoticia(sort: {fields: [created],order: DESC}) {
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
        allNodeArticle(sort: {fields: [created],order: DESC}) {
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
          <div className="container">
            <hr></hr>
            <div className="row">
              <h2 align="left">{post.node.title}</h2>
              <div className="col-12 col col-md-3 text left">
                {post.node.relationships.field_image ? <img src={myurl + post.node.relationships.field_image.uri.url} height={post.node.relationships.field_image.width}/> : <img src="https://www.agiliacenter.com/wp-content/uploads/2017/02/drupal-cms.png" />}
              </div>
              <div className="col-12 col-md-9 text-left">
                { post.node.body.summary ? <p dangerouslySetInnerHTML={{ __html: post.node.body.summary}}></p> : ''}
                <div align="right"> <Link to={post.node.path.alias} className="btn btn-outline-secondary">Leer más</Link></div><br></br>
              </div>
            </div>
          </div>
        )
      );



      return <section >{articuloList}</section>;
    }}
  />)

export default Contenido
