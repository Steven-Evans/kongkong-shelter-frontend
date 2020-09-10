import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/NavLayout/index";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      { data.allStrapiPosting.edges.map(posting => (
        <li key={posting.node.id}>
          <h2>{posting.node.title}</h2>
          {/* { posting.node.media.map(med => (
            <img key={med.id} src={med.url} />
          ))} */}
          <Img fluid={posting.node.media.childImageSharp.fluid} />
          <p>{posting.node.description}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPosting {
      edges {
        node {
          id
          title
          description
          media {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

// media {
//   childImageSharp {
//     fluid(maxWidth: 340, maxHeight: 550, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
