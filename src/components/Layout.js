/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./footer/Footer"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from "react-helmet"
import { locals } from '../../local-config'
import { GlobalStyle, defaultColors, defaultFonts } from './common/GlobalStyles'

const Layout = ({ children }) => {

  console.log('prismicPreviewScript', locals.prismicPreviewScript);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Sniglet&display=swap" rel="stylesheet"></link>
        {locals.prismicPreviewScript}
      </Helmet>
      <StaticQuery
        query={graphql`
              {
                prismic {
                  allDesigns {
                    edges {
                      node {
                        fonts {
                            font_target
                            google_fonts_name
                        }
                        header_bg_color
                        header_link_color
                        page_bg_color
                        page_link_color
                        page_text_color
                      }
                    }
                  }
                }
              }
              `}

        render={data => {

          let colors = defaultColors;
          if (data.prismic.allDesigns.edges[0]) {
            colors = data.prismic.allDesigns.edges[0].node;
          }

          let fonts = defaultFonts;
          if (data.prismic.allDesigns.edges[0]) {
            fonts = data.prismic.allDesigns.edges[0].node.fonts;
          }


          // check if color from prismic if not aply default color
          for (let key in colors) {
            if (colors[key] === null) {
              colors[key] = defaultColors[key];
            }
          }

          // check if fonts from prismic if not aply default font
          for (let index = 0; index < fonts.length; index++) {
            const element = fonts[index];
            if (element.font_target === "Logo") {
              fonts.logo_font = element.google_fonts_name;
            } else if (element.font_target === "Standard") {
              fonts.page_font = element.google_fonts_name;
            } else if (element.font_target === "Navigation") {
              fonts.nav_font = element.google_fonts_name;
            }
          }

          for (let key in fonts) {
            if (fonts[key] === null) {
              fonts[key] = defaultFonts[key];
            }
          }

          
          return (
            <>
              <Header headerbgcolor={colors.header_bg_color}/>
              <>
                <GlobalStyle 
                  headerbgcolor = {colors.header_bg_color}
                  headerlinkcolor = {colors.header_link_color}
                  pagebgcolor = {colors.page_bg_color}
                  pagetextcolor = {colors.page_text_color}
                  pagelinkcolor = {colors.page_link_color}
                  logofont = {fonts.logo_font}
                  pagefont = {fonts.page_font}
                  navfont = {fonts.nav_font}
                  />
                <Container fluid>{children}</Container>
              </>
              <Footer />
            </>
          )
        }}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout