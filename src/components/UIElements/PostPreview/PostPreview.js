import { TagPill, Title } from 'components/UIElements';

import { enUSDateRenderer } from 'Utils/helpers/date.helpers';

import Link from 'next/link';
import PropTypes from 'prop-types';

const PostPreview = ({ tagName, date, postTitle, contentPreview, link }) => {
  return (
    <>
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-baseline">
          <TagPill tagName={tagName} />
          <p className="text-xs text-paragraph-light dark:text-paragraph-dark font-rubik sm:text-sm">
            {enUSDateRenderer(date)}
          </p>
        </div>

        <div className="mt-2">
          <Title postTitle={postTitle} link={link} className="" />

          <p className="mt-2 font-rubik text-paragraph-light dark:text-paragraph-dark text-sm sm:text-base">
            {contentPreview}
          </p>
        </div>

        <div className="mt-2 flex items-center font-rubik text-tertiary-light dark:text-tertiary-dark hover:text-highlight self-end">
          <span className="font-medium text-sm sm:text-base">
            <Link href={link}>Read more</Link>
          </span>

          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>

      <hr className="mt-4 opacity-10 text-paragraph-light dark:text-paragraph-dark" />
    </>
  );
};

PostPreview.propTypes = {
  postTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};

export default PostPreview;
