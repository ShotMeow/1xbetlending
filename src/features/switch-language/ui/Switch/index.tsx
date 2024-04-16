"use client";
import { type FC, useState } from "react";
import { useLocale } from "next-intl";
import { getFlag } from "@/src/features/switch-language/utils/getFlag";

import enFlag from "../../assets/flags/en.svg";
import frFlag from "../../assets/flags/fr.svg";
import aeFlag from "../../assets/flags/ae.svg";
import Link from "next/link";
import Image from "next/image";

const Switch: FC = () => {
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const locale = useLocale();

  return (
    <div className="z-50">
      <button
        onClick={() => setDropdownShown(!dropdownShown)}
        className="flex items-center gap-2 active:scale-95 transition-transform"
      >
        {getFlag(locale)}
        <span className="uppercase md:text-[22px] font-semibold">{locale}</span>
        <svg
          className={`flex-shrink-0 transition-all duration-300 ${
            dropdownShown ? "rotate-180" : ""
          }`}
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
            fill="white"
          />
        </svg>
      </button>
      <ul
        className={`${
          dropdownShown ? "flex" : "hidden"
        } absolute bg-ocean-dark p-4 rounded-md shadow-md flex-col gap-4`}
      >
        <li>
          <Link className="flex items-center gap-2" href="/en">
            <Image
              src={enFlag}
              alt="United Kingdom Flag"
              width={21}
              height={21}
            />
            <span className="uppercase text-[22px] font-semibold">en</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/fr">
            <Image src={frFlag} alt="France Flag" width={21} height={21} />
            <span className="uppercase text-[22px] font-semibold">fr</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/ae">
            <Image src={aeFlag} alt="Arabic Flag" width={21} height={21} />
            <span className="uppercase text-[22px] font-semibold">ae</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Switch;
