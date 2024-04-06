import type { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  withLabel?: boolean;
  darkMode?: boolean;
}

const Field: FC<Props> = ({
  withLabel = true,
  darkMode = false,
  name,
  ...props
}) => {
  return (
    <label className="flex flex-col">
      {withLabel && <span className="uppercase mb-1">{name}*</span>}
      <input
        className={classNames(
          {
            "border-ocean-light": darkMode,
          },
          "rounded-md py-3 sm:pt-4 sm:pb-3 px-6 placeholder:text-[16px] md:placeholder:text-[22px] placeholder:uppercase bg-transparent border-2 uppercase flex",
        )}
        {...props}
      />
    </label>
  );
};

export default Field;
