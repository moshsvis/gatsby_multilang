// Wrapping the Address component as it is used in different parent components with different styles
import styled from 'styled-components'

const StyledAddress = styled.div`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
width: 70%;
margin: auto !important;
color: ${props => props.pageaddress ? "var(--page-text-color)" : "var(--footer-text-color)"};
text-align: center;

h3{
    font-size: ${props => props.pageaddress ? "2rem" : "1.5rem"};
    color: ${props => props.pageaddress ? "var(--page-title-color)" : "var(--footer-text-color)"} !important;
}

address {
    line-height: 1.4;
    font-size: ${props => props.pageaddress ? "1.2rem" : "1.2rem"}
    }

a{
    color: ${props => props.pageaddress ? "var(--page-link-color)" : "var(--footer-link-color) !important"};
    text-decoration: underline;
}

a:hover, a:active, a:focus{
    color: ${props => props.pageaddress ? "var(--page-link-hover-color)" : "var(--header-and-footer-link-hover-color) !important"};
}

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
    text-align: left;
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}
`
export default StyledAddress;
