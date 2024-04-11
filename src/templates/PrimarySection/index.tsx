import { FC } from "react";
import Image from "next/image";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Action from "./Action";

const PrimarySection: FC = () => {
  const translate = useTranslations("primary-section");
  const messages = useMessages();
  return (
    <section className="container mx-auto" id="primary">
      <h1 className="font-bold text-[24px] text-center md:text-left md:text-[38px] uppercase md:w-3/4">
        {translate("heading-1")}
      </h1>
      <div className="flex lg:flex-row flex-col items-center">
        <Image
          id="primary-image"
          src="/images/share-market.png"
          alt="Share Market Image"
          width={647}
          height={485}
        />
        <div className="flex flex-col items-start gap-6">
          <p className="font-bold text-[20px] md:text-[26px]">
            {translate("text-1")}
          </p>
          <p className="font-oxygen text-[20px] md:text-[26px] mb-6">
            {translate("text-2")}
          </p>
          <NextIntlClientProvider messages={messages}>
            <Action />
          </NextIntlClientProvider>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 mt-10">
        <p className="text-[16px] md:text-[20px] uppercase">
          {translate("learn-more")}
        </p>
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
