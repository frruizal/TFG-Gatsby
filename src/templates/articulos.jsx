//plantilla para nuestras publicaciones
import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'


export default ({ data }) => {
  const post = data.nodeArticle;
  const myurl =data.sitePlugin.pluginOptions.baseUrl;
  return (
    <Layout>
      <article>
        <h1>  { post.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
        {post.field_fecha_creacion ? <div dangerouslySetInnerHTML={{ __html: post.field_fecha}}></div>: ''}
        {post.field_link? <div> <Link to={post.field_web.uri}>{post.field_web.title}</Link></div>: ''}
        {post.relationships.field_image ? <img src={myurl + post.relationships.field_imagen.uri.url} alt={post.field_imagen.alt} height={post.field_imagen.width}/> : ''}
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
      field_fecha_creacion(formatString: "ddd, DD/MM/YYYY - hh:mm")
      field_link{
        title
        uri
      }
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

