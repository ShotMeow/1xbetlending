import { Montserrat, Oxygen } from "next/font/google";
import type { FC, PropsWithChildren } from "react";
import Header from "@/src/widgets/Header";
import Footer from "@/src/widgets/Footer";
import { locales } from "@/i18n";
import { notFound } from "next/navigation";

import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});
const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: ["400", "700"],
});

const Layout: FC<PropsWithChildren<{ params: { locale: string } }>> = ({
  children,
  params: { locale },
}) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body className={`${montserrat.variable} ${oxygen.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
