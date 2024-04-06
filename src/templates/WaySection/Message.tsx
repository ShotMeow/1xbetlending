import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

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
    <div className={classNames("2xl:absolute", className)} {...props}>
      <article
        className={classNames(
          {
            "2xl:h-[149px]": !heading,
            "flex items-center": heading,
          },
          "relative bg-white rounded-lg p-6 font-bold",
        )}
      >
        <span className="absolute hidden 2xl:block text-[100px] 2xl:text-[200px] z-30 left-6 -top-10 2xl:-top-20 text-blue-light opacity-20">
          {serial}
        </span>
        <span className="text-[20px] md:text-[26px] text-ocean-dark">
          {heading && <h4 className="uppercase mb-6">{heading}</h4>}
          <span>{message}</span>
        </span>
        <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-lg" />
      </article>
    </div>
  );
};

export default Message;
