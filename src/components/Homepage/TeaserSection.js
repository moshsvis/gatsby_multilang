import React from 'react'
import TeaserItem from './TeaserItem'

export default function TeaserSection({teasers}) {

    return (
        <div>
            {teasers.map((teaser, i) => {
            return (
              <TeaserItem
                key={i}
                anchor={teaser.anchor}
                title={teaser.title}
                content={teaser.teasertext}
                buttonLabel={teaser.button_label}
                buttonDestination={`${teaser.link_to_correspondig_text._meta.uid}`}
                 />
            )
        })}
        </div>
    )
}
