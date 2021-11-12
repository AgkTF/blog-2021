import { ThemeSwitcher } from 'components/UIElements';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 w-full">
      <div className="flex items-center justify-between max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl m-auto">
        <h2 className="font-bold text-xl text-headline-light dark:text-headline-dark">
          <Link href="/">
            <a className="flex items-center gap-2">
              <p className="text-3xl sm:text-4xl tracking-wide font-racing text-headline-light dark:text-headline-dark">
                Agk
                <span className="ml-px text-lg sm:text-xl text-reddish">
                  Blog
                </span>
              </p>
            </a>
          </Link>
        </h2>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
