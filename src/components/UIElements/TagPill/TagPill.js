import PropTypes from 'prop-types';
import Link from 'next/link';

const TagPill = ({ tagName }) => {
  return (
    <div
      className="px-2 bg-highlight bg-opacity-25 text-highlight font-rubik font-medium text-xs sm:text-sm rounded"
      style={{ width: 'fit-content' }}
    >
      <Link href={`/topics/${tagName.toLowerCase()}`}>{tagName}</Link>
    </div>
  );
};

TagPill.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default TagPill;
