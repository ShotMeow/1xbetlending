import type { FC } from "react";
import Slider from "./Slider";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

const SliderSection: FC = () => {
  const translate = useTranslations("slider-section");
  const messages = useMessages();

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[34px] sm:text-[38px] font-bold uppercase">
          {translate("heading")}
        </h2>
      </div>
      <NextIntlClientProvider messages={messages}>
        <Slider />
      </NextIntlClientProvider>
    </section>
  );
};

export default SliderSection;
