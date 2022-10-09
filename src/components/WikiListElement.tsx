import Link from "next/link";

interface IWikiListElementProps {
  wikiPageData: WikiPageFrontMatter;
}

const WikiListElement = ({ wikiPageData }: IWikiListElementProps) => {
  return (
    <li key={wikiPageData.id}>
      <Link href={`/wiki/${wikiPageData.id}`}>
        <a className="hover:bg-neutral-focus">{wikiPageData.title}</a>
      </Link>
    </li>
  );
};

export default WikiListElement;
