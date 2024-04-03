"use client";
import { type FC, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const translate = useTranslations("slider-section");

  const getMargin = (activeSlide: number, screenType: "mobile" | "desktop") => {
    if (screenType === "mobile") {
      switch (activeSlide) {
        case 0:
          return "720px";
        case 1:
          return "250px";
        case 2:
          return "-230px";
        case 3:
          return "-720px";
      }
    } else if (screenType === "desktop") {
      switch (activeSlide) {
        case 0:
          return "1250px";
        case 1:
          return "440px";
        case 2:
          return "-460px";
        case 3:
          return "-1300px";
      }
    }
  };

  const getScreenSize = () => {
    if (typeof window !== "undefined") {
      const width =
        window?.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const height =
        window?.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      return { width, height };
    }

    return { width: 0, height: 0 };
  };

  return (
    <div className="relative flex flex-col items-center gap-6 overflow-x-hidden">
      <div
        className={`flex items-center gap-40 my-20 transition-all`}
        style={{
          transform: `translateX(${
            getScreenSize().width <= 768
              ? getMargin(activeSlide, "mobile")
              : getMargin(activeSlide, "desktop")
          })`,
        }}
      >
        <div
          className={`flex flex-col md:flex-row items-center gap-6 w-[320px] md:w-[700px] transition-all ${
            activeSlide === 0 ? "blur-none" : "blur-sm opacity-30"
          }`}
        >
          <Image
            src="/images/slider/data-screen-1.png"
            alt="Global Research Image"
            width={162}
            height={190}
          />
          <div className="text-[27px] flex flex-col items-center text-center">
            <h3 className="font-bold uppercase">
              {translate("slider-1-heading")}
            </h3>
            <p>{translate("slider-1-text")}</p>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center gap-6 w-[320px] md:w-[700px] transition-all ${
            activeSlide === 1 ? "blur-none" : "blur-sm opacity-30"
          }`}
        >
          <Image
            src="/images/slider/data-screen-2.png"
            alt="Competitive Commissions Image"
            width={201}
            height={190}
          />
          <div className="text-[27px] flex flex-col items-center text-center">
            <h3 className="font-bold uppercase">
              {translate("slider-2-heading")}
            </h3>
            <p>{translate("slider-2-text")}</p>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center gap-6 w-[320px] md:w-[700px] transition-all ${
            activeSlide === 2 ? "blur-none" : "blur-sm opacity-30"
          }`}
        >
          <Image
            src="/images/slider/data-screen-3.png"
            alt="Industry Experience Image"
            width={162}
            height={155}
          />
          <div className="text-[27px] flex flex-col items-center text-center">
            <h3 className="font-bold uppercase">
              {translate("slider-3-heading")}
            </h3>
            <p>{translate("slider-3-text")}</p>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center gap-6 w-[320px] md:w-[700px] transition-all ${
            activeSlide === 3 ? "blur-none" : "blur-sm opacity-30"
          }`}
        >
          <Image
            src="/images/slider/data-screen-4.png"
            alt="Innovative Technology Image"
            width={162}
            height={177}
          />
          <div className="text-[27px] flex flex-col items-center text-center">
            <h3 className="font-bold uppercase">
              {translate("slider-4-heading")}
            </h3>
            <p>{translate("slider-4-text")}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <button
          onClick={() => setActiveSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="bg-blue-dark w-14 h-14 rounded-full flex items-center justify-center disabled:bg-gray-600"
        >
          <svg
            width="17"
            height="26"
            viewBox="0 0 17 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0338 2.70605L3.66797 13.0719L14.0338 23.4378"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          onClick={() => setActiveSlide(activeSlide + 1)}
          disabled={activeSlide === 3}
          className="bg-blue-dark w-14 h-14 rounded-full flex items-center justify-center disabled:bg-gray-600"
        >
          <svg
            width="16"
            height="26"
            viewBox="0 0 16 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.12243 2.70605L12.4883 13.0719L2.12243 23.4378"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
