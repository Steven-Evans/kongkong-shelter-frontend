import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/NavLayout/index";
import Accordion from "../components/accordion";

const FAQ = ({ data }) => {

  return (<Layout>
    <div>
      {data.allStrapiFaq.edges.map(document => (
        <Accordion
          key={document.node.question}
          title={document.node.question}
          content={document.node.answer}
          media={document.node.media}
        />
      ))}
    </div>
  </Layout>
  );

};

FAQ.propTypes = {
  data: PropTypes.object  // graphql query result
};

/*
WARNING: Having media requires you to have at least ONE item with media!
Otherwise query will break!
 */
export const pageQuery = graphql`
  query FaqQuery {
    allStrapiFaq {
      edges {
        node {
          question
          answer
          media {
            childImageSharp {
              fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default FAQ;
