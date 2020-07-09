
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
    throw result.errors
  }

  // Create dog posting pages.
  const postings = result.data.postings.edges
  postings.forEach((posting, index) => {
    createPage({
      path: `/posting/${posting.node.strapiId}`,
      component: require.resolve("./src/templates/posting.js"),
      context: {
        id: posting.node.strapiId,
      },
    })
  })
}
