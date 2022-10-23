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
          <div className="rounded-full border-2 border-neutral-content w-16 h-16 flex justify-center items-center">
            <Image
              src={entryData.icon}
              alt={entryData.icon}
              width="50"
              height="50"
            />
          </div>
          <div className="flex-grow h-0.5 bg-neutral-content" />
        </div>
      ) : null}
      <TimelineEntryHeaderTitle title={entryData.title} />
    </>
  );
};

export default TimelineEntryCenterHeader;
