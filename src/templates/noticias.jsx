//plantilla para nuestras publicaciones
import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'

/*Linea 15 como un if si es nulo que muestre vacio*/
export default ({ data }) => {
    const noticia = data.nodeNoticia;
    const myurl =data.sitePlugin.pluginOptions.baseUrl;
    return (
        <Layout>
            <noticia>
                <h1>  { noticia.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: noticia.body.value }}></div>
                {noticia.field_fecha ? <div dangerouslySetInnerHTML={{ __html: noticia.field_fecha}}></div>: ''}
                {noticia.field_web? <div> <Link to={noticia.field_web.uri}>{noticia.field_web.title}</Link></div>: ''}

                {noticia.relationships.field_imagen ? <img src={myurl + noticia.relationships.field_imagen.uri.url} alt={noticia.field_imagen.alt} height={noticia.field_imagen.width}/> : ''}
            </noticia>
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
      nodeNoticia(fields: { id: { eq: $id } }) {
      title
      field_fecha(formatString: "ddd, DD/MM/YYYY - hh:mm")
      field_web{
        title
        uri
      }
      field_imagen {
         alt
        height 
        width
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
      } 
    }
  }`