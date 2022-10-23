interface ITimelineEntryHeaderDateProps {
  date?: string | null;
}

const TimelineEntryHeaderDate = ({ date }: ITimelineEntryHeaderDateProps) => {
  if (date) {
    return <h2 className="text-2xl">{date}</h2>;
  }
  return null;
};

export default TimelineEntryHeaderDate;
