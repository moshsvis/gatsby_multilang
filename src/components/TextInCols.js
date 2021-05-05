import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RichText from "../components/richText"

function TextInCols({ contents }) {
    return (
        <Row className="mt-4 mt-md-1">
            {contents.fields.map((content, i) => {
                return (
                    <Col sm={1} md={4} key={i}>
                        <RichText render={content.text_in_column} />
                    </Col>
                )
            })
            }
        </Row>
    )
}

export default TextInCols
