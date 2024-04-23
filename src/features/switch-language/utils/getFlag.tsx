import Image from "next/image";

import enFlag from "../assets/flags/en.svg";
import frFlag from "../assets/flags/fr.svg";
import aeFlag from "../assets/flags/ar.svg";
export const getFlag = (locale: string) => {
  switch (locale) {
    case "en":
      return (
        <Image src={enFlag} alt="United States Flag" width={21} height={21} />
      );
    case "fr":
      return <Image src={frFlag} alt="France Flag" width={21} height={21} />;
    case "ar":
      return <Image src={aeFlag} alt="Arabic Flag" width={21} height={21} />;
  }
};
