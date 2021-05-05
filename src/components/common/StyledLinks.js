import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLinks = styled(Link)`
    color: ${ props => props.footernav || props.bottombarlink ? "var(--footer-text-color)" : "var(--header-link-color)"} !important;
    font-weight: ${props => props.active ? "bold" : null};
    text-decoration: ${props => props.active ? "underline" : null};
    /* color: ${props => props.active ? "var(--header-and-footer-link-hover-color) !important" : null}; */
    padding: ${ props => props.footernav ? 0 : null};
    font-size: ${ props => props.bottombarlink ? "0.9rem" : "1.2rem"};

    &:hover, &:focus{
        color: ${props => props.navbarbrand ? null : "var(--header-and-footer-link-hover-color)!important"};
        text-decoration: ${ props => props.navbarbrand ? "none !important" : "underline !important"};
    }

    &:visited{ // Same as color
        color: ${ props => props.footernav || props.bottombarlink ? "var(--footer-text-color)" : "var(--header-link-color)"} !important;
    }
`;

export default StyledLinks;
