import React, { useState, useEffect } from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import StyledLink from './common/StyledLinks'
import { useLocation } from '@reach/router'
import { graphql, StaticQuery } from "gatsby"
import TopNav from './TopNav'
import { StyledNavbar, StyledNavbarToggle } from './common/Stylednavbar'
import StyledNavbarBrand from './common/StyledNavbarBrand'
import Logo from './Logo'
import pathBuilder from '../utils/pathBuilder'

const Header = ({ headerbgcolor }) => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 800);
    });
  }, []); 

  const [expanded, setExpanded] = useState(false);

  const { pathname } = useLocation();

  return (
    <StaticQuery
      query={graphql`
   {
    prismic {
    allMulti_level_navigations {
      edges {
        node {
          branding
          logo
          menue_transparent
          body {
            ... on PRISMIC_Multi_level_navigationBody1st_level {
              primary {
                link_text
                nav_link {
                  ... on PRISMIC_Kontakt {
                    _meta {
                      uid
                      lang
                    }
                  }
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                      lang
                    }
                  }
                }
              }
              type
            }
            ... on PRISMIC_Multi_level_navigationBody2nd_level {
              type
              fields {
                third_level_link {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                      lang
                    }
                  }
                  ... on PRISMIC_Portrait {
                    _meta {
                      uid
                      lang
                    }
                  }
                }
                third_level_link_text
              }
              primary {
                link_text
              }
            }
          }
        }
      }
    }
  }
  }`}

      render={data => {
        console.log(data,"data")
          // totally transparent = 0.1, oposite = 100
          const defaultSettings = {
            transparentnavbar: 0.1,
          }

          let transparentnavbar = data.prismic.allMulti_level_navigations.edges[0].node.menue_transparent;

        if (transparentnavbar === null || transparentnavbar === 0){
            transparentnavbar = defaultSettings.transparentnavbar;
          }
         
        return (
          <>
          {/* Logo is used only on phone view */}
            <Logo logo={data.prismic.allMulti_level_navigations.edges[0].node.logo.url} />
          <StyledNavbar 
          expand="lg" 
          transparentnavbar={scroll ? null : transparentnavbar} 
          headerbgcolor={headerbgcolor}
          fixed="top"
          scrolled={scroll ? 1 : 0} // instead of true : false
          pathname={pathname}
          expanded={expanded}
          >
            {data.prismic.allMulti_level_navigations.edges[0].node.logo ? 
                <StyledNavbarBrand href="/" pathname={pathname} scrolled={scroll ? 1 : 0}>
              <img
                src={data.prismic.allMulti_level_navigations.edges[0].node.logo.url}
                  className="d-inline-block align-top logo"
                alt={data.prismic.allMulti_level_navigations.edges[0].node.logo.alt}
              />
            </StyledNavbarBrand> : null
            }
          <StyledNavbarBrand
            scrolled={scroll ? 1 : 0} // instead of true : false
            pathname={pathname}
          >
            <StyledLink navbarbrand="true" to="/" className="navbar-brand">
                {data.prismic.allMulti_level_navigations.edges[0].node.branding}
            </StyledLink>
          </StyledNavbarBrand>
            <StyledNavbarToggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
              <TopNav headerbgcolor={headerbgcolor} />
              <Nav as="ul" className="ml-auto main-nav">
              <StyledLink to="/" className="nav-link" active={pathname === "/"}>Home</StyledLink>
                {data.prismic.allMulti_level_navigations.edges[0].node.body.map((navlevel, i) => {
                  // console.log('all levels link', navlevel);
                  if(navlevel.type === "2nd_level"){
                    // console.log('2end nav_level', navlevel);
                    return (
                      <NavDropdown title={navlevel.primary.link_text} id="basic-nav-dropdown" key={i}>
                      {navlevel.fields.map((navlink, i) => {
                        {/* console.log('third level link', navlink); */}
                        return (
                          <NavDropdown.Item as="li" key={i}>
                            {
                              <StyledLink to={navlink.third_level_link._meta ? pathBuilder(navlink.third_level_link._meta): null} 
                                className="nav-link" active={navlink.third_level_link._meta ?pathname === pathBuilder(navlink.third_level_link._meta): null}>
                                {navlink.third_level_link_text}
                              </StyledLink>
                            }
                          </NavDropdown.Item>
                          )
                        })}
                        </NavDropdown>
                   
                   
                    )
                  }

                  if (navlevel.type === "1st_level" && navlevel.primary.link_text !== "Home"){
                    return (
                      <Nav.Item as="li" key={i}>
                        {
                          <StyledLink to={navlevel.primary.nav_link._meta ? pathBuilder(navlevel.primary.nav_link._meta ) : null} 
                            className="nav-link" active={navlevel.primary.nav_link._meta ? pathname === pathBuilder(navlevel.primary.nav_link._meta ) : null}>
                            {navlevel.primary.link_text}
                          </StyledLink>
                        }
                      </Nav.Item>
                    )
                  }
              })
              }
            </Nav>
          </Navbar.Collapse>
        </StyledNavbar>
        </>
      )}}
    />
  )
};

export default Header;
