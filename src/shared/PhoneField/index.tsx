"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";
import Field from "@/src/shared/Field";
import { useLocale } from "next-intl";
import Image from "next/image";
import { countries } from "@/src/shared/Select/countries.data";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  darkMode?: boolean;
}

const PhoneField: FC<Props> = ({ darkMode = false, ...props }) => {
  const [phone, setPhone] = useState<string>("");

  const [countryCode, setCountryCode] = useState<string>(
    useLocale().toUpperCase(),
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!!isNaN(Number(event.target.value)) && event.target.value !== "+")
      return;

    const country = countries.find((country) =>
      phone.startsWith(country.dial_code),
    );

    if (country) setCountryCode(country.code);

    if (phone.length != 0) {
      setPhone(event.target.value);
    } else {
      setPhone(`+${event.target.value}`);
    }
  };

  return (
    <div className="relative">
      <Image
        src={`images/flags/${countryCode}.svg`}
        width={40}
        height={30}
        className="absolute left-4 top-10"
        alt="Country Flag"
      />
      <Field
        type="tel"
        onChange={handleChange}
        className="pl-16"
        value={phone}
        maxLength={18}
        darkMode={darkMode}
        {...props}
      />
    </div>
  );
};

export default PhoneField;
