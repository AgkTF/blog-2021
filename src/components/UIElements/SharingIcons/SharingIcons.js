import { useState } from 'react';

import { DuplicateIcon, ClipboardCheckIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const SharingIcons = ({ fullPageUrl }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="my-5 flex items-center gap-5 text-link-light dark:text-link-dark">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `🔥 Check out this blog post on ${fullPageUrl}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M24,4.3c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2C19.3,2.6,18,2,16.6,2 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,7.8,4.1,5.9,1.7,2.9C1.2,3.6,1,4.5,1,5.4c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.4,1.6,9.2,1,8.9c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.2,23.3,5.3,24,4.3" />
        </svg>
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          fullPageUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          className="w-4 h-4"
        >
          <path d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M20.464,14.002h-2.433v9.004h-4.063v-9.004h-1.576v-3.033h1.576 V9.037C13.969,6.504,15.021,5,18.006,5h3.025v3.022h-1.757c-1.162,0-1.238,0.433-1.238,1.243l-0.005,1.703h2.764L20.464,14.002z" />
        </svg>
      </a>

      <button
        onClick={() => {
          setIsCopied(true);
          navigator.clipboard.writeText(fullPageUrl).then(async result => {
            await sleep(1000);
            setIsCopied(false);
            console.log('copied', fullPageUrl);
          });
        }}
      >
        {isCopied ? (
          <ClipboardCheckIcon className="w-5 h-5" />
        ) : (
          <DuplicateIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

SharingIcons.propTypes = {
  fullPageUrl: PropTypes.string.isRequired,
};

export default SharingIcons;
