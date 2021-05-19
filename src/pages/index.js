import * as React from "react"


import Cont from '../components/indexCom';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cont></Cont>

  </Layout>
)

export default IndexPage
