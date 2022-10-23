type SizeEnum = "xs" | "sm" | "md" | "lg";

interface ITagListProps {
  data: string[];
  size?: SizeEnum;
}

const TagList = ({ data, size = "lg" }: ITagListProps) => {
  return (
    <div>
      {data.map((tag) => (
        <div key={tag} className={`badge badge-outline badge-${size} m-1 pb-1`}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;
