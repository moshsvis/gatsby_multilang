import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'
import StyledLinkButton from '../components/common/StyledLinkButton'

const StyledFullScreenDiv = styled.div`
    background-color: #3b4b67;
    color: #97a6bf;
    height: 100vh;
`;

const StyledDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    h1{
        margin-bottom: 2rem;
    }
`;

const NotFoundPage = () => (
  <StyledFullScreenDiv>
    <SEO title="404: Not found" />
    <StyledDiv>
    <h1>404: Not Found</h1>
    <p>Leider hast Du eine eine Seite getroffen, die nicht existiert.</p>
      <StyledLinkButton herobutton="true" to="/">Zurück zur Startseite</StyledLinkButton>
    </StyledDiv>
  </StyledFullScreenDiv>
)

export default NotFoundPage
