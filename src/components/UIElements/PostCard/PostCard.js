import { TagPill, Title } from 'components/UIElements';

import { enUSDateRenderer } from 'Utils/helpers/date.helpers';

import Image from 'next/image';
import PropTypes from 'prop-types';

const STYLES = {
  container: {
    forFirst: `mt-6 sm:mt-8 bg-cardBg-light dark:bg-cardBg-dark rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row min-w-[280px]`,
    forOthers: `mt-6 lg:mt-8 bg-cardBg-light dark:bg-cardBg-dark rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row md:flex-col min-w-[280px]`,
  },
  imgDiv: {
    forFirst: 'relative pb-7/12 sm:pb-0 sm:h-64 sm:w-full lg:h-80 ',
    forOthers: 'relative pb-7/12 sm:pb-0 sm:h-64 sm:w-full',
  },
  title: {
    forFirst: 'mt-2 sm:w-48 sm:max-w-sm lg:w-64',
    forOthers: 'mt-2 sm:w-48 sm:max-w-sm md:w-72 lg:w-96',
  },
};

const PostCard = ({
  postTitle,
  publishDate,
  imgPreview,
  altText,
  firstFeatured,
  tagName,
  link,
}) => {
  return (
    <div
      className={
        firstFeatured ? STYLES.container.forFirst : STYLES.container.forOthers
      }
    >
      <div
        className={
          firstFeatured ? STYLES.imgDiv.forFirst : STYLES.imgDiv.forOthers
        }
      >
        <Image
          src={imgPreview}
          alt={altText}
          layout="fill"
          className="absolute object-cover sm:relative transition duration-300 ease-in-out hover:scale-105 hover:grayscale-[60%]"
          priority
        />
      </div>

      <div className="py-3 px-5 flex flex-col justify-between items-start">
        <div>
          <TagPill tagName={tagName} />
          <Title
            postTitle={postTitle}
            link={link}
            className={
              firstFeatured ? STYLES.title.forFirst : STYLES.title.forOthers
            }
          />
        </div>
        <p className="mt-6 text-xs text-paragraph-light dark:text-paragraph-dark font-rubik sm:text-sm">
          {enUSDateRenderer(publishDate)}
        </p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  tagName: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  imgPreview: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstFeatured: PropTypes.bool.isRequired,
};

export default PostCard;
