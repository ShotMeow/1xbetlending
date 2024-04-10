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
          "bg-green": !darkMode,
          "bg-transparent border-2 border-white text-white": darkMode,
        },
        "flex items-center justify-center gap-4 text-center rounded-md py-3 font-bold uppercase text-[20px] md:text-[26px] px-24",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
