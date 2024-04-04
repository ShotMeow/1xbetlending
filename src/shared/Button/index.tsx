import type { FC, HTMLAttributes, PropsWithChildren } from "react";

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
      className={`${
        darkMode
          ? "bg-transparent border-2 border-white text-white"
          : "bg-green"
      } flex items-center gap-4 text-center rounded-md py-3 font-bold uppercase ${
        className ? className : "text-[26px] px-24"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
