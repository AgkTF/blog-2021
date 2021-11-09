import { PageLayout } from 'components/Layout';

export default function Home() {
  return (
    <PageLayout
      pageTitle="Personal Blog By Agk"
      pageDescription="Documenting my journey through tech. Writing about everything web dev and sometimes programming in general."
      pageUrl="https://blog.agktf.com"
    >
      <main className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col justify-center mx-5 xs:mx-auto">
        <section className="mt-6 sm:mt-10 w-full">
          <h1 className="font-bold font-sansita text-2xl sm:text-3xl text-headline-light dark:text-headline-dark">
            Featured
          </h1>
        </section>
      </main>
    </PageLayout>
  );
}
