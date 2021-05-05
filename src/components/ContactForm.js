import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import RichText from "./richText"
import Form from 'react-bootstrap/Form'
import StyledButton from './common/StyledButton'
import styled from 'styled-components'
import '../app.css'

const StyledFormControl = styled(Form.Control)`
    background-color: var(--page-bg-color);
    border-top:  var(--page-bg-color);
    border-left:  var(--page-bg-color);
    border-right:  var(--page-bg-color);
    border-bottom: var(--page-link-color) 1px solid;
    border-radius: 0;
    color: var(--page-link-color);
    width: 100%;

        &:focus{
            box-shadow: none;
            outline: none;
            background-color: var(--page-bg-color);
            border-bottom: var(--page-link-color) 2px solid;
        }
`;

// pseudo styles on app.css
const style = {
    background: "var(--page-bg-color)",
    borderTop: 'var(--page-bg-color)',
    borderLeft: "var(--page-bg-color)",
    borderRight: "var(--page-bg-color)",
    borderRadius: 0,
    color: "var(--page-link-color)",
}

export default function ContactForm(props) {
    // console.log('Contact Props', props);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        // event.preventDefault();
        setValidated(true);
    };

    return (
        <StaticQuery
            query={graphql`
   {
    prismic {
          allContact_forms{
      edges {
        node {
        form_title
          form_description
          form_fields {
            field_name
            field_type
            required
            invalid_feedbackText
          }
        }
      }
    }
}     
  }
`}
render={data => {
    if (data.prismic.allContact_forms.edges.length > 0){
        // console.log('contact form data', data);
        return (
            <>
                <RichText render={data.prismic.allContact_forms.edges[0].node.form_title} />
                <RichText render={data.prismic.allContact_forms.edges[0].node.form_description} />
                <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    action="/contact-success"
                    lang="de"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    {data.prismic.allContact_forms.edges[0].node.form_fields.map((field, i) => {
                        if (field.field_type !== 'textarea') {
                            return (
                                <Form.Group key={i}>
                                    <StyledFormControl
                                        name={field.field_name}
                                        placeholder={field.field_name}
                                        required={field.required === 'Ja'}
                                        type={field.field_type}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {field.invalid_feedbackText}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            );
                        } else {
                            return (
                                <Form.Group key={i}>
                                    <Form.Control
                                        as={field.field_type}
                                        rows={3}
                                        name={field.field_name}
                                        required
                                        placeholder={field.field_name}
                                        style={style}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {field.invalid_feedbackText}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            )
                        }
                    })}
                    <StyledButton variant="outline-danger" type="submit">
                        Senden
                    </StyledButton>
                </Form>
            </>
        )
    }
            } 
        }
        />
    )
}
