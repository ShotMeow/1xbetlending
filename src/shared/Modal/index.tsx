import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import Field from "@/src/shared/Field";
import Radio from "@/src/shared/Radio";
import Button from "@/src/shared/Button";

interface Props {
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ setIsShown }) => {
  const translate = useTranslations("modal");
  const translateForm = useTranslations("form-section");
  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full backdrop-blur-md flex items-start md:py-10 lg:items-center overflow-y-auto justify-center">
      <div className="bg-white border-blue-light border rounded-md text-ocean-dark p-4 w-full md:w-3/4">
        <form className="relative grid lg:grid-cols-[2fr,1fr] gap-4">
          <div className="flex flex-col">
            <h2 className="text-[38px] text-ocean-light font-bold uppercase">
              {translate("heading")}
            </h2>
            <Field
              darkMode
              required
              name="name"
              placeholder={translateForm("input-1")}
            />
            <Field
              darkMode
              required
              name="e-mail"
              type="email"
              placeholder="example@mail.com"
            />
            <Field darkMode required name="country" />
            <Field darkMode required name="phone" type="tel" />
            <Field darkMode required name="country" />
            <div>
              <div className="flex items-center gap-6 my-2">
                <Radio darkMode label="telegram" name="social" />
                <Radio darkMode label="whatsapp" name="social" />
              </div>
              <Field
                darkMode
                withLabel={false}
                name="social"
                placeholder="@nickname"
              />
            </div>
          </div>
          <div className="bg-[url('/logo-dark.png')] bg-no-repeat bg-center relative rounded-lg bg-ocean-dark text-center flex flex-col items-center justify-center gap-20 p-10">
            <button
              type="button"
              onClick={() => setIsShown(false)}
              className="bg-ocean-dark hover:bg-ocean-light text-ocean-light font-bold py-2 px-4 rounded-md absolute top-4 right-4"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5453 4.56017C10.2948 -1.18936 19.6168 -1.18942 25.3664 4.56017C31.1159 10.3097 31.1159 19.6317 25.3664 25.3812C19.6168 31.1308 10.2948 31.1308 4.5453 25.3812C-1.20428 19.6317 -1.20428 10.3097 4.5453 4.56017ZM9.75057 9.76544C9.35528 10.1607 9.32233 10.7811 9.6517 11.214L9.75057 11.327L13.3943 14.9707L9.75057 18.6144C9.31936 19.0456 9.31937 19.7448 9.75057 20.176C10.1459 20.5713 10.7663 20.6042 11.1991 20.2748L11.3121 20.176L14.9558 16.5323L18.5995 20.176C19.0307 20.6072 19.7299 20.6072 20.1611 20.176C20.5564 19.7807 20.5893 19.1602 20.26 18.7274L20.1611 18.6144L16.5174 14.9707L20.1611 11.327C20.5923 10.8958 20.5923 10.1966 20.1611 9.76544C19.7658 9.37015 19.1453 9.33725 18.7126 9.66653L18.5995 9.76544L14.9558 13.4091L11.3121 9.76544C10.8809 9.33422 10.1818 9.33423 9.75057 9.76544Z"
                  fill="#14A0FF"
                />
              </svg>
            </button>

            <h3 className="text-[38px] mt-6 z-20 font-bold uppercase text-white">
              {translate("subtitle")}
            </h3>
            <Button darkMode className="px-10 z-20">
              {translateForm("button")}
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
