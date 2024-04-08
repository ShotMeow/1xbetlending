"use client";

import { type FC, useState } from "react";
import Dropdown from "./Dropdown";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import classNames from "classnames";

const Action: FC = () => {
  const [dropdownShown, setDropdownShow] = useState<boolean>(false);
  const messages = useMessages();
  const locale = useLocale();

  return (
    <>
      <button
        className="relative w-6 h-4 lg:hidden"
        onClick={() => setDropdownShow(!dropdownShown)}
      >
        <span
          className={classNames(
            {
              "rotate-45 top-1/2 -translate-y-1/2": dropdownShown,
              "top-0": !dropdownShown,
            },
            "absolute w-full h-0.5 bg-white left-0 rounded-full transition-all",
          )}
        />
        <span
          className={classNames(
            {
              "opacity-0": dropdownShown,
            },
            "absolute w-full h-0.5 bg-white left-0 top-1/2 -translate-y-1/2 rounded-full transition-all",
          )}
        />
        <span
          className={classNames(
            {
              "-rotate-45 top-2": dropdownShown,
              "top-full -translate-y-full": !dropdownShown,
            },
            "absolute w-full h-0.5 bg-white left-0 rounded-full transition-all",
          )}
        />
      </button>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div
          className={classNames(
            {
              "max-h-0": !dropdownShown,
              "max-h-96 mt-2 py-6": dropdownShown,
            },
            "fixed transition-all overflow-hidden left-0 top-28  bg-ocean-dark w-full",
          )}
        >
          <Dropdown />
        </div>
      </NextIntlClientProvider>
    </>
  );
};

export default Action;
