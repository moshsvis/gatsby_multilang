import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import { hexToRgbA, darkenLighten } from './ColorAdjust'

const StyledImage = styled.img`
height: 20px;
width: 20px;
`;

const StyledTopNavbar = styled(Navbar)`
  // Extra small devices (portrait phones, less than 576px)
  // No media query for xs since this is the default in Bootstrap
  margin-top: 3rem;
  background-color: transparent !important;

      .nav-link{
      margin-right: 1rem;
    }

  // Small devices (landscape phones, 576px and up, col-sm)
  @media (min-width: 576px) {

  }
  // Medium devices (tablets, 768px and up, col-md)
  @media (min-width: 768px) {

  }
  // Large devices (desktops, 992px and up, col-lg)
  @media (min-width: 992px) {
    // Opacity factor should come from TopNav props in Nav and not in Navbar
    background-color: ${props => hexToRgbA(props.headerbgcolor, (props.opacity/100))} !important;
    font-size: 0.8rem;
    height: 30px;
    margin-top: 0;

    .nav-link{
      margin-right: 2rem;
    }
  }
  // Extra large devices (large desktops, 1200px and up, col-xl)
  @media (min-width: 1200px) {

}
`;

export {StyledTopNavbar, StyledImage};