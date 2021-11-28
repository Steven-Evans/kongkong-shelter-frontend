import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { List, Card } from "antd";

import Hero from "../components/Hero/index";
import Divider from "../components/Divider/index";
import Layout from "../components/NavLayout/index";
import SEO from "../components/seo";
import * as styles from "./styles/index.module.less";

const HomeDetails = () => {};

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Divider />
    <div>
      {/*<ul>*/}
      {/*  {*/}
      {/*    data.allStrapiHomeDetail.edges.map(item => (*/}
      {/*      <li key={item.node.id}>*/}
      {/*        */}
      {/*      </li>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</ul>*/}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.allStrapiHomeDetail.edges.map((item) => item.node)}
        grid={{}}
        className={styles.homeDetails}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <div className={styles.card}>
              <span className={styles.card.title}>{item.title}</span>
              <Img className={styles.card.detailImage} fluid={item.media.childImageSharp.fluid} />
              <span className={styles.card.detail}>{item.details}</span>
            </div>
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
