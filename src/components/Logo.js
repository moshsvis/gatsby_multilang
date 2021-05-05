import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { useLocation } from '@reach/router'

const StyledLogo = styled.img`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
width: 90vw;
margin-top: 8rem;

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
    display: none !important;
}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}
`;

function Logo({logo}) {
    const { pathname } = useLocation();
    if(pathname === "/"){
        return (
            // Do only show on phone view (d-sm-none)
            <Container fluid className="d-sm-none" >
                <Row style={{ height: "100vh", backgroundColor:"var(--footer-bottom-bar-bg-color)"}}>
                <Col>
                    <StyledLogo src={logo} className="mx-auto d-block" />
                </Col>
            </Row>
            </Container>
        )
    } else { return null; }
}

export default Logo