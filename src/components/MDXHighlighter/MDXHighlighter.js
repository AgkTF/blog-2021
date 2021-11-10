import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MDXHighlighter = ({ lang, value }) => {
  return (
    <SyntaxHighlighter
      style={ghcolors}
      language={lang}
      wrapLongLines={false}
      children={value}
    />
  );
};

export default MDXHighlighter;
