import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageTitle from '../components/PageTitle'

export const query = graphql`
query ProgrammQuery($id: String) {
  prismic {
    allProgramms(id: $id) {
      edges {
        node {
          titele
          date_time
          place
          image
          rich_text
          _meta {
            id
            uid
          }
        }
      }
    }
  }
}
`

function programm(props) {
    console.log('programm props', props);
    return (
        <Layout>
            <PageTitle pageTitle={props.data.prismic.allProgramms.edges[0].node.titele} />
        </Layout>
    )
}

export default programm
