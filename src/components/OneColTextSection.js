import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RichText from "../components/richText"

function OneColTextSection({content}) {
    return (
        <Row className="mt-4 mt-md-1">
            <Col md={1} lg={2}></Col>
            <Col>
                <RichText render={content} />
            </Col>
            <Col md={1} lg={2}></Col>
        </Row>
    )
}

export default OneColTextSection
