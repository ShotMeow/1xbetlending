import type { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/src/shared/Button";

const PrimarySection: FC = () => {
  const translate = useTranslations("primary-section");

  return (
    <section className="container mx-auto">
      <h1 className="font-bold text-[38px] uppercase w-3/4">
        {translate("heading-1")}
      </h1>
      <div className="flex lg:flex-row flex-col items-center">
        <Image
          src="/images/share-market.png"
          alt="Share Market Image"
          width={647}
          height={485}
        />
        <div className="flex flex-col items-start gap-6">
          <p className="font-bold text-[26px]">{translate("text-1")}</p>
          <p className="font-oxygen text-[26px]">{translate("text-2")}</p>
          <Button className="mt-6">{translate("button")}</Button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 mt-10">
        <p className="text-[20px] uppercase">{translate("learn-more")}</p>
        <svg
          width="16"
          height="51"
          viewBox="0 0 16 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29289 50.7071C7.68342 51.0976 8.31658 51.0976 8.7071 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34314 42.9289C1.95262 42.5384 1.31945 42.5384 0.92893 42.9289C0.538406 43.3195 0.538406 43.9526 0.92893 44.3431L7.29289 50.7071ZM7 -4.37114e-08L7 50L9 50L9 4.37114e-08L7 -4.37114e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PrimarySection;
