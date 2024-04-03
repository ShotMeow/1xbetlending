import type { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  serial: number;
  heading?: string;
  message: string;
}

const Message: FC<Props> = ({
  serial,
  message,
  heading,
  className,
  ...props
}) => {
  return (
    <div className={`2xl:absolute ${className}`} {...props}>
      <article
        className={`relative bg-white rounded-lg p-6 font-bold ${
          !heading ? "2xl:h-[149px]" : ""
        } flex items-center`}
      >
        <span className="absolute text-[100px] 2xl:text-[200px] z-50 left-6 -top-10 2xl:-top-20 text-blue-light opacity-20">
          {serial}
        </span>
        <span className="text-[26px] text-ocean-dark">
          {heading && <h4 className="uppercase mb-6">{heading}</h4>}
          <span>{message}</span>
        </span>
        <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-lg" />
      </article>
    </div>
  );
};

export default Message;
