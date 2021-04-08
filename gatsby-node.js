exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        postings: allStrapiPosting {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create dog posting pages.
  const postings = result.data.postings.edges;
  postings.forEach((posting, index) => {
    createPage({
      path: `/posting/${posting.node.strapiId}`,
      component: require.resolve("./src/templates/posting.js"),
      context: {
        id: posting.node.strapiId,
      },
    });
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type StrapiFaq implements Node {
      question: String!
      answer: String!
      media: File
    }
    type StrapiPosting implements Node {
      title: String!
      description: String!
      media: File
    }
    type StrapiHeroImage implements Node {
      heroImageDesktop: File!
      heroImageMobile: File
    }
    type StrapiHomeDetail implements Node {
      title: String!
      details: String!
      media: File!
    }
    type StrapiAlumniCarouselImage implements Node {
      picture: File
      url: String
      name: String
    }
  `;
  createTypes(typeDefs);
};
