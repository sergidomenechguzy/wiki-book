import fs from "fs";
import path from "path";
import matter from "gray-matter";
import deburr from "lodash.deburr";

const timelinePagesDirectory = path.join(
  process.cwd(),
  "content/timeline_pages"
);
const timelineEntriesDirectory = path.join(
  process.cwd(),
  "content/timeline_entries"
);

export const getAllTimelinePageIds = () => {
  const fileNames = fs.readdirSync(timelinePagesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
};

const buildFrontMatter = (
  id: string,
  matterResult: matter.GrayMatterFile<string>
): TimelineEntryFrontMatter => {
  return {
    id: id,
    title: matterResult.data.title,
    startDate: matterResult.data.startDate || null,
    icon: matterResult.data.icon || null,
    position: matterResult.data.position || "center",
  };
};

export const getAllTimelinePageData = () => {
  const fileNames = fs.readdirSync(timelinePagesDirectory);

  const timelines: LetterLists<TimelinePage> = {
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
    const fullPath = path.join(timelinePagesDirectory, fileName);
    const pageData = JSON.parse(fs.readFileSync(fullPath, "utf8"));

    const firstLetter = deburr(fileName[0]) as keyof typeof timelines;
    timelines[firstLetter].push({
      id: fileName.replace(/\.json$/, ""),
      ...pageData,
      route: "/timelines",
    });
  });

  return timelines;
};

export const getTimelinePage = (id: string): TimelinePage => {
  const fullPath = path.join(timelinePagesDirectory, `${id}.json`);
  const pageData = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  const entries = pageData.entries.map((entry: string) => {
    const entryPath = path.join(timelineEntriesDirectory, `${entry}.md`);
    const fileContents = fs.readFileSync(entryPath, "utf8");
    const matterResult = matter(fileContents);
    const timelineEntryFrontMatter = buildFrontMatter(entry, matterResult);

    return {
      ...timelineEntryFrontMatter,
      content: matterResult.content,
    };
  });

  return {
    id,
    title: pageData.title,
    route: "/timelines",
    entries,
  };
};
