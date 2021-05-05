import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from '../components/Homepage/Carousel'
import StyledModal from '../components/common/StyledModal'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

const StyledCardDeck1 = styled(CardDeck)`
margin: 0 -15px -10vw -15px;
`;

const StyledCard1 = styled(Card)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
margin: -0.1px !important;

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
    
    // determins breakepoint
    min-width: 18rem;

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {

    // determins breakepoint
    // three pics in row
    /* min-width: 24rem; */
    // four pics in row
    min-width: 20rem;
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {


}
`;
const StyledCardDeck2 = styled(CardDeck)`
margin: 0 0.5rem -9.8vw 0.5rem
`;

const StyledCard2 = styled(Card)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
    margin-bottom: 1.8rem !important;

    .card-img{
        border-radius: 1rem;
    }

    border-radius: 1rem;

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
    
    // determins breakepoint
    min-width: 18rem;

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
    margin-bottom: 1.6rem !important;

    // determins breakepoint
    // three pics in row
    /* min-width: 24rem; */
    // four pics in row
    min-width: 20rem;
    
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {


}
`;

const StyledCardDeck = StyledCardDeck2;
const StyledCard = StyledCard2;

function ImageGallery({ images }) {
    
    let imageArray = images.fields;
    console.log('imageArray', imageArray);

    const changeIndex = (arrayToUpdate, elementToReposition, newIndex) => {
        if (newIndex > arrayToUpdate.length - 1) {
            console.log('Array index out of bounds');
            return null;
        } else if (!(arrayToUpdate.includes(elementToReposition))) {
            console.log('Element not found');
            return null;
        }

        arrayToUpdate.splice(arrayToUpdate.indexOf(elementToReposition), 1);
        arrayToUpdate.splice(elementToReposition, newIndex);
        console.log('arrayToUpdate', arrayToUpdate);
        return arrayToUpdate;
    }
    
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        console.log('img in handleShow 1',i);
        changeIndex(imageArray, i, 0);
        console.log('imageArray after change',imageArray);
        setShow(true);}
    // End Modal

    console.log('images array in imageGallery', images.fields);
    if (images.primary.gallerie_type === "Link nach Bildkarussell"){
        console.log('Gallery type', images.primary.gallerie_type);
        return (
            <>
            <StyledCardDeck className="mt-5">
                    {images.fields.map((image, i) => (
                    <StyledCard key={i}>
                            <Card.Link onClick={() => {handleShow(i)}}>
                                <Card.Img src={image.image ? image.image.url : null} />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card.Link>
                    </StyledCard>
                ))}
            </StyledCardDeck>
                <StyledModal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="xl"
                    centered
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Body>
                        <Modal.Header closeButton />
                        <Carousel images={imageArray} ImageGallery="true" />
                    </Modal.Body>
                </StyledModal>
            </>
        )
    } if (images.primary.gallerie_type === "Link auf externe Site") {
        return (
            <CardDeck>
                {images.fields ? images.fields.map((image, i) => (
                    <Card key={i}>
                        <Card.Link href={image.link ? image.link.url : null} target={image.link ? image.link.target : null}>
                            <Card.Img src={image.image.url} />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card.Link>
                    </Card>
                )) : null}
            </CardDeck>
        )
    }
}

export default ImageGallery
