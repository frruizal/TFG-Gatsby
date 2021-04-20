import * as React from "react"

import Contenido from '../components/lista-nodos';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Contenido></Contenido>

  </Layout>
)

export default IndexPage
