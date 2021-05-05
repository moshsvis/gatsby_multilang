import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import RichText from "../richText"

const StyledCarousel = styled(Carousel)`
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: -5rem;
`;

export default function Carousell({ images, ImageGallery }) {
  console.log('Carousel Images', images[0].image);
  return (
    <StyledCarousel fade>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <a href={image.link}>
            {!ImageGallery ? 
            <img
              className="d-block w-100"
              srcSet={`${image.image.url} ${image.image.dimensions.width}w,
               ${image.image.tablet.url} ${image.image.tablet.dimensions.width}w,
                ${image.image.landscape_phone.url} ${image.image.landscape_phone.dimensions.width}w,
                 ${image.image.phone.url} ${image.image.phone.dimensions.width}w`}
              src={image.image.phone.url}
              alt={image.alt}
            /> : 
            <img 
            className="d-block w-100"
            src={image.image.url}
            alt={image.alt} />
            }
          </a>
          <Carousel.Caption>
            <RichText render={image.caption_title} />
            <RichText render={image.caption_text} />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  )
}
