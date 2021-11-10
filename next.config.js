const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
});
