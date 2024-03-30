import type { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
