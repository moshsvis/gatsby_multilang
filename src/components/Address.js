import React from 'react'
import { graphql, StaticQuery } from "gatsby"

export default function Address() {

  return (
    <StaticQuery
      query={graphql`
 {
  prismic {
    allContact_datas {
      edges {
        node {
          first_name
          name
          street
          zip_code
          place
          phone
          email
          website
          facebook
         }
      }
    }
  }
}
`}
      render={data => {
        if (data.prismic.allContact_datas.edges[0]){
          const contactData = data.prismic.allContact_datas.edges[0].node;
          return (
            <div>
              <h3 className="mt-1 text-center text-md-left">
                {data.prismic.allContact_datas.edges[0].node.contact_details_title ? 
                data.prismic.allContact_datas.edges[0].node.contact_details_title[0].text : null}<br />
              </h3>
              <address>
                {contactData.first_name} {contactData.name}<br />
                {contactData.street}<br />
                {contactData.zip_code} {contactData.place}<br />
                <a href={`https://www.google.com/maps/search/?api=1&query=${contactData.street}+${contactData.zip_code}+${contactData.place}`}>
                  {contactData.street && contactData.zip_code && contactData.place ? "Google Map Link" : null}
                  </a><br />
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a><br />
                {contactData.phone}<br />
                <a href={`https://${contactData.website}`}>{contactData.website}</a ><br />
                <a href={`https://facebook.com/${contactData.facebook}`}>{contactData.facebook}</a>
              </address>
            </div>
          )
        }
      }}
    />
  )
}