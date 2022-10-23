interface ITimelineBranchProps {
  position: "left" | "right" | "center";
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
        className={`absolute top-0 bottom-0 w-full flex justify-${
          positions[position]
        } items-center ${position === "center" && "sm:hidden"}`}
      >
        <div className="rounded w-full sm:w-1/2 h-1 bg-neutral-content" />
      </div>
      <div
        className={`absolute top-0 bottom-0 w-full flex justify-start sm:justify-center items-center ${
          position === "center" && "sm:hidden"
        }`}
      >
        <div className="rounded-full w-5 h-5 border-base-100 border-4 bg-neutral-content" />
      </div>
    </>
  );
};

export default TimelineBranch;
