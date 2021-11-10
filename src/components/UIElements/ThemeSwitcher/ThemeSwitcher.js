import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.theme = 'light';
    }
  }, []);

  return (
    <button
      aria-label={
        theme === 'dark' ? 'Activate light mode' : 'Activate Dark mode'
      }
      tabIndex="0"
      onClick={() => {
        setTheme(prevState => {
          if (prevState === 'dark') {
            localStorage.theme = 'light';
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            return 'light';
          } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            return 'dark';
          }
        });
      }}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-headline-light dark:text-headline-dark transition duration-150 ease-in-out transform hover:-rotate-12" />
      ) : (
        <MoonIcon className="w-6 h-6 text-headline-light dark:text-headline-dark transition duration-150 ease-in-out transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
