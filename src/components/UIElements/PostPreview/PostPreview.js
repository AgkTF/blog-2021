import { TagPill, Title } from 'components/UIElements';

import { enUSDateRenderer } from 'Utils/helpers/date.helpers';

import { ArrowRightIcon } from '@heroicons/react/solid';
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

        <Link href={link}>
          <a className="mt-2 flex items-center font-rubik text-tertiary-light dark:text-tertiary-dark hover:text-highlight dark:hover:text-highlight self-end">
            <span className="font-medium text-sm sm:text-base">Read more</span>
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </a>
        </Link>
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
