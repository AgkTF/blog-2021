import Link from 'next/link';

const Title = ({ postTitle, link, ...props }) => {
  return (
    <h2
      className={`font-bold font-sansita text-headline-light dark:text-headline-dark text-lg sm:text-xl lg:text-2xl hover:text-link-light
      dark:hover:text-link-dark
       ${props.className}`}
    >
      <Link href={link}>{postTitle}</Link>
    </h2>
  );
};

export default Title;
