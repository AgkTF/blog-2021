import { PageLayout } from 'components/Layout';
import { PostPreview } from 'components/UIElements';
import { blogBaseUrl } from 'Utils/constants/global.constants';
import { allPosts } from 'Utils/postsFetcher';

const TopicPageLayout = ({ topicName }) => {
  const topicPosts = allPosts.filter(
    post => post.module.meta.tagName === topicName
  );

  return (
    <PageLayout
      pageTitle={`${topicName} Articles`}
      pageDescription={`The homepage for the articles related to ${topicName}.`}
      pageUrl={`${blogBaseUrl}/topics/${topicName}`}
    >
      <main className="pb-16 mt-5 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl m-auto">
        <section className="mt-6 sm:mt-10 w-full">
          <h1 className="font-bold font-sansita text-headline-light dark:text-headline-dark text-2xl sm:text-3xl">
            {topicName}
          </h1>

          {topicPosts.map(post => {
            const { postTitle, publishDate, tagName, postPreview } =
              post.module.meta;
            return (
              <PostPreview
                key={post.link}
                contentPreview={postPreview}
                tagName={tagName}
                date={publishDate}
                postTitle={postTitle}
                link={post.link}
              />
            );
          })}
        </section>
      </main>
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const setOfTopics = new Set(allPosts.map(post => post.module.meta.tagName));
  const arrayOfTopics = [...setOfTopics];

  const paths = arrayOfTopics.map(topic => ({
    params: {
      topicName: topic,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      topicName: params.topicName,
    },
  };
}

export default TopicPageLayout;
