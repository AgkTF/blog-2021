function importAll(r) {
  const setOfTopics = new Set(
    r.keys().map(filename => r(filename).meta.tagName)
  );
  const arrayOfTopics = [...setOfTopics];
  let combinedPostsByTopic = {};
  arrayOfTopics.forEach(topic => {
    combinedPostsByTopic[topic] = r
      .keys()
      .filter(filename => r(filename).meta.tagName === topic)
      .map(filename => {
        return {
          link: `/blog${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
          module: r(filename),
        };
      });
  });

  const featuredPosts = r
    .keys()
    .filter(filename => r(filename).meta.featureIndex)
    .map(filename => {
      return {
        link: `/blog${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
        module: r(filename),
      };
    });

  const remainingPosts = r
    .keys()
    .filter(filename => !r(filename).meta.featureIndex)
    .map(filename => {
      return {
        link: `/blog${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
        module: r(filename),
      };
    });

  return {
    combinedPostsByTopic,
    featuredPosts,
    remainingPosts,
  };
}

const everything = importAll(
  require.context('../../pages/blog', true, /\.mdx$/)
);

const dateComparer = (a, b) =>
  a.module.meta.publishDate < b.module.meta.publishDate ? 1 : -1;
const featureIndexComparer = (a, b) =>
  a.featureIndex > b.featureIndex ? -1 : 1;

export const remainingPosts = everything.remainingPosts.sort(dateComparer);
export const featuredPosts =
  everything.featuredPosts.sort(featureIndexComparer);
export const combinedPostsByTopic = everything.combinedPostsByTopic;
