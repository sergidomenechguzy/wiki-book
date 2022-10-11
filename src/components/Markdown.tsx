import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface IMarkdownProps {
  content: string;
}

const Markdown = ({ content }: IMarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ children, href }) => <Link href={href || ""}>{children[0]}</Link>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
