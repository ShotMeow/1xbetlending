import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import internetIcon from "./images/internet.png";
import devicesIcon from "./images/devices.png";
import locationIcon from "./images/location.png";
import connectionIcon from "./images/connection.png";
import moneyIcon from "./images/money.png";
import handshakeIcon from "./images/handshake.png";

const LookingSection: FC = () => {
  const translate = useTranslations("looking-section");
  return (
    <section className="container my-10" id="looking">
      <h2 className="text-[20px] text-center md:text-left sm:text-[38px] font-bold uppercase mb-6">
        {translate("heading")}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 text-center items-center">
        <li className="flex flex-col items-center gap-4">
          <Image src={internetIcon} alt="Internet Icon" />
          <p className="uppercase text-[18px] md:text-[24px] font-semibold">
            {translate("text-1")}
          </p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <Image src={devicesIcon} alt="Devices Icon" />
          <p className="font-semibold uppercase text-[18px] md:text-[24px]">
            {translate("text-2")}
          </p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <Image src={locationIcon} alt="Location Icon" />
          <p className="font-semibold uppercase text-[18px] md:text-[24px]">
            {translate("text-3")}
          </p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <Image src={connectionIcon} alt="Connection Icon" />
          <p className="font-semibold uppercase text-[18px] md:text-[24px]">
            {translate("text-4")}
          </p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <Image src={moneyIcon} alt="Money Icon" />
          <p className="font-semibold uppercase text-[18px] md:text-[24px]">
            {translate("text-5")}
          </p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <Image src={handshakeIcon} alt="Handshake Icon" />
          <p className="font-semibold uppercase text-[18px] md:text-[24px]">
            {translate("text-6")}
          </p>
        </li>
      </ul>
      <p className="text-[20px] md:text-[26px] font-medium text-center mt-20">
        {translate("text-7")}
      </p>
    </section>
  );
};

export default LookingSection;
