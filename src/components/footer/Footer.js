import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import FooterNav from './FooterNav'
import Address from '../Address'
import FooterSecondaryNav from './FooterSecondaryNav'
import StyledAddress from '../common/StyledAddress'

const currentDate = new Date();
const year = currentDate.getFullYear();

const FooterRow = styled(Row)`
    // Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
    background: var(--footer-bg-color);
    padding-top: 2rem !important;

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
    padding-top: 3rem !important;
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}
    `;

const FooterBottomBar = styled(Row)`
    // Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap

background: var(--footer-bottom-bar-bg-color);
// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
    padding-top: 0.5rem;
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}

    `;

const BottomLeft = styled.div`
    margin: 0 auto;

    @media (max-width: 575px) {
        .nav{
            display: block;
            text-align: center;
            margin: 1rem 0;
        }

        .nav-link{
            padding: 0 !important;

        }
    }
`;

const BottomRight = styled.div`
    p{
        color: var(--footer-text-color) !important;
        padding-top: 0.1rem;
        font-size: 0.8rem;
    }

    width: 50%;
    margin: 0 auto;
  `;

const Footer = () => {
    return (
        <Container fluid>
            <FooterRow className="justify-content-md-center py-3 py-md-4" style={{ marginTop: '10vw' }}>
                <Col md={3}>
                    <FooterNav />
                </Col>
                <Col md={3}></Col>
                <Col md={3}>
                    <StyledAddress>
                        <Address />
                    </StyledAddress>
                </Col>
            </FooterRow>
            <FooterBottomBar>
                <Col sm={6}>
                    <BottomLeft>
                        <FooterSecondaryNav />
                    </BottomLeft>
                </Col>
                <Col sm={6}>
                    <StaticQuery
                        query={graphql`
 {
  prismic {
        allContact_datas {
      edges {
        node {
          branding
        }
      }
    }
  }
}
`}
        render={data => (
            <BottomRight>
                <p className="text-center text-md-right mt-md-2">
                    &copy; {data.prismic.allContact_datas.edges[0].node.branding} {year}
                </p>
            </BottomRight>
        )}
                    />
                </Col>
            </FooterBottomBar>
        </Container>
    )
}

export default Footer;