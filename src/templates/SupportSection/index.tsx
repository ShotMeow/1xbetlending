import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SupportSection: FC = () => {
  const translate = useTranslations("support-section");

  return (
    <section className="bg-blue-light/30">
      <div className="container py-4">
        <h2 className="text-[34px] sm:text-[38px] font-bold uppercase">
          {translate("heading")}
        </h2>
        <h3 className="text-[26px] font-semibold uppercase mt-10">
          {translate("subtitle")}
        </h3>
        <div className="mt-10 grid lg:grid-cols-[1fr,2fr] items-center gap-10">
          <Image
            src="/images/support-image.png"
            alt="Support Image"
            className="mx-auto"
            width={408}
            height={408}
          />
          <p className="text-[26px]">
            <span>{translate("text-1")}</span>
            <br />
            <br />
            <span>{translate("text-2")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
