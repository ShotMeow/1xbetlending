import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  darkMode?: boolean;
}
const Button: FC<PropsWithChildren<Props>> = ({
  children,
  darkMode = false,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          "bg-green gap-4 text-[20px] md:text-[26px]": !darkMode,
          "bg-transparent border-2 border-white text-white gap-2 text-[22px]":
            darkMode,
        },
        "flex items-center justify-center text-center rounded-md py-3 font-bold uppercase px-24",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
