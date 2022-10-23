import LetterAvatar from "./LetterAvatar";
import WikiCard from "./WikiCard";
import WikiListElement from "./WikiListElement";

interface IListProps<T> {
  pageList: T[];
  denseUi: boolean;
}

const List = <T extends { id: string; title: string; route: string }>({
  pageList,
  denseUi,
}: IListProps<T>) => {
  if (denseUi) {
    return (
      <ul className="menu menu-compact bg-neutral w-full p-2 rounded-box">
        {pageList.map((pageData) => (
          <WikiListElement
            key={`${pageData.id}-list-element`}
            data={pageData}
          />
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {pageList.map((pageData) => (
        <WikiCard key={`${pageData.id}-card`} data={pageData} />
      ))}
    </ul>
  );
};

interface IPageListProps<T> {
  pageLists: LetterLists<T>;
  denseUi: boolean;
}

const PageList = <T extends { id: string; title: string; route: string }>({
  pageLists,
  denseUi,
}: IPageListProps<T>) => {
  return (
    <>
      {Object.entries(pageLists).map(([key, pages]) =>
        pages.length === 0 ? null : (
          <div key={`${key}-page-list`}>
            <LetterAvatar label={key.toLocaleUpperCase()} denseUi={denseUi} />
            <List pageList={pages} denseUi={denseUi} />
          </div>
        )
      )}
    </>
  );
};

export default PageList;
