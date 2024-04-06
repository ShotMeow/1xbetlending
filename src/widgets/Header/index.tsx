import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Switch from "@/src/features/switch-language/ui/Switch";
import Link from "next/link";

const Header: FC = () => {
  const translate = useTranslations("header");

  return (
    <header className="lg:fixed lg:w-full z-50 bg-ocean-dark my-8 py-8">
      <div className="container mx-auto flex lg:flex-row lg:gap-0 gap-10 flex-col items-center justify-between">
        <a href="#primary">
          <Image src="/logo.png" alt="1XBET" width={166} height={32} />
        </a>
        <nav>
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
        <Switch />
      </div>
    </header>
  );
};

export default Header;
