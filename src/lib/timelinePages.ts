import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    entries,
  };
};
