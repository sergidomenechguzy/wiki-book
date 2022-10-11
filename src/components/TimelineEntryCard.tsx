import Markdown from "./Markdown";

interface ITimelineEntryCardProps {
  entryData: TimelineEntryFrontMatter & Content;
}

interface ITimelineBranchProps {
  position: "left" | "right";
}

const positions = {
  left: "start",
  center: "center",
  right: "end",
};

const TimelineBranch = ({ position }: ITimelineBranchProps) => {
  return (
    <>
      <div
        className={`absolute top-0 bottom-0 w-full flex justify-${positions[position]} items-center`}
      >
        <div className="rounded w-1/2 h-1 bg-neutral-content" />
      </div>
      <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
        <div className="rounded-full w-5 h-5 border-base-100 border-4 bg-neutral-content" />
      </div>
    </>
  );
};

const TimelineEntryCard = ({ entryData }: ITimelineEntryCardProps) => {
  return (
    <div className="w-full py-4 relative">
      {entryData.position === "left" || entryData.position === "right" ? (
        <TimelineBranch position={entryData.position} />
      ) : null}
      <div className={`w-full flex justify-${positions[entryData.position]}`}>
        <div className="card card-compact bg-neutral w-5/12">
          <div
            className={`card-body ${
              entryData.position === "center" && "text-center"
            }`}
          >
            {entryData.startDate ? (
              <h2 className="text-2xl">{entryData.startDate}</h2>
            ) : null}
            <h2 className="text-xl">{entryData.title}</h2>
            <div className="divider m-0" />
            <div className="prose">
              <Markdown content={entryData.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEntryCard;
