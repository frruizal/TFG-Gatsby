//plantilla para nuestras publicaciones
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'


export default function Articulos({ data }){
  const post = data.nodeArticle;
  const myurl =data.sitePlugin.pluginOptions.baseUrl;
  return (
    <Layout>
      <article>
        <div className="centrado2">
          <h1 >  { post.title }</h1>
        </div>
        <div className="container">
          <div className="row">

            {post.body.value ? <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div> : ''}
            <div className="centrado">{post.relationships.field_image ? <img src={myurl + post.relationships.field_image.uri.url} alt={post.field_image.alt} height={post.field_image.width}/> : ''} </div>
          </div>
        </div>

      </article>
    </Layout>
  )
};

//consultamos solo por un nodo de articulo pasando una identificacion como argumento
//ahora podemos actualizar node js para usarlo al generar paginas

export const query = graphql`
   query($id: String!) {
      sitePlugin(name: {eq: "gatsby-source-drupal"}) {
        pluginOptions {
            baseUrl}
            }
       nodeArticle(fields: { id: { eq: $id } }) {
       title
      field_image {
         alt
        height
        width
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
       }
     }
   }`

