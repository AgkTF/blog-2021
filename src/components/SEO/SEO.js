import Head from 'next/head';

const SEO = ({ pageTitle, pageDescription, pageUrl }) => {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@agkTF" />
      <meta name="twitter:creator" content="@agkTF" />
      <meta name="twitter:title" content={`${pageTitle}`} />
      <meta name="twitter:description" content={`${pageDescription}`} />
      {/* add meta tag for twitter image */}
      <meta property="og:url" content={`${pageUrl}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${pageTitle}`} />
      <meta property="og:description" content={`${pageDescription}`} />
      {/* add meta tag for og image */}
      <title>{`${pageTitle}`}</title>
      <meta name="description" content={`${pageDescription}`} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
};

export default SEO;
