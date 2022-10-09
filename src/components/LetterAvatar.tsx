interface ILetterAvatarProps {
  label: string;
  denseUi: boolean;
}

const LetterAvatar = ({ label, denseUi }: ILetterAvatarProps) => {
  return (
    <div
      className={`avatar placeholder ${denseUi ? "mt-2 mb-1" : "mt-6 mb-4"}`}
    >
      <div
        className={`bg-neutral-focus text-neutral-content rounded-full ${
          denseUi ? "w-10" : "w-14"
        }`}
      >
        <span className={denseUi ? "text-1xl" : "text-2xl"}>{label}</span>
      </div>
    </div>
  );
};

export default LetterAvatar;
