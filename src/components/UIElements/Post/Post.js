import { PageLayout } from 'components/Layout';
import { TagPill, SharingIcons } from 'components/UIElements';
import { enUSDateRenderer } from 'Utils/helpers/date.helpers';
import { blogBaseUrl } from 'Utils/constants/global.constants';

const Post = ({ children, meta }) => {
  const {
    tagNames,
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
      pageUrl={blogBaseUrl + pageUrl}
    >
      <main className="pb-16 mt-5 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl m-auto">
        <div className="flex items-center justify-start gap-2">
          {tagNames.map(tagName => (
            <TagPill key={tagName} tag={tagName} />
          ))}
        </div>

        <p className="mt-2 text-xs sm:text-sm text-paragraph-light dark:text-paragraph-dark font-rubik">
          {enUSDateRenderer(publishDate)}
        </p>

        <h1 className="mt-5 font-bold font-sansita text-headline-light dark:text-headline-dark text-2xl sm:text-3xl">
          {postTitle}
        </h1>

        <SharingIcons fullPageUrl={blogBaseUrl + pageUrl} />
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
