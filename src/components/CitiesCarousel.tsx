"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cities = [
  { src: "/cities/san%20francisco.jpeg", name: "San Francisco" },
  { src: "/cities/napa.jpeg", name: "Napa Valley" },
  { src: "/cities/bogota.jpg", name: "Bogotá" },
  { src: "/cities/medellin.jpeg", name: "Medellín" },
  { src: "/cities/ciudad%20mexico.jpg", name: "Ciudad de México" },
  { src: "/cities/guadalajara.png", name: "Guadalajara" },
  { src: "/cities/lima.png", name: "Lima" },
];

const logos = [
  { src: "/hero_logos_slider/anthropic.png", alt: "Anthropic" },
  { src: "/hero_logos_slider/bbva.png", alt: "BBVA" },
  { src: "/hero_logos_slider/davivienda.png", alt: "Davivienda" },
  { src: "/hero_logos_slider/itam.png", alt: "ITAM" },
  { src: "/hero_logos_slider/javeriana.png", alt: "Universidad Javeriana" },
  { src: "/hero_logos_slider/lovable.svg", alt: "Lovable" },
  { src: "/hero_logos_slider/supabase.png", alt: "Supabase" },
  { src: "/hero_logos_slider/stanford.webp", alt: "Stanford" },
];

const track = [...cities, ...cities];
const logoTrack = [...logos, ...logos];

export default function CitiesCarousel() {
  return (
    <section
      id="ciudades"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-4"
        >
          <span className="text-foreground">Desde </span>
          <span className="text-elegant text-foreground">Silicon Valley</span>
          <span className="text-foreground"> a </span>
          <span className="text-elegant text-muted">Latinoamérica.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted max-w-2xl mb-10"
        >
          Conectamos líderes de tecnología.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="city-carousel"
          aria-label="Eventos en distintas ciudades"
        >
          <div className="city-track">
            {track.map((city, index) => (
              <div
                key={`${city.name}-${index}`}
                className="city-tile"
                aria-hidden={index >= cities.length}
              >
                <div className="city-image-frame">
                  <Image
                    src={city.src}
                    alt={city.name}
                    fill
                    className="city-image"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 320px"
                  />
                  <div className="city-overlay">
                    <span className="city-name">{city.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <div
            className="mt-6 logo-marquee"
            aria-label="Organizaciones colaboradoras"
          >
            <div className="logo-track">
              {logoTrack.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="logo-item"
                  aria-hidden={index >= logos.length}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={64}
                    className="logo-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
