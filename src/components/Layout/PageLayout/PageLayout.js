import SEO from 'components/SEO/SEO';
import { Navbar } from 'components/Layout';

const PageLayout = ({ children, pageTitle, pageDescription, pageUrl }) => {
  return (
    <div>
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />

      <header className="sticky top-0 z-10">
        <Navbar />
      </header>

      {children}
    </div>
  );
};

export default PageLayout;
