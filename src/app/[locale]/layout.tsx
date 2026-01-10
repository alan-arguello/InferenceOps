import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const localeToOg = {
  es: "es_MX",
  en: "en_US",
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const keywords = t.raw("keywords") as string[];
  const canonical = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return {
    metadataBase: new URL("https://operationalinference.com"),
    title: t("title"),
    description: t("description"),
    keywords,
    authors: [{ name: "Operational Inference" }],
    alternates: {
      canonical,
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: localeToOg[locale as "es" | "en"],
      siteName: "Operational Inference",
      url: `https://operationalinference.com${canonical}`,
      images: [
        {
          url: "/ogsf.png",
          width: 2052,
          height: 1006,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/ogsf.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
