import LetterAvatar from "./LetterAvatar";
import WikiCard from "./WikiCard";
import WikiListElement from "./WikiListElement";

interface IListProps {
  wikiPageList: WikiPageFrontMatter[];
  denseUi: boolean;
}

const List = ({ wikiPageList, denseUi }: IListProps) => {
  if (denseUi) {
    return (
      <ul className="menu menu-compact bg-neutral w-full p-2 rounded-box">
        {wikiPageList.map((pageData) => (
          <WikiListElement
            key={`${pageData.id}-list-element`}
            wikiPageData={pageData}
          />
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {wikiPageList.map((pageData) => (
        <WikiCard key={`${pageData.id}-card`} wikiPageData={pageData} />
      ))}
    </ul>
  );
};

interface IPageListProps {
  wikiPageLists: WikiPageLists;
  denseUi: boolean;
}

const PageList = ({ wikiPageLists, denseUi }: IPageListProps) => {
  return (
    <>
      {Object.entries(wikiPageLists).map(([key, wikiPages]) =>
        wikiPages.length === 0 ? null : (
          <div key={`${key}-page-list`}>
            <LetterAvatar label={key.toLocaleUpperCase()} denseUi={denseUi} />
            <List wikiPageList={wikiPages} denseUi={denseUi} />
          </div>
        )
      )}
    </>
  );
};

export default PageList;
