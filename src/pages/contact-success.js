import React from 'react'
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

export default function ContactSuccess() {
    return (
        <StyledFullScreenDiv>
        <StyledDiv>
            <h1>
                Besten Dank für Deine Kontaktaufnahme. Ich werde mich so bald wie möglich melden.
            </h1>
                <StyledLinkButton herobutton="true" to="/">Zurück zur Startseite</StyledLinkButton>
        </StyledDiv>
        </StyledFullScreenDiv>
    )
}
