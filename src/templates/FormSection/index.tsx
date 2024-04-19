import type { FC } from "react";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Link from "next/link";
import Image from "next/image";

import webSearchIcon from "./images/web-search-icon.png";
import telegramIcon from "./images/telegram-icon.png";
import welcomeImage from "./images/welcome-image.png";
import Form from "./Form";

const FormSection: FC = () => {
  const messages = useMessages();
  const translate = useTranslations("form-section");
  return (
    <section className="container grid lg:grid-cols-[1fr,2fr] my-20" id="form">
      <div className="flex flex-col items-center">
        <NextIntlClientProvider messages={messages}>
          <Form />
        </NextIntlClientProvider>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center lg:items-start lg:ml-40 lg:self-end mt-20 lg:mt-0 gap-10">
          <h2 className="text-[16px] text-center md:text-left sm:text-[32px] font-bold uppercase">
            {translate("subtitle")}
          </h2>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="https://1xbet.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src={webSearchIcon}
                  alt="Web Search Icon"
                  width={50}
                  height={50}
                />
                <span className="bg-blue-light text-white font-bold text-[22px] rounded-lg p-2">
                  1XBET.COM
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/payteam1x"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src={telegramIcon}
                  alt="Telegram Icon"
                  width={50}
                  height={50}
                />
                <span className="bg-blue-light text-white font-bold text-[22px] rounded-lg p-2">
                  @PAYTEAM1X
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src={welcomeImage}
          alt="Welcome Image"
          width={660}
          height={480}
          className="w-full lg:ml-20"
        />
      </div>
    </section>
  );
};

export default FormSection;
