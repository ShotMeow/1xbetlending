import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    domains: [
      {
        domain: '1xbetlending-pink.vercel.app/en',
        defaultLocale: 'en',
      },
      {
        domain: '1xbetlending-pink.vercel.app/ar',
        defaultLocale: 'ar',
      },
      {
        domain: '1xbetlending-pink.vercel.app/fr',
        defaultLocale: 'fr',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);