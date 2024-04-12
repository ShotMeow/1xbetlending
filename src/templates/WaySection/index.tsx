import { type FC } from "react";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Lines from "./Lines";
import Action from "@/src/templates/WaySection/Action";

const WaySection: FC = () => {
  const translate = useTranslations("way-section");
  const messages = useMessages();

  return (
    <section className="container my-20">
      <div className="flex flex-col items-center uppercase font-bold">
        <h2 className="text-[20px] sm:text-[38px]">{translate("heading")}</h2>
        <h3 className="font-oxygen text-[18px] sm:text-[26px]">
          {translate("subtitle")}
        </h3>
      </div>
      <div className="relative mt-20 space-y-12 2xl:space-y-0">
        <Lines />
        <article className="relative bg-white rounded-lg p-6 font-bold flex 2xl:h-[149px] 2xl:absolute 2xl:w-[586px] 2xl:left-0 2xl:top-0">
          <div className="z-40">
            <p className="text-[20px] md:text-[26px] text-ocean-dark">
              {translate("text-1")}
            </p>
          </div>
          <span className="absolute text-[70px] -top-[50px] 2xl:text-[214px] z-30 left-6 2xl:-top-[88px] text-blue-light 2xl:opacity-20">
            1
          </span>
          <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-xl" />
        </article>
        <article className="relative bg-white rounded-lg p-6 font-bold flex 2xl:h-[149px] 2xl:absolute 2xl:w-[612px] 2xl:right-[15px] 2xl:top-[90px]">
          <div className="z-40">
            <p className="text-[20px] md:text-[26px] text-ocean-dark">
              {translate("text-2")}
            </p>
          </div>
          <span className="absolute text-[70px] -top-[50px] 2xl:text-[214px] z-30 left-6 2xl:-top-[88px] text-blue-light 2xl:opacity-20">
            2
          </span>
          <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-xl" />
        </article>
        <article className="relative bg-white rounded-lg p-6 font-bold flex 2xl:h-[149px] 2xl:absolute 2xl:w-[754px] 2xl:left-0 2xl:top-[300px]">
          <div className="z-40">
            <p className="text-[20px] md:text-[26px] text-ocean-dark">
              {translate("text-3")}
            </p>
          </div>
          <span className="absolute text-[70px] -top-[50px] 2xl:text-[214px] z-30 left-6 2xl:-top-[88px] text-blue-light 2xl:opacity-20">
            3
          </span>
          <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-xl" />
        </article>
        <article className="relative bg-white rounded-lg p-6 font-bold flex 2xl:h-[149px] 2xl:absolute 2xl:w-[393px] 2xl:right-[130px] 2xl:top-[400px]">
          <div className="z-40">
            <p className="text-[20px] md:text-[26px] text-ocean-dark">
              {translate("text-4")}
            </p>
          </div>
          <span className="absolute text-[70px] -top-[50px] 2xl:text-[214px] z-30 left-6 2xl:-top-[88px] text-blue-light 2xl:opacity-20">
            4
          </span>
          <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-xl" />
        </article>
        <article className="relative bg-white rounded-lg p-6 font-bold flex 2xl:h-[200px] 2xl:absolute 2xl:bottom-0">
          <div className="z-40 text-[20px] md:text-[26px] text-ocean-dark">
            <h4 className="uppercase mb-6">{translate("text-5-heading")}</h4>
            <span>{translate("text-5-content")}</span>
          </div>
          <span className="absolute text-[70px] -top-[50px] 2xl:text-[278px] z-30 left-6 2xl:-top-[112px] text-blue-light 2xl:opacity-20">
            5
          </span>
          <div className="absolute w-full h-full -z-10 top-2 left-2 bg-none border-4 border-blue-light rounded-xl" />
        </article>
      </div>
      <NextIntlClientProvider messages={messages}>
        <Action />
      </NextIntlClientProvider>
    </section>
  );
};

export default WaySection;
