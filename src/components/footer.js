import React, { useEffect } from "react";
import { Carousel, Layout, Space, Typography } from "antd";
import "./footer.less";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ceil } from "lodash";

const { Title } = Typography;

const Footer = () => {
  // need useStaticQuery for non page/* and template/* files
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allStrapiAlumniCarouselImage {
        edges {
          node {
            name
            url
            picture {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const alumni = data.allStrapiAlumniCarouselImage.edges;

  console.log("alumni", alumni);
  console.log("data amt", data.allStrapiAlumniCarouselImage.edges.length);
  /*
    Carousel slidesToShow must be <= number of actual slides available
   */

  return (
    <Layout.Footer style={{ textAlign: `center`, background: `#ab202b` }}>
      <Title>Kong Kong Alumni</Title>
      <div>
        <Carousel
          slidesToShow={ceil(alumni.length * 2) / 3}
          centerMode={true}
          draggable={true}
          swipeToSlide={true}
          touchThreshold={50}
          focusOnSelect={true}
        >
          {alumni.map((document) => {
            return (
              <div key={document.node.name}>
                <a href={document.node.url}>
                  <Img
                    fluid={document.node.picture.childImageSharp.fluid}
                    alt={document.node.name}
                    key={document.node.name}
                  />
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="icons-list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="#000"
        >
          <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4 7.28V4.5h-2.29c-2.1 0-3.42 1.6-3.42 3.89v1.67H8v2.77h2.29v6.67h2.85v-6.67h2.29l.57-2.77h-2.86V8.94c0-1.1.58-1.66 1.72-1.66H16z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="#000"
        >
          <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.89 4.5H8.9C6.33 4.5 4.6 6.15 4.5 8.66V15.09c0 1.3.42 2.41 1.27 3.23a4.34 4.34 0 0 0 2.88 1.17l.27.01h6.16c1.3 0 2.4-.42 3.18-1.18a4.25 4.25 0 0 0 1.23-2.95l.01-.26V8.9c0-1.28-.42-2.36-1.21-3.15a4.24 4.24 0 0 0-2.92-1.23l-.26-.01zm-6.2 1.4h6.24c.9 0 1.66.26 2.2.8.47.5.77 1.18.81 1.97V15.1c0 .94-.32 1.7-.87 2.21-.5.47-1.17.74-1.98.78H8.92c-.91 0-1.67-.26-2.21-.78-.5-.5-.77-1.17-.81-2V8.88c0-.9.26-1.66.8-2.2a2.98 2.98 0 0 1 2-.78h6.45-6.23zM12 8.1a3.88 3.88 0 0 0 0 7.74 3.88 3.88 0 0 0 0-7.74zm0 1.39a2.5 2.5 0 0 1 2.48 2.48A2.5 2.5 0 0 1 12 14.45a2.5 2.5 0 0 1-2.48-2.48A2.5 2.5 0 0 1 12 9.49zm4.02-2.36a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76z" />
        </svg>
      </div>
      <div className="copyright">
        © Kongkong Dog Rescue {new Date().getFullYear()} made by Fellow Dog
        Lovers ૮ˆﻌˆა
      </div>
    </Layout.Footer>
  );
};

export default Footer;
