"use server";
import { Resend } from "resend";
import FormSend from "../../../../emails/FormSend";
import { africaCountries } from "@/src/features/email-send";
interface State {
  error: string | null;
  success: boolean;
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  const phone = formData.get("phone") as string;
  const socialType = formData.get("social-type") as "whatsapp" | "telegram";
  const socialNickname = formData.get("social-nickname") as string;

  const social = {
    type: socialType,
    nickname: socialNickname,
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@1xpartnership.com",
      to: process.env.RESEND_EMAIL_ADDRESS as string,
      subject: "New Form Submission",
      react: (
        <FormSend
          email={email}
          name={name}
          country={country}
          social={social}
          phone={phone}
        />
      ),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
