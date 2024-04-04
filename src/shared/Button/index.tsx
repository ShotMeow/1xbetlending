import type { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}
const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={` bg-green rounded-md py-3 font-bold uppercase ${
        className ? className : "text-[26px] px-24"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
