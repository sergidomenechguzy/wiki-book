import Image from "next/image";
import Link from "next/link";
import TagList from "./TagList";

interface IWikiCardProps<T> {
  data: T;
}

const WikiCard = <
  T extends {
    id: string;
    title: string;
    route: string;
    tags?: string[];
    icon?: string | null;
  }
>({
  data,
}: IWikiCardProps<T>) => {
  return (
    <li className="card card-compact w-full bg-neutral hover:bg-neutral-focus cursor-pointer">
      <Link href={`${data.route}/${data.id}`}>
        <div className="card-body flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="card-title">{data.title}</h2>
            {data.tags ? <TagList data={data.tags} size="md" /> : null}
          </div>
          {data.icon ? (
            <Image src={data.icon} alt={data.icon} width="60" height="60" />
          ) : null}
        </div>
      </Link>
    </li>
  );
};

export default WikiCard;
