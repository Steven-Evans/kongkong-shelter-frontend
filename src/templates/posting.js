import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

export const query = graphql`
query PostingTemplate($id: Int!) {
  strapiPosting(strapiId: { eq: $id }) {
    title
    description
    media {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`



const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPosting.title}</h1>
    <Img fluid={data.strapiPosting.media.childImageSharp.fluid} />
    <p>{data.strapiPosting.description}</p>
  </Layout>
)

export default ArticleTemplate