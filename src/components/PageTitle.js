import React from 'react'
import {Row, Col } from 'react-bootstrap'
import RichText from "../components/richText"

export default function PageTitle({pageTitle}) {
    return (
        <>  
            {/* Don't show when emty */}
            {!pageTitle ? null : pageTitle[0] === undefined ? null : pageTitle[0].text !== "" ? <Row style={{ marginTop: "6rem" }}>
                <Col md={1} lg={2}></Col>
                <Col className="mt-4 mt-lg-5 mb-md-4 pt-lg-4">
                    <RichText render={pageTitle} />
                </Col>
                <Col md={1} lg={2}></Col>
            </Row> : null}
        </>
    )
}
