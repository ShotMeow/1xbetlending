import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import Field from "@/src/shared/Field";
import Radio from "@/src/shared/Radio";
import Button from "@/src/shared/Button";
import classNames from "classnames";
import Select from "@/src/shared/Select";
import PhoneField from "@/src/shared/PhoneField";
import { useFormState } from "react-dom";
import { sendEmail } from "@/src/features/email-send";

interface Props {
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ setIsShown }) => {
  const translate = useTranslations("modal");
  const translateForm = useTranslations("form-section");
  const [success, setSuccess] = useState<boolean>(false);
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  useEffect(() => {
    if (sendEmailState.success) {
      setSuccess(true);
    }
  }, [sendEmailState]);

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/40 flex items-start xl:py-10 xl:items-center justify-center">
      <form
        action={sendEmailAction}
        className={`relative flex xl:flex-row flex-col-reverse justify-between gap-4 h-full xl:h-[549px] overflow-y-auto xl:overflow-y-visible ${
          success ? "bg-[#015291]" : "bg-white"
        } border-blue-light border rounded-md text-ocean-dark p-4 w-full xl:w-[1000px]`}
      >
        {success ? (
          <div className="w-full uppercase flex flex-col items-center h-full justify-center text-white gap-4 font-bold text-center">
            <h3 className="text-[48px]">{translateForm("success-title")}</h3>
            <p className="text-[24px]">{translateForm("success-subtitle")}</p>
          </div>
        ) : (
          <>
            <Button className="px-4 text-white xl:hidden">
              {translateForm("button")}
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames({
                  "rotate-180": document.dir === "rtl",
                })}
              >
                <path
                  d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
                  fill="white"
                />
              </svg>
            </Button>
            <div className="flex flex-col justify-center p-4 w-full">
              <h2 className="text-[20px] text-center md:text-left sm:text-[30px] text-[#015291] font-bold uppercase">
                {translate("heading")}
              </h2>
              <Field
                darkMode
                name="name"
                id="name"
                required
                label={translateForm("input-1")}
                placeholder={translateForm("input-1")}
              />
              <Field
                darkMode
                name="email"
                id="email"
                required
                label={translateForm("input-2")}
                type="email"
                placeholder="example@mail.com"
              />
              <Select
                darkMode
                name="country"
                id="country"
                required
                label={translateForm("input-3")}
              />
              <PhoneField
                darkMode
                name="phone"
                id="phone"
                required
                label={translateForm("input-4")}
              />
              <div className="mt-10">
                <div className="flex items-center gap-6 mb-2">
                  <Radio
                    required
                    darkMode
                    label="telegram"
                    id="telegram"
                    value="telegram"
                    name="social-type"
                  />
                  <Radio
                    required
                    darkMode
                    label="whatsapp"
                    id="whatsapp"
                    value="whatsapp"
                    name="social-type"
                  />
                </div>
                <Field
                  required
                  darkMode
                  name="social-nickname"
                  id="social-nickname"
                  placeholder="@username"
                />
              </div>
            </div>
          </>
        )}
        <div
          className={`bg-[url('/logo-dark.png')] bg-contain bg-no-repeat bg-center w-full h-full xl:w-[506px] xl:h-[calc(100%+60px)] relative xl:-top-8 rounded-lg ${
            success ? "bg-white" : "bg-[#015291]"
          } text-center flex flex-col items-center justify-center gap-20 p-6`}
        >
          <button
            type="button"
            onClick={() => setIsShown(false)}
            className=" text-white font-bold py-2 px-4 rounded-md absolute top-4 right-4"
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

          {success ? (
            <svg
              width="147"
              height="147"
              viewBox="0 0 147 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.4999 0.583984C113.77 0.583984 146.417 33.2299 146.417 73.5006C146.417 113.771 113.77 146.417 73.4999 146.417C33.2291 146.417 0.583252 113.771 0.583252 73.5006C0.583252 33.2299 33.2291 0.583984 73.4999 0.583984ZM96.9769 51.4045L64.3853 83.9955L50.0232 69.6339C47.8875 67.4981 44.4248 67.4981 42.2892 69.6339C40.1535 71.7696 40.1535 75.2317 42.2892 77.3674L60.5186 95.5966C62.6543 97.7323 66.1164 97.7323 68.2521 95.5966L104.71 59.1383C106.846 57.0028 106.846 53.5402 104.71 51.4045C102.575 49.2688 99.1126 49.2688 96.9769 51.4045Z"
                fill="#85AB39"
              />
            </svg>
          ) : (
            <>
              <h3 className="text-[38px] mt-6 z-20 font-bold uppercase text-white">
                {translate("subtitle")}
              </h3>
              <Button type="submit" darkMode className="px-4 hidden xl:flex">
                {translateForm("button")}
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames({
                    "rotate-180": document.dir === "rtl",
                  })}
                >
                  <path
                    d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Modal;
