import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledRow = styled(Row)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
margin-top: 6rem !important;
background: var(--portrait-img-bg);

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {
    display: flex;

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
/* margin-top: 1rem !important; */

}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}
`;

const StyledTextCol = styled(Col)`
    p{
        color: var(--portrait-img-text-color);
    }
    h4{
        color: var(--portrait-img-title-color);
    }
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        display: flex;
        flex: 1 0 50%;
        align-items: center;
        justify-content: center;
    }
        color: var(--page-bg-color);
`;

const StyledImageCol = styled(Col)`
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        flex: 1 0 50%;
    }
`;

export default function ImageAndText({ image, text }) {
    return (
        <StyledRow className="pt-lg-5 pb-lg-5 mt-lg-4 mb-3 mb-lg-5">
            <Col lg={2} md={1}></Col>
            <StyledTextCol sm={12} md={5} lg={4} className="pt-4 pb-4">
                <div>
                    {text}
                </div>
            </StyledTextCol>
            <StyledImageCol sm={12} md={5} lg={4} className="">{image}</StyledImageCol>
            <Col lg={2} md={1}></Col>
        </StyledRow>
    )
}
