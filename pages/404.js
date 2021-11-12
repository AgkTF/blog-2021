import { PageLayout } from 'components/Layout';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <PageLayout
      pageDescription="Documenting my journey through tech. Writing about everything web dev and sometimes programming in general."
      pageTitle="404: not found!"
    >
      <main className="height-no-nav bg-background-light dark:bg-background-dark flex flex-col items-center justify-center font-sansita">
        <p className="text-headline-light dark:text-headline-dark font-bold text-[144px]">
          404
        </p>
        <p className="mt-3 text-headline-light dark:text-headline-dark font-semibold text-2xl">
          The page you're looking for cannot be found!
        </p>

        <Link href="/">
          <a className="mt-20 text-xl text-link-light dark:text-link-dark">
            Go back home
          </a>
        </Link>
      </main>
    </PageLayout>
  );
};

export default Custom404;
