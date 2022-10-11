import fs from "fs";
import path from "path";
import matter from "gray-matter";
import deburr from "lodash.deburr";

const wikiPagesDirectory = path.join(process.cwd(), "content/wiki_pages");

export const getAllWikiPageIds = () => {
  const fileNames = fs.readdirSync(wikiPagesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

const buildFrontMatter = (
  id: string,
  matterResult: matter.GrayMatterFile<string>
): WikiPageFrontMatter => {
  return {
    id: id,
    title: matterResult.data.title,
    tags: matterResult.data.tags || [],
    icon: matterResult.data.icon || null,
  };
};

export const getAllWikiPageData = () => {
  const fileNames = fs.readdirSync(wikiPagesDirectory);

  const pages: WikiPageLists = {
    "#": [],
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };

  fileNames.forEach((fileName) => {
    const fullPath = path.join(wikiPagesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const wikiPageFrontMatter = buildFrontMatter(
      fileName.replace(/\.md$/, ""),
      matterResult
    );
    const firstLetter = deburr(fileName[0]) as keyof typeof pages;
    pages[firstLetter].push(wikiPageFrontMatter);
  });

  return pages;
};

export const getWikiPage = (id: string): WikiPageFrontMatter & Content => {
  const fullPath = path.join(wikiPagesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const wikiPageFrontMatter = buildFrontMatter(id, matterResult);

  return {
    ...wikiPageFrontMatter,
    content: matterResult.content,
  };
};
