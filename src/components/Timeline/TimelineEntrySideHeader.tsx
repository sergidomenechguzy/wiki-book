import Image from "next/image";
import TimelineEntryHeaderDate from "./TimelineEntryHeaderDate";
import TimelineEntryHeaderTitle from "./TimelineEntryHeaderTitle";

interface ITimelineEntrySideHeaderProps {
  entryData: TimelineEntryFrontMatter & Content;
}

const TimelineEntrySideHeader = ({
  entryData,
}: ITimelineEntrySideHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="flex-grow">
        <TimelineEntryHeaderDate date={entryData.date} />
        <TimelineEntryHeaderTitle title={entryData.title} />
      </div>
      {entryData.icon ? (
        <Image
          src={entryData.icon}
          alt={entryData.icon}
          width="40"
          height="40"
        />
      ) : null}
    </div>
  );
};

export default TimelineEntrySideHeader;
