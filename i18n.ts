import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "fr", "ae"];
export const localePrefix = "as-needed";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
