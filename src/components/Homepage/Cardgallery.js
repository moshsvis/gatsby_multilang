import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import RichText from "../richText"
import styled from "styled-components"
import SectionTitle from '../../components/SectionTitle'

const StyledCard = styled(Card)`
    // determins breakepoint
    min-width: 18rem;
    margin-bottom: 1.5rem !important;
    background: var(--component-bg-color);
`;

export default function Cardgallery({ title, images }) {
    return (
        <>
        <SectionTitle title={title} />
        <CardDeck>
            {images.fields.map((image, i) => (
                <StyledCard key={i}>
                    <Card.Img variant="top" src={image.image.url} alt={image.alt} />
                    <Card.Body>
                        <Card.Title>
                            <RichText render={image.caption_title} />
                        </Card.Title>
                        <Card.Text>
                            <RichText render={image.caption_text} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </StyledCard>
            ))}
        </CardDeck>
        </>
    )
}
