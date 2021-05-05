import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'

const StyledNavbarBrand = styled(Navbar.Brand)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
font-family: var(--logo-font);

a.navbar-brand{
  color: var(--header-link-color) !important;
  font-weight: bold !important;
  font-size: 1.8rem;
  margin-left: 1rem;
  letter-spacing: .2rem;
}

img.logo{ 
      display: none !important;
  }

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
  
}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {
  
}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {

  img.logo{ 
      display: block !important;
      width: ${props => props.pathname !== "/" ? "10rem" : props.scrolled ? "10rem" : "19rem"};
      position: absolute;
      top: ${props => props.pathname !== "/" ? "20px" : props.scrolled ? "20px" : "40px"};
      left: ${props => props.pathname !== "/" ? "40px" : props.scrolled ? "40px" : "80px"};
  }
  
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {
  
}
  }`

export default StyledNavbarBrand;