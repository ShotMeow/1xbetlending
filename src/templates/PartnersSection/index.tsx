import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PartnersSection: FC = () => {
  const translate = useTranslations("partners-section");
  return (
    <section className="bg-blue-dark" id="about-us">
      <div className="container mx-auto py-8 my-8 flex flex-col gap-6">
        <h2 className="text-[20px] text-center md:text-left sm:text-[38px] font-bold uppercase">
          {translate("heading-1")}
        </h2>
        <p className="text-[18px] md:text-[26px] mb-10">
          <span>{translate("text-1")}</span>
          <br />
          <br />
          <span>{translate("text-2")}</span>
        </p>
        <h3 className="text-[18px] md:text-[38px] font-bold uppercase">
          {translate("heading-2")}
        </h3>
        <ul className="flex items-center flex-wrap justify-center xl:justify-between gap-6">
          <li>
            <Image
              src="/images/partners/serie-a.png"
              alt="Serie A Logo"
              className="w-16 md:w-full"
              width={84}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/images/partners/barcelona.png"
              alt="Barcelona Logo"
              className="w-16 md:w-full"
              width={147}
              height={149}
            />
          </li>
          <li>
            <Image
              src="/images/partners/psg.png"
              alt="PSG Logo"
              className="w-16 md:w-full"
              width={145}
              height={145}
            />
          </li>
          <li>
            <Image
              src="/images/partners/raja-club.png"
              alt="Raja Club Athletic Logo"
              className="w-16 md:w-full"
              width={134}
              height={175}
            />
          </li>
          <li>
            <Image
              src="/images/partners/as-sale.png"
              alt="A.S. Sale Logo"
              className="w-16 md:w-full"
              width={157}
              height={193}
            />
          </li>
          <li>
            <Image
              src="/images/partners/caf.png"
              alt="CAF Logo"
              className="w-16 md:w-full"
              width={161}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/images/partners/esl.png"
              alt="ESL Logo"
              className="w-16 md:w-full"
              width={179}
              height={167}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
