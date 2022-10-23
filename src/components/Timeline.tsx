import TimelineEntryCard from "./TimelineEntryCard";

interface ITimelineProps {
  entries: (TimelineEntryFrontMatter & Content)[];
}

const Timeline = ({ entries }: ITimelineProps) => {
  return (
    <div className="w-full max-w-5xl flex flex-col relative py-10 mx-auto">
      <div className="absolute top-0 bottom-0 w-full -z-10 flex justify-start sm:justify-center pl-2 sm:pl-0">
        <div className="w-1 bg-neutral-content rounded" />
      </div>
      {entries.map((entry) => (
        <TimelineEntryCard key={entry.id} entryData={entry} />
      ))}
    </div>
  );
};

export default Timeline;
