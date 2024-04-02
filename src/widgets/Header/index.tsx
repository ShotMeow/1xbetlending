import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Switch from "@/src/features/switch-language/ui/Switch";

const Header: FC = () => {
  const translate = useTranslations("header");

  return (
    <header className="bg-ocean-dark my-8 py-8">
      <div className="container mx-auto flex md:flex-row md:gap-0 gap-10 flex-col items-center justify-between">
        <Image src="/logo.png" alt="1XBET" width={166} height={32} />
        <nav>
          <ul className="flex items-center gap-10 lg:gap-16 sm:flex-row flex-col font-light text-[22px] uppercase">
            <li>
              <a href="#">{translate("nav-item-1")}</a>
            </li>
            <li>
              <a href="#">{translate("nav-item-2")}</a>
            </li>
            <li>
              <a href="#">{translate("nav-item-3")}</a>
            </li>
          </ul>
        </nav>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
