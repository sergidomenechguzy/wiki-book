interface IDensityToggleProps {
  value: boolean;
  onChange: (a: boolean) => void;
}

const DensityToggle = ({ value, onChange }: IDensityToggleProps) => {
  return (
    <div className="flex justify-end">
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Compact UI</span>
          <input
            type="checkbox"
            className="toggle"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default DensityToggle;
