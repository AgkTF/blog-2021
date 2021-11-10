function importAll(r) {
  return r.keys().map(filename => ({
    link: filename.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(filename),
  }));
}

const comparer = (a, b) =>
  a.module.meta.publishDate < b.module.meta.publishDate ? 1 : -1;

const unsortedAllPosts = importAll(
  // eslint-disable-next-line no-undef
  require.context('pages/blog/', true, /\.mdx$/)
);

export const allPosts = unsortedAllPosts.sort(comparer);
