import React from 'react'
import RichText from "../richText"
import StyledLinkButton from '../common/StyledLinkButton'
import OneColSection from '../../components/OneColSection'

export default function TeaserItem({anchor, title, content, buttonDestination, buttonLabel}) {
    const teaserItem = (
        <section id={anchor}>
            <article>
                <RichText render={title} />
                <RichText render={content} />
            </article>
            <StyledLinkButton to={buttonDestination} className="btn btn-outline-danger">
                {buttonLabel}
            </StyledLinkButton>
        </section>
    )
    
    return (
        <OneColSection content = {teaserItem} />
    )
}
