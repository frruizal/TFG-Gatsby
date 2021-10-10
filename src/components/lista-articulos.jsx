import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

//Aqui se va a mostrar la lista de todos los articulos disponibles
const PaginaArticulos = ({data}) => (
  <StaticQuery
    query={graphql`
      query {
        allNodeArticle(sort: {fields: [created],order: DESC}) {
            edges {
                node {
                    title
                    path {
                        alias
                    }
                    body {
                        value
                    }
                }
            }
        }
        }
    `}
    render={data => {
      const artlist = data.allNodeArticle.edges.map(post => (
          <div>
            <div><Link to={post.node.path.alias}> {post.node.title}</Link></div>
            <div dangerouslySetInnerHTML={{__html: post.node.body.value}}></div>
          </div>

        )
      );
      return <section>{artlist}</section>;
    }}
  />)

export default PaginaArticulos
