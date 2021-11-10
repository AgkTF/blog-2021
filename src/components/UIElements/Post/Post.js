import { PageLayout } from 'components/Layout';
import { TagPill, ShareIcons } from 'components/UIElements';
import { enUSDateRenderer } from 'Utils/helpers/date.helpers';

const Post = ({ children, meta }) => {
  const {
    tagName,
    publishDate,
    postTitle,
    updateDate,
    pageDescription,
    pageUrl,
  } = meta;

  return (
    <PageLayout
      pageDescription={pageDescription}
      pageTitle={`${postTitle} | Blog Post By Agk`}
      pageUrl={pageUrl}
    >
      {/* <main className="pb-16 mt-5 mx-5 xs:mx-auto sm:mx-auto max-w-xl"> */}
      <main className="pb-16  mt-5 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl m-auto">
        <TagPill tagName={tagName} />

        <p className="mt-2 text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark font-rubik">
          {enUSDateRenderer(publishDate)}
        </p>

        <h1 className="mt-5 font-bold font-sansita text-headline-light dark:text-headline-dark text-2xl sm:text-3xl">
          {postTitle}
        </h1>

        <ShareIcons />
        <hr className="my-5 text-gray-200" />

        <article>
          <div className="prose dark:prose-dark font-rubik">{children}</div>
        </article>

        {updateDate ? (
          <>
            <hr className="my-5 text-gray-200" />
            <p className="pb-2 mt-2 text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark font-rubik">
              <span className="text-code-light dark:text-code-dark">
                Last Updated:{' '}
              </span>
              {enUSDateRenderer(updateDate)}
            </p>
          </>
        ) : null}
      </main>
    </PageLayout>
  );
};

export default Post;