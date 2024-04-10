import type { FC } from "react";
import Image from "next/image";
import Switch from "@/src/features/switch-language/ui/Switch";

import Action from "./Action";
import Navigation from "./Navigation";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

const Header: FC = () => {
  const messages = useMessages();

  return (
    <header className="sticky w-full z-50 bg-ocean-dark top-0 my-8 py-8">
      <div className="container mx-auto flex lg:gap-0 gap-4 items-center justify-between">
        <a href="#primary">
          <Image
            src="/logo.png"
            alt="1XBET"
            width={166}
            height={32}
            className="w-32 sm:w-[166px]"
          />
        </a>
        <Navigation className="hidden lg:block" />
        <div className="flex items-center gap-4 sm:gap-6">
          <Switch />
          <NextIntlClientProvider messages={messages}>
            <Action />
          </NextIntlClientProvider>
        </div>
      </div>
    </header>
  );
};

export default Header;
