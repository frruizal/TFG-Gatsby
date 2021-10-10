//plantilla para la paginacion

import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import Layout from '../components/layout'
import Pager from '../components/pager'

//Aqui se va a mostrar la lista de todos los articulos disponibles
const PaginaArticulos = ({data,pageContext}) => (
  <StaticQuery
    query={graphql`
     query {
      allNodeArticle(
        sort: {fields: [created],order: DESC}
        skip: 10
        limit: 10
      ) {
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
   }`}
    render={data => {
      const artlist = data.allNodeArticle.edges.map(post => (
          <div>
            <div><Link to={post.node.path.alias}> {post.node.title}</Link></div>
            <div dangerouslySetInnerHTML={{__html: post.node.body.value}}></div>
            <Pager pageContext={pageContext}></Pager>
          </div>

        )
      );
      return <section>{artlist}</section>;
    }}
  />)

export default PaginaArticulos
