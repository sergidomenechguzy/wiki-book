import Link from "next/link";
import TagList from "./TagList";

interface IWikiCardProps {
  wikiPageData: WikiPageFrontMatter;
}

const WikiCard = ({ wikiPageData }: IWikiCardProps) => {
  return (
    <li className="card card-compact w-full bg-neutral hover:bg-neutral-focus cursor-pointer">
      <Link href={`/wiki/${wikiPageData.id}`}>
        <div className="card-body">
          <h2 className="card-title">{wikiPageData.title}</h2>
          <TagList wikiPageData={wikiPageData} size="md" />
        </div>
      </Link>
    </li>
  );
};

export default WikiCard;
