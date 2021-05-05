import React from 'react'
import { Nav } from 'react-bootstrap'
import StyledLink from '../common/StyledLinks'
import { useLocation } from '@reach/router';
import { graphql, StaticQuery } from "gatsby"

export default function FooterNav() {
    const { pathname } = useLocation();

    return (
        <StaticQuery
            query={graphql`
 {
  prismic {
        allNavigations {
      edges {
        node {
          navigation_links {
            lable
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Portrait {
              _meta {
                uid
              }
            }
            ... on PRISMIC_Kontakt {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}
`}
            render={data => {
              return (
          <Nav className="flex-column mb-4">
              <Nav.Item className="mt-1">
                  <StyledLink footernav="true" to="/" className="nav-link text-center text-md-left" active={pathname === "/"}>Home</StyledLink>
              </Nav.Item >
              {
                  data.prismic.allNavigations.edges[0].node.navigation_links.map((link, i) => {
                      return (
                          <Nav.Item key={i}>
                            {/* turnary expression because homepage has no _meta what causes problems */}
                          <StyledLink footernav="true" to={link.link._meta ? `/${link.link._meta.uid}` : null} className="nav-link text-center text-md-left" 
                            active={link.link._meta ? pathname === `/${link.link._meta.uid}` : null}>
                            {link.link._meta ? link.lable : null}
                              </StyledLink>
                          </Nav.Item>
                      )
                  })
              }
          </Nav>
              )
            }
          }
            />
    )
}
