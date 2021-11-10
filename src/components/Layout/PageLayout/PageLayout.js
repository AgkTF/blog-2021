import SEO from 'components/SEO/SEO';
import { Navbar } from 'components/Layout';

const PageLayout = ({ children, pageTitle, pageDescription, pageUrl }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      <header className="sticky top-0 z-10 bg-navBg-light dark:bg-navBg-dark backdrop-blur">
        <Navbar />
      </header>
      {children}
    </div>
  );
};

export default PageLayout;
