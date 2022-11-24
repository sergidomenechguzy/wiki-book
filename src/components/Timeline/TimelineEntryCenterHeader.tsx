import Image from "next/image";
import TimelineEntryHeaderDate from "./TimelineEntryHeaderDate";
import TimelineEntryHeaderTitle from "./TimelineEntryHeaderTitle";

interface ITimelineEntryCenterHeaderProps {
  entryData: TimelineEntryFrontMatter & Content;
}

const TimelineEntryCenterHeader = ({
  entryData,
}: ITimelineEntryCenterHeaderProps) => {
  return (
    <>
      <TimelineEntryHeaderDate date={entryData.date} />
      {entryData.icon ? (
        <div className="flex flex-row justify-center items-center w-full py-2">
          <div className="flex-grow h-0.5 bg-neutral-content" />
          <Image
            src={entryData.icon}
            alt={entryData.icon}
            width="64"
            height="64"
          />
          <div className="flex-grow h-0.5 bg-neutral-content" />
        </div>
      ) : null}
      <TimelineEntryHeaderTitle title={entryData.title} />
    </>
  );
};

export default TimelineEntryCenterHeader;
