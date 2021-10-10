//plantilla para nuestras publicaciones
import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

/*Linea 15 como un if si es nulo que muestre vacio*/
export default function Noticias ({ data }){
  const noticia = data.nodeNoticia;

  return (
    <Layout>
      <noticia>
        <h1>  { noticia.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: noticia.body.value }}></div>
      </noticia>
    </Layout>

  )
};

//consultamos solo por un nodo de articulo pasando una identificacion como argumento
//ahora podemos actualizar node js para usarlo al generar paginas


export const query = graphql`
  query($id: String!) {
      nodeNoticia(fields: { id: { eq: $id } }) {
      title
      body {
        value
      }
    }
  }`
