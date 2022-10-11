type TimelinePage = {
  id: string;
  title: string;
  entries: (TimelineEntryFrontMatter & Content)[];
};
