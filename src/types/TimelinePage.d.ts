type TimelinePage = {
  id: string;
  title: string;
  route: string;
  entries: (TimelineEntryFrontMatter & Content)[];
};
