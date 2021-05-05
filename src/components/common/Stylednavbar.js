import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import { hexToRgbA, darkenLighten } from './ColorAdjust'


const StyledNavbar = styled(Navbar)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap

  background-color: ${props => props.scrolled ? "var(--footer-bg-color)" : "var(--footer-bottom-bar-bg-color)"};
  color: var(--header-link-color);
  text-transform: uppercase;
  text-align: center;

  .nav-link, #basic-nav-dropdown{
  font-size: 1.2rem;
  }

  .nav-link{
    margin-top: 0.5rem;
  }

  ul.navbar-nav {
    margin-top: 4rem;
    padding-bottom: 2rem;
  }


  li.dropdown-item a{
    font-size: 1.6rem;
    text-transform: none;
  }
  
  // Style of menue-items in the expanded mobile nav
  .nav-link, #basic-nav-dropdown{
    color: ${props => darkenLighten(props.headerbgcolor, 20)} !important;
    font-size: 1.8rem;
  }

  .dropdown-menu{
    background-color: ${props => darkenLighten(props.headerbgcolor, -140)};
    text-align: center;
  }

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
  background-color: ${props => props.pathname !== "/" ? "var(--footer-bg-color)" : props.scrolled ? "var(--footer-bg-color)" : "transparent"};
  .navbar-toggler{
    display: ${props => props.pathname !== "/" ? "block" : props.scrolled ? "block" : "none"}; 
  }
}

// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {
  .navbar-toggler{
    display: none;
  }

}

// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {

  background-color: transparent;
  height: ${props => props.scrolled ? "55px" : null};
  font-size: ${props => props.scrolled ? "1rem" : "1.3rem"};
  margin-top: 30px;

  ul.navbar-nav {
    margin-top: 0;
    // to center the links vertical
    padding-bottom: 5px;
  }

  .main-nav{
    background-color: ${props => props.pathname !== "/" ? "var(--footer-bg-color)" : props.scrolled ? "var(--footer-bg-color)" : hexToRgbA(props.headerbgcolor, "0.45")};
    padding: ${props => props.pathname !== "/" ? "0.5rem 1.2rem" : props.scrolled ? "0.5rem 1.2rem" : "0.8rem 2rem"};
    margin-top: ${props => props.pathname !== "/" ? "3rem" : props.scrolled ? "3rem" : "2rem"} !important;
    border-radius: 50px;
    margin-right: ${props => props.pathname !== "/" ? "2rem" : props.scrolled ? "2rem" : "3rem"};
    }

  .nav-link, #basic-nav-dropdown{
    // Should be imported from GlobalStyles
    color: ${darkenLighten("#2b5f2d", 180)} !important;
    margin: 0;
    font-size: ${props => props.pathname !== "/" ? "1.2rem" : props.scrolled ? "1.2rem" : "1.4rem"};
    }

    .dropdown-menu{
    background-color: ${props => props.pathname !== "/" ? "var(--footer-bg-color)" : props.scrolled ? "var(--footer-bg-color)" : hexToRgbA(props.headerbgcolor, "0.75")};
    margin-top: ${props => props.scrolled ? "1rem" : "0.8rem"} !important;
    text-align: left;
    line-height: 0.5;
    border-radius: 1rem;
  }

  .dropdown-menu a{
    font-size: ${props => props.scrolled ? "0.9rem" : "1.2rem"} !important;

  }

    .dropdown-item{
      border-radius: 1rem;
      &:hover{
        background-color: ${props => hexToRgbA(props.headerbgcolor, "0.95")};
      }

  }
  
}

// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {
  
}
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
  background-color: var(--header-bg-color) !important;
  border: 0;
  &:focus{
    outline: none;
  }
`;

export {StyledNavbar, StyledNavbarToggle};