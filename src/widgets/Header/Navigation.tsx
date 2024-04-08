import React, { FC, HTMLAttributes } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Navigation: FC<Props> = ({ className, ...props }) => {
  const translate = useTranslations("header");

  return (
    <nav className={className} {...props}>
      <ul className="flex items-center gap-10 lg:gap-16 lg:flex-row flex-col font-light text-[22px] uppercase">
        <li>
          <a href="#about-us">{translate("nav-item-1")}</a>
        </li>
        <li>
          <a href="#looking">{translate("nav-item-2")}</a>
        </li>
        <li>
          <a href="#form">{translate("nav-item-3")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
