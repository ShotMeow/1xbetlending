import type { FC } from "react";
import { Html, Text, Heading } from "@react-email/components";
import { useLocale } from "next-intl";

interface Props {
  name: string;
  email: string;
  country: string;
  phone: string;
  social: {
    type: "whatsapp" | "telegram";
    nickname: string;
  };
}

const FormSend: FC<Props> = ({ name, email, country, phone, social }) => {
  return (
    <Html lang={useLocale()}>
      <Heading>New Form Submission </Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Country: {country}</Text>
      <Text>Phone: {phone}</Text>
      <Text>
        Social: {social.type} - {social.nickname}
      </Text>
    </Html>
  );
};

export default FormSend;
