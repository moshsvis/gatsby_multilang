import React from 'react'
import RichText from "../richText"
import StyledLinkButton from "../common/StyledLinkButton"
import StyledAnchorLinkButton from '../common/StyledAnchorLinkButton'
import { Card } from "react-bootstrap"
import styled from 'styled-components'

const StyledCard = styled(Card)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
    margin-bottom: 1.5rem !important;
    background: transparent;
    // Overrides the default
    padding: 0 !important;
    border: none;

    .rounded{
        border-radius: 1.5rem !important;
    }

    .card-footer{
        background: transparent;
        border-top: none;
        margin-top: -1.8rem;
    }

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
    border-radius: 2rem;

    // determins breakepoint
    min-width: 18rem;

    background: var(--component-bg-color);
}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {

    // determins breakepoint
    min-width: 24rem;
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {


}
`;

export default function ({ title, content, buttonLabel, buttonDestination, featuredImage, anchorLink, anchorLinkLabel }) { //destructure from the props
    const anchorLinkComponent = (
        <StyledAnchorLinkButton to={`/#${anchorLink}`} className="btn-sm btn btn-outline-danger">
            {anchorLinkLabel}
        </StyledAnchorLinkButton>
    );

    const goToPageLink = (
        <StyledLinkButton to={buttonDestination} className="btn-sm btn btn-outline-danger">
            {buttonLabel}
        </StyledLinkButton>
    );
    
    return (
        <StyledCard>
            <Card.Body>
                {featuredImage ? // check if image was delivered and render it conditionally
                    <Card.Img src={featuredImage} alt="featured" className="featured-image-wrapper rounded" />
                    : null}
                <Card.Title className="mt-3">
                    <RichText render={title} />
                </Card.Title>
                <RichText render={content} />
            </Card.Body>
            <Card.Footer>
                {anchorLink ? anchorLinkComponent : goToPageLink}
            </Card.Footer>
        </StyledCard>
    )
}
