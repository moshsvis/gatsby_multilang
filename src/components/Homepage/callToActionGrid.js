import React from 'react'
import CallToActionBlock from "./callToActionBlock"
import { CardDeck } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'

export default function CallToActionGrid({ title, callToActions }) {
  return (
    <>
      <SectionTitle title={title} />
      <CardDeck className="px-1">
        {callToActions.map((callToAction, i) => {
             return (
              <CallToActionBlock
                key={i}
                featuredImage={callToAction.featured_image ? callToAction.featured_image.url : null}
                title={callToAction.call_to_action_title}
                content={callToAction.content}
                buttonLabel={callToAction.button_label}
                buttonDestination={callToAction.button_destination ? `${callToAction.button_destination._meta.uid}` : null}
                anchorLinkLabel={callToAction.anchor_link_label}
                anchorLink={callToAction.link_to_anchor}
              />
            )
        })}
      </CardDeck>
    </>
  )
}
