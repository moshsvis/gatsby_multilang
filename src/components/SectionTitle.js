import React from 'react'
import RichText from "./richText"
import { Row, Col } from 'react-bootstrap'

export default function SectionTitle({title}) {
    return (
        <Row>
            <Col className="mb-lg-4 mt-lg-5 ml-lg-5">
                <RichText render={title} />
            </Col>
        </Row>
    )
}
