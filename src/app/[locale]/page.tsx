import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Oportunidad from "@/components/Oportunidad";
import QueHacemos from "@/components/QueHacemos";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import Servicios from "@/components/Servicios";
import Casos from "@/components/Casos";
import CitiesCarousel from "@/components/CitiesCarousel";
import Equipo from "@/components/Equipo";
import Medios from "@/components/Medios";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const canonical = locale === "es" ? "/" : `/${locale}`;
  const inLanguage = locale === "en" ? "en-US" : "es-MX";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Operational Inference",
        url: `https://operationalinference.com${canonical}`,
        description: t("description"),
        email: "contacto@operationalinference.com",
        logo: "https://operationalinference.com/ogsf.png",
        image: "https://operationalinference.com/ogsf.png",
      },
      {
        "@type": "WebSite",
        name: "Operational Inference",
        url: `https://operationalinference.com${canonical}`,
        inLanguage,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Oportunidad />
        <CitiesCarousel />
        <Servicios />
        <Casos />
        <Equipo />
        <Medios />
        <LatestBlogPosts locale={locale} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
