import React from "react"
import CallToActionGrid from "./callToActionGrid"
import TeaserSection from './TeaserSection'
import CardGallery from './Cardgallery'
import Carousel from './Carousel'
import Text from '../Text'
import TwoTextOneInfo from '../TwoTextOneInfo'

const SliceZone = ({ node }) => {
  console.log('SliceZone Node', node);
  return (
    <>
      {node.body.map((bodyContent, i) => {
        if (bodyContent.type === "text") {
          return (
            <Text
            key={i}
            title={bodyContent.primary.site_title}
            text={bodyContent.primary.rich_text}
            />
            )
          } 
          if (bodyContent.type === "2_text_1_info") {
            return (
              <TwoTextOneInfo
                key={i}
                text={bodyContent.fields[0].text}
                info={bodyContent.fields[0].info}
              />
            )
          } 
        if (bodyContent.type === "call_to_action_grid") {
          return (
            <CallToActionGrid
              key={i}
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
            />
          )
        } 
        if (bodyContent.type === "anrisstext") {
          return (
            <TeaserSection
              key={i}
              teasers={bodyContent.fields}
            />
          )
        }
        if (bodyContent.type === "carousel") {
          return (
            <CardGallery
              key={i}
              images={bodyContent}
              title={bodyContent.primary.section_title}
            />
          )
        } 
        if (bodyContent.type === "bilder-karussell") {
          return (
            <Carousel
              key={i}
              images={bodyContent.fields}
            />
          )
        }
        else { return null; }
      })}
    </>
  )
};

export default SliceZone;