"use client";
import { FC, useEffect, useState } from "react";
import Field from "@/src/shared/Field";
import Select from "@/src/shared/Select";
import PhoneField from "@/src/shared/PhoneField";
import Radio from "@/src/shared/Radio";
import Button from "@/src/shared/Button";
import { useFormState } from "react-dom";
import { sendEmail } from "@/src/features/email-send";
import { useTranslations } from "next-intl";

const Form: FC = () => {
  const translate = useTranslations("form-section");
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

  return success ? (
    <div className="uppercase flex flex-col items-center h-full justify-center gap-4 text-white font-bold text-center">
      <h3 className="text-[48px]">{translate("success-title")}</h3>
      <p className="text-[24px]">{translate("success-subtitle")}</p>
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
    </div>
  ) : (
    <form action={sendEmailAction} className="flex flex-col w-full gap-4">
      <h2 className="text-[20px] text-center sm:text-[38px] font-bold uppercase">
        {translate("heading")}
      </h2>
      <Field
        name="name"
        id="name"
        required
        label={translate("input-1")}
        placeholder={translate("input-1")}
      />
      <Field
        name="email"
        id="email"
        required
        label={translate("input-2")}
        type="email"
        placeholder="example@mail.com"
      />
      <Select
        name="country"
        id="country"
        required
        label={translate("input-3")}
      />
      <PhoneField
        name="phone"
        id="phone"
        required
        label={translate("input-4")}
      />
      <div className="mt-10">
        <div className="flex items-center gap-6 mb-2">
          <Radio
            label="telegram"
            id="telegram"
            value="telegram"
            name="social-type"
          />
          <Radio
            label="whatsapp"
            id="whatsapp"
            value="whatsapp"
            name="social-type"
          />
        </div>
        <Field
          name="social-nickname"
          id="social-nickname"
          placeholder="@username"
        />
      </div>
      <Button type="submit" className="text-[22px] mx-auto mt-6 px-6">
        {translate("button")}
      </Button>
    </form>
  );
};

export default Form;
