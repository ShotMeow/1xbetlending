import type { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  withLabel?: boolean;
}

const Field: FC<Props> = ({ withLabel = true, name, ...props }) => {
  return (
    <label className="flex flex-col">
      {withLabel && <span className="uppercase mb-1">{name}*</span>}
      <input
        className="bg-transparent border-2 border-white rounded-md py-4 px-6 placeholder:text-[22px] placeholder:uppercase"
        {...props}
      />
    </label>
  );
};

export default Field;
