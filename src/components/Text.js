import React from 'react'
import PageTitle from './PageTitle'
import OneColTextSection from './OneColSection'

function Text({title, text}) {
    return (
        <>
            <PageTitle pageTitle={title} />
            <OneColTextSection content={text} />
        </>
    )
}

export default Text
