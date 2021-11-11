function importAll(r) {
  return r.keys().map(filename => {
    return {
      link: `/blog${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
      module: r(filename),
    };
  });
}

export const allPosts = importAll(
  require.context('../../pages/blog', true, /\.mdx$/)
);
