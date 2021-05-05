import React from 'react'
import { Row, Col } from 'react-bootstrap'

function TwoColSection({colleft, colright}) {
    return (
        <Row>
            <Col lg={2} md={1}></Col>
            <Col sm={12} md={5} lg={4} className="mr-md-4">{colleft}</Col>
            <Col sm={12} md={5} lg={4} className="ml-md-4">{colright}</Col>
            <Col lg={2} md={1}></Col>
        </Row>
    )
}

export default TwoColSection
