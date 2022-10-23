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
        <div className="rounded-full border-2 border-neutral-content w-10 h-10 flex justify-center items-center">
          <Image
            src={entryData.icon}
            alt={entryData.icon}
            width="36"
            height="36"
          />
        </div>
      ) : null}
    </div>
  );
};

export default TimelineEntrySideHeader;
