import { TagPill, Title } from 'components/UIElements';

import { enUSDateRenderer } from 'Utils/helpers/date.helpers';

import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostPreview = ({ tagNames, date, postTitle, contentPreview, link }) => {
  return (
    <>
      <div className="mt-6 flex flex-col">
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <Title postTitle={postTitle} link={link} />
            <p className="text-xs text-paragraph-light dark:text-paragraph-dark font-rubik sm:text-sm">
              {enUSDateRenderer(date)}
            </p>
          </div>

          <p className="mt-2 font-rubik text-paragraph-light dark:text-paragraph-dark text-sm sm:text-base">
            {contentPreview}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center justify-start gap-2">
            {tagNames.map(tagName => (
              <TagPill key={tagName} tag={tagName} />
            ))}
          </div>

          <Link href={link}>
            <a className="mt-2 flex items-center font-rubik text-tertiary-light dark:text-tertiary-dark hover:text-highlight dark:hover:text-highlight self-end">
              <span className="font-medium text-sm sm:text-base">
                Read more
              </span>
              <ArrowRightIcon className="ml-1 w-4 h-4" />
            </a>
          </Link>
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
  tagNames: PropTypes.array.isRequired,
};

export default PostPreview;
