function importAll(r) {
  // console.log(r.keys());

  return r.keys().map(filename => ({
    link: `/blog${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
    module: r(filename),
  }));
}

const unsortedAllPosts = importAll(
  require.context('../../pages/blog', true, /\.mdx$/)
);

const comparer = (a, b) =>
  a.module.meta.publishDate < b.module.meta.publishDate ? 1 : -1;

export const allPosts = unsortedAllPosts.sort(comparer);
