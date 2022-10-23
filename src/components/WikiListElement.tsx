import Image from "next/image";
import Link from "next/link";

interface IWikiListElementProps<T> {
  data: T;
}

const WikiListElement = <
  T extends {
    id: string;
    title: string;
    route: string;
    icon?: string | null;
  }
>({
  data,
}: IWikiListElementProps<T>) => {
  return (
    <li key={data.id}>
      <Link href={`${data.route}/${data.id}`}>
        <a className="hover:bg-neutral-focus">
          {data.icon ? (
            <Image src={data.icon} alt={data.icon} width="20" height="20" />
          ) : null}
          {data.title}
        </a>
      </Link>
    </li>
  );
};

export default WikiListElement;
