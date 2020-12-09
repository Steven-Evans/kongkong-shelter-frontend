import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { List } from "antd";

import Hero from "../components/Hero/index";
import Divider from "../components/Divider/index";
import Layout from "../components/NavLayout/index";
import SEO from "../components/seo";
import styles from "./styles/index.module.less";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Divider />
    <div >
      <ul>
        {
          data.allStrapiHomeDetail.edges.map(item => (
            <li key={item.node.id}>
              
            </li>
          ))
        }
      </ul>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.allStrapiHomeDetail.edges.map(item => item.node)}
        renderItem={item => (
          <List.Item
            key={item.id}
            extra={
              <Img className={styles.detailImage} fluid={item.media.childImageSharp.fluid}/>
            }
          >
            <List.Item.Meta
              title={item.title}
            />
            {item.details}
          </List.Item>
        )}
      />
      {/*<ul>
        { data.allStrapiPosting.edges.map(posting => (
          <li key={posting.node.id}>
            <h2>{posting.node.title}</h2>
             { posting.node.media.map(med => (
              <img key={med.id} src={med.url} />
            ))} 
            <Img fluid={posting.node.media.childImageSharp.fluid} />
            <p>{posting.node.description}</p>
          </li>
        ))}
      </ul>*/}
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiHomeDetail {
      edges {
        node {
          id
          title
          details
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
