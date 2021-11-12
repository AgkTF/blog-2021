function importAll(r) {
  return r.keys().map(filename => {
    return {
      link: `${filename.substr(1).replace(/\/index\.mdx$/, '')}`,
      module: r(filename),
    };
  });
}

export const allPosts = importAll(
  require.context('../../pages', true, /\.mdx$/)
);
