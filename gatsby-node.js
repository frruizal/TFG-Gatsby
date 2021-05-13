/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/*Generar algunas paginas automaticamente
** Importar los nodos y cargar las paginas
** Estamos escribiendo nuestra propia implementacion de la api crear paginas
** Gatsby usara esto para generar paginas para cada ID de nodo*/
/*
const path = require(`path`);
const {paqinate}= require('gatsby-awesome-pagination');

exports.onCreateNode = ({ node, actions}) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'node__article' || node.internal.type === 'node__noticia' ){
    const id= `${node.path.alias}`;
    createNodeField({
      node,
      name: 'id',
      value: id,
    });
  }

}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const nodos = graphql(`
    {
     allNodeArticle {
        edges {
            node{
                title
                path {
                    alias
                }
                body{
                    value
                }
            }
        }
     }
     allNodeNoticia{
        edges {
            node{
                title
                path {
                    alias
                }
                body{
                    value
                }

            }
        }
     }

    }
  `
    );

  paqinate({
        createPage,
        items: nodos.data.allNodeArticle.nodes,
        itemsPerPage: 10,
        pathPrefix:'/paginacion',
        component: path.resolve('src/templates/paginacion.jsx'),
      });

        nodos.data.allNodeNoticia.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/noticias.jsx`),
            context: {
              id: node.path.alias,
            }
          });
        });

        nodos.data.allNodeArticle.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/articulos.jsx`),
            context: {
              id: node.path.alias,
            }
          });

        });

}
//pasamos el id como variable de contexto y nos permite consultar ese nodo especifico
//ahora los indices se vincularan a una vista completa de la publicacion
*/
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/*Generar algunas paginas automaticamente
** Importar los nodos y cargar las paginas
** Estamos escribiendo nuestra propia implementacion de la api crear paginas
** Gatsby usara esto para generar paginas para cada ID de nodo*/
const path = require(`path`)
//const moment = require('moment');
const {paginate}= require('gatsby-awesome-pagination');
exports.onCreateNode = ({ node, actions}) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'node__article' || node.internal.type === 'node__noticia' ){
    //const date= moment.unix(node.created).format('YYYY/MM/DD');
    const id= `${node.path.alias}`;
    createNodeField({
      node,
      name: 'id',
      value: id,
    });
  }

}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve,reject) => {
    return graphql(`
    {
     allNodeArticle {
        edges {
            node{
                title
                path {
                    alias
                }
                body{
                    value
                }
            }
        }
     }
     allNodeNoticia{
        edges {
            node{
                title
                path {
                    alias
                }
                body{
                    value
                }

            }
        }
     }

    }
  `
    ).then(result =>{
      /*paginate({
        createPage,
        items: result.data.allNodeArticle.nodes,
        itemsPerPage: 10,
        pathPrefix:'/paginacion',
        component: path.resolve('src/templates/paginacion.jsx'),
      });*/
        result.data.allNodeNoticia.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/noticias.jsx`),
            context: {
              id: node.path.alias,
            }
          });
          resolve();
        });

        result.data.allNodeArticle.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/articulos.jsx`),
            context: {
              id: node.path.alias,
            }
          });
          resolve();
        });
      }
    );
  });
}
