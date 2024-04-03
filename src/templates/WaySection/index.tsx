import type { FC } from "react";
import { useTranslations } from "next-intl";
import Message from "./Message";
import Lines from "./Lines";
import Button from "@/src/shared/Button";

const WaySection: FC = () => {
  const translate = useTranslations("way-section");
  return (
    <section className="container my-20">
      <div className="flex flex-col items-end uppercase font-bold">
        <h2 className="text-[34px] sm:text-[38px]">{translate("heading")}</h2>
        <h3 className="font-oxygen text-[26px]">{translate("subtitle")}</h3>
      </div>
      <div className="relative mt-20 space-y-6 2xl:space-y-0">
        <Lines />
        <Message
          className="2xl:w-[586px] 2xl:left-0 2xl:top-0"
          serial={1}
          message={translate("text-1")}
        />
        <Message
          className="2xl:w-[612px] 2xl:right-[15px] 2xl:top-[90px]"
          serial={2}
          message={translate("text-2")}
        />
        <Message
          className="2xl:w-[754px] 2xl:left-0 2xl:top-[300px]"
          serial={3}
          message={translate("text-3")}
        />
        <Message
          className="2xl:w-[393px] 2xl:right-[130px] 2xl:top-[400px]"
          serial={4}
          message={translate("text-4")}
        />
        <Message
          className="2xl:bottom-0"
          serial={5}
          heading={translate("text-5-heading")}
          message={translate("text-5-content")}
        />
      </div>
      <div className="flex flex-col items-center">
        <Button className="mt-20">{translate("button")}</Button>
      </div>
    </section>
  );
};

export default WaySection;
