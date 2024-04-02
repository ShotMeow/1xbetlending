import type { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}
const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`text-[26px] bg-green rounded-md py-3 px-24 font-bold uppercase ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
