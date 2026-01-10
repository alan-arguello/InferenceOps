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
  return (
    <>
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
