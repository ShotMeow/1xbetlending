import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio: FC<Props> = ({ label, ...props }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          name="type"
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white text-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity checked:border-white checked:before:bg-white hover:before:opacity-10"
          {...props}
        />
        <span className="absolute text-blue-light transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-3/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="6"></circle>
          </svg>
        </span>
      </div>
      <span className="uppercase text-[18px] -mt-1">{label}</span>
    </label>
  );
};

export default Radio;
