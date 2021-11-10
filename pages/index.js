import { PageLayout } from 'components/Layout';
import { PostCard, PostPreview } from 'components/UIElements';
import { allPosts } from 'Utils/postsFetcher';

export default function Home() {
  const featuredPosts = allPosts
    .filter(post => post.module.meta.featureIndex)
    .sort((a, b) => (a.featureIndex > b.featureIndex ? -1 : 1));

  return (
    <PageLayout
      pageTitle="Personal Blog By Agk"
      pageDescription="Documenting my journey through tech. Writing about everything web dev and sometimes programming in general."
      pageUrl="https://blog.agktf.com"
    >
      <main className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col justify-center mx-5 xs:mx-auto">
        <section className="mt-6 sm:mt-10 w-full">
          <h1 className="font-bold font-sansita text-2xl sm:text-3xl text-headline-light dark:text-headline-dark">
            Featured
          </h1>

          <div className="mt-6 sm:mt-10">
            <PostCard
              key={featuredPosts[0].link}
              postTitle={featuredPosts[0].module.meta.postTitle}
              publishDate={featuredPosts[0].module.meta.publishDate}
              imgPreview={featuredPosts[0].module.meta.imgPreview.image}
              altText={featuredPosts[0].module.meta.altText}
              firstFeatured={true}
              tagName={featuredPosts[0].module.meta.tagName}
              link={featuredPosts[0].link}
            />

            <div className="md:flex md:justify-between md:gap-4 lg:gap-8">
              {featuredPosts.slice(1).map(post => (
                <PostCard
                  key={post.link}
                  postTitle={post.module.meta.postTitle}
                  publishDate={post.module.meta.publishDate}
                  imgPreview={post.module.meta.imgPreview.image}
                  altText={post.module.meta.altText}
                  firstFeatured={false}
                  tagName={post.module.meta.tagName}
                  link={post.link}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-12 w-full">
          <h1 className="font-bold font-sansita text-headline-light dark:text-headline-dark text-2xl sm:text-3xl">
            Latest
          </h1>
          {allPosts.map(post => {
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
}
