import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import RichText from "../components/richText"
import { Image } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import ImageAndText from '../components/ImageAndText'
// import ThemeContext from './index'

const StyledImage = styled(Image)`
  // Extra small devices (Team phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
  border-radius: 30px;
  width: 100%;
  height: auto;

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {

}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
  border-radius: 100px;

}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}

`;

export const query = graphql`
{
  prismic {
    allPortraits {
      edges {
        node {
          page_title
          bild_und_text {
            portrait_foto
            portrait_foto_text
          }
        }
      }
    }
  }
}
`
export default function Team(props) {

    const pageTitle = props.data.prismic.allPortraits.edges[0].node.page_title;
    const imageAndTextImageUrl = props.data.prismic.allPortraits.edges[0].node.bild_und_text[0].portrait_foto.url;
    const imageAndTextText = props.data.prismic.allPortraits.edges[0].node.bild_und_text[0].portrait_foto_text;
    // const imageUrl = props.data.prismic.allPortraits.edges[0].node.image.url;

    return (
        <Layout>
            <PageTitle pageTitle={pageTitle} />
            <ImageAndText
                image={<StyledImage src={imageAndTextImageUrl} />}
                text={<RichText render={imageAndTextText} />}
            />
        </Layout>
    )
}
