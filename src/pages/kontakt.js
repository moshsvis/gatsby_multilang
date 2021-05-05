import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/PageTitle'
import TwoColSection from '../components/TwoColSection'
import ContactForm from '../components/ContactForm'
import Layout from "../components/Layout"
import StyledAddress from '../components/common/StyledAddress'
import Address from '../components/Address'

export const query = graphql`
{
  prismic {
    allKontakts {
            edges {
                node {
                title
                }
            }
        }
  }
}
`
function Contact(props) {
    return (
        <Layout>
            <PageTitle pageTitle={props.data.prismic.allKontakts.edges[0].node.title} />
            <TwoColSection
                colleft={<ContactForm />}
                colright={
                <StyledAddress pageaddress>
                    <Address />
                </StyledAddress>} />
        </Layout>
    )
}

export default Contact
