import type { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer: FC = () => {
  const translate = useTranslations("footer");
  const translateNav = useTranslations("header");
  return (
    <footer className="bg-ocean-dark">
      <div className="container py-10 flex flex-col text-center gap-10 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="space-y-4">
          <Image
            className="mx-auto"
            src="/logo.png"
            alt="1XBET Logo"
            width={166}
            height={33}
          />
          <p className="text-[12px] font-bold uppercase">
            {translate("copyright")
              .split("\n")
              .map((line) => (
                <>
                  <span key={line}>{line.replace("/n", "")}</span>
                  <br />
                </>
              ))}
          </p>
        </div>
        <nav>
          <ul className="flex items-center gap-10 lg:gap-16 lg:flex-row flex-col font-light text-[16px] uppercase">
            <li>
              <a href="#">{translateNav("nav-item-1")}</a>
            </li>
            <li>
              <a href="#">{translateNav("nav-item-2")}</a>
            </li>
            <li>
              <a href="#">{translateNav("nav-item-3")}</a>
            </li>
          </ul>
        </nav>
        <div className="space-y-2 font-bold flex flex-col items-center lg:items-end">
          <p>1XBET.COM</p>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] border-2 border-white">
            18+
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
