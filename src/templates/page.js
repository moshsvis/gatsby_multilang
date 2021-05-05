import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageTitle from '../components/PageTitle'
import OneColTextSection from '../components/OneColTextSection'
import PageSliceZone from '../components/PageSliceZone'

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
           allPages(id: $id) {
        edges {
          node {
            body {
              ... on PRISMIC_PageBodyTextspalten {
              type
              fields {
                text_in_column
              }
            }
            ... on PRISMIC_PageBodyBildergalerie {
              type
              primary {
                section_title
                gallerie_type
              }
              fields {
                alt
                image
                link {
                  ... on PRISMIC__ImageLink {
                    url
                  }
                  ... on PRISMIC__ExternalLink {
                    target
                    url
                  }
                }
              }
            }
          }
            page_title
            content
            _meta {
              uid
              id
            }
          }
        }
      }
    }
  }
  `  
  export default function Page(props) {
    console.log('page props', props);
        
  return (
    <Layout>
      <PageTitle pageTitle={props.data.prismic.allPages.edges[0] ? props.data.prismic.allPages.edges[0].node.page_title : null} />
      <OneColTextSection content={props.data.prismic.allPages.edges[0] ? props.data.prismic.allPages.edges[0].node.content :null} />
      <PageSliceZone node={props.data.prismic.allPages.edges[0] ? props.data.prismic.allPages.edges[0].node : null} />
    </Layout>
  );
}