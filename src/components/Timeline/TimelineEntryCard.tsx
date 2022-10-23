import Markdown from "../Markdown";
import TimelineBranch from "./TimelineBranch";
import TimelineEntryCenterHeader from "./TimelineEntryCenterHeader";
import TimelineEntrySideHeader from "./TimelineEntrySideHeader";

interface ITimelineEntryCardProps {
  entryData: TimelineEntryFrontMatter & Content;
}

const positions = {
  left: "start",
  center: "center",
  right: "end",
};

const TimelineEntryCard = ({ entryData }: ITimelineEntryCardProps) => {
  return (
    <div className="w-full py-4 relative">
      <TimelineBranch position={entryData.position} />
      <div className={`w-full flex justify-${positions[entryData.position]}`}>
        <div className="card card-compact bg-neutral w-full sm:w-5/12 ml-7 sm:ml-0">
          <div
            className={`card-body ${
              entryData.position === "center" && "sm:text-center"
            }`}
          >
            {entryData.position === "center" ? (
              <TimelineEntryCenterHeader entryData={entryData} />
            ) : (
              <TimelineEntrySideHeader entryData={entryData} />
            )}
            {entryData.content ? <div className="divider m-0" /> : null}
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
