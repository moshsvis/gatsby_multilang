import React from 'react'
import { Nav } from 'react-bootstrap'
import StyledLink from '../common/StyledLinks'

export default function FooterSecondaryNav() {
    return (
        <Nav>
            <Nav.Item>
                <StyledLink bottombarlink="true" to="/datenschutzerklaerung" className="nav-link">
                    Datenschutzerklärung
                </StyledLink>
            </Nav.Item>
            <Nav.Item>
                <StyledLink bottombarlink="true" to="/impressum" className="nav-link">
                    Impressum
                </StyledLink>
            </Nav.Item>
        </Nav>
    )
}