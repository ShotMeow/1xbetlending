import type { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import webSearchIcon from "./images/web-search-icon.png";
import telegramIcon from "./images/telegram-icon.png";
import welcomeImage from "./images/welcome-image.png";

import Field from "@/src/shared/Field";
import Radio from "@/src/shared/Radio";
import Button from "@/src/shared/Button";

const FormSection: FC = () => {
  const translate = useTranslations("form-section");
  return (
    <section className="container grid lg:grid-cols-[1fr,2fr] my-20" id="form">
      <div className="flex flex-col items-center">
        <h2 className="text-[20px] text-center sm:text-[38px] font-bold uppercase">
          {translate("heading")}
        </h2>
        <form className="flex flex-col w-full gap-4">
          <Field
            required
            name={translate("input-1")}
            placeholder={translate("input-1")}
          />
          <Field
            required
            name={translate("input-2")}
            type="email"
            placeholder="example@mail.com"
          />
          <Field required name={translate("input-3")} />
          <Field required name={translate("input-4")} type="tel" />
          <div className="mt-10">
            <div className="flex items-center gap-6 mb-2">
              <Radio label="telegram" name="social" />
              <Radio label="whatsapp" name="social" />
            </div>
            <Field withLabel={false} name="social" placeholder="@username" />
          </div>
          <Button className="text-[22px] mx-auto mt-6 px-6">
            {translate("button")}
          </Button>
        </form>
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
