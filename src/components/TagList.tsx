type SizeEnum = "xs" | "sm" | "md" | "lg";

interface ITagListProps {
  wikiPageData: WikiPageFrontMatter;
  size?: SizeEnum;
}

const TagList = ({ wikiPageData, size = "lg" }: ITagListProps) => {
  return (
    <div>
      {wikiPageData.tags.map((tag) => (
        <div key={tag} className={`badge badge-outline badge-${size} m-1 pb-1`}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;
