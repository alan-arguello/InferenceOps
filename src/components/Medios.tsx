"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pressLinks = [
  {
    name: "Bloomberg Línea",
    logo: "/press/bloomberg.png",
    url: "https://www.bloomberglinea.com/latinoamerica/en-que-emprender-en-latam-en-2026-la-ia-seguira-liderando-pero-tenga-en-cuenta-estos-tips/",
  },
  {
    name: "Forbes México",
    logo: "/press/forbes.webp",
    url: "https://forbes.com.mx/la-sequia-de-inversiones-amenaza-a-las-startups/",
  },
  {
    name: "Davivienda, Social Skin",
    logo: "/press/davivienda.png",
    url: "https://open.spotify.com/episode/0OkBKUaO6d6XbQM1R8vJR7",
  },
];

export default function Medios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-12"
        >
          <span className="text-foreground">Participaciones en </span>
          <span className="text-elegant text-muted">medios.</span>
        </motion.h2>

        {/* Press Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
          {pressLinks.map((press, index) => (
            <motion.a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="press-logo-link"
              aria-label={press.name}
            >
              <Image
                src={press.logo}
                alt={press.name}
                width={180}
                height={60}
                className="press-logo-image"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
