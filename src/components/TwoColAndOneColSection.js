import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RichText from "../components/richText"

function TwoColAndOneColSection({text}) {
    return (
        <Row className="mt-4 mt-md-1">
            <Col md={8}>
                <Row>
                    <Col className="pl-5">
                        <RichText render={text} />
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row>
                    <Col className="pl-5">
                        <h2>News</h2>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TwoColAndOneColSection
