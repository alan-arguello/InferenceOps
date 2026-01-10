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
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Operational Inference",
        url: "https://operationalinference.com",
        description:
          "Ayudamos a equipos ejecutivos a mejorar eficiencia, ventas y operación con soluciones de IA que se integran al trabajo real.",
        email: "contacto@operationalinference.com",
        logo: "https://operationalinference.com/ogsf.png",
        image: "https://operationalinference.com/ogsf.png",
      },
      {
        "@type": "WebSite",
        name: "Operational Inference",
        url: "https://operationalinference.com",
        inLanguage: "es-MX",
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
