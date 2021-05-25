/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Carousel from "./carou"
import "./layout.css"
import {Nav, Navbar} from "react-bootstrap";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Carousel></Carousel>

          <main>{children}</main>

      <div className="view-content row">
          <footer
            style={{
              marginTop: `2rem`,
            }}
          ><Navbar className="navbar-custom" variant="dark">
            <div className="container">
            <div className="row">
              <Nav className="collapse navbar-collapse justify-content-left">
                <Nav.Link href="https://www.gatsbyjs.com">Contact</Nav.Link>
              </Nav>
            </div></div>
          </Navbar>
          </footer>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
