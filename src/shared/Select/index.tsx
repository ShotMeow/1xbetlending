"use client";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import Field from "@/src/shared/Field";
import { countries } from "@/src/shared/Select/countries.data";
import Image from "next/image";
import { useLocale } from "next-intl";
import classNames from "classnames";
import { CountryType } from "./countries.types";

const getCountryName = (countryCode: string): string => {
  return (
    countries.find((country) => country.code === countryCode.toUpperCase())
      ?.name || "United Kingdom"
  );
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  darkMode?: boolean;
}

const Select: FC<Props> = ({ darkMode = false, ...props }) => {
  const [countriesArr, setCountriesArr] = useState<CountryType[]>(countries);
  const [countryCode, setCountryCode] = useState<string>(
    useLocale().toUpperCase(),
  );
  const [countryName, setCountryName] = useState<string>(
    getCountryName(useLocale()),
  );
  const [errorShown, setErrorShown] = useState<boolean>(false);

  const [dropdownShown, setDropdownShown] = useState<boolean>(false);

  useEffect(() => {
    const newCountriesArr = countries.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase()),
    );

    if (newCountriesArr.length === 0) {
      setErrorShown(true);
    } else if (errorShown && newCountriesArr.length > 0) {
      setErrorShown(false);
    }

    setCountriesArr(newCountriesArr);
  }, [errorShown, countryName]);

  const handleFocus = () => {
    setCountriesArr(countries);
    setDropdownShown(true);
  };

  return (
    <div className="relative">
      <Image
        src={`images/flags/${countryCode.toLowerCase()}.svg`}
        width={40}
        height={30}
        className="absolute left-4 top-10"
        alt={countryName}
      />
      {errorShown && (
        <p className="absolute right-4 top-11 text-red-600 font-semibold uppercase pointer-events-none">
          Country not found
        </p>
      )}
      <Field
        darkMode={darkMode}
        onFocus={handleFocus}
        onBlur={() => setTimeout(() => setDropdownShown(false), 100)}
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
        className={classNames(
          {
            "border-red-600 outline-red-600": errorShown,
          },
          "pl-16",
        )}
        {...props}
      />
      {dropdownShown && (
        <ul
          className={classNames(
            {
              "my-0 bg-white": darkMode,
            },
            "absolute z-30 bg-ocean-dark h-auto rounded-lg p-4 w-full my-8 space-y-4 max-h-96 overflow-auto",
          )}
        >
          {countriesArr.map((country) => (
            <li
              onClick={() => {
                setCountryCode(country.code);
                setCountryName(country.name);
              }}
              className="flex items-center gap-4 cursor-pointer"
              key={country.code}
            >
              <Image
                src={`images/flags/${country.code.toLowerCase()}.svg`}
                width={40}
                height={30}
                alt={country.name}
              />
              <p className="font-semibold">{country.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
