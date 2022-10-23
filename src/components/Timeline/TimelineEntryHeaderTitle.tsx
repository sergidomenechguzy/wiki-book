interface ITimelineEntryHeaderTitleProps {
  title?: string | null;
}

const TimelineEntryHeaderTitle = ({
  title,
}: ITimelineEntryHeaderTitleProps) => {
  if (title) {
    return <h2 className="text-xl">{title}</h2>;
  }
  return null;
};

export default TimelineEntryHeaderTitle;
