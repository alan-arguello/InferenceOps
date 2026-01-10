"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Alan Arguello",
    role: "CEO, Software Engineer & MBA",
    image: "/alan.png",
    bio: [
      "Cofundó Torrenegra Organization junto al inversor de Shark Tank, Alex Torrenegra, apoyando a más de 100 empresas en ejecución, operación y expansión.",
      "Parte del equipo de Makers Fellowship con Andrés Bilbao, cofundador de Rappi en donde apoyó a empresas a conseguir talento.",
      "Invertido por Platanus Ventures. Miembro de Latitud, On Deck y AI Circle.",
    ],
    logos: [
      { src: "/alan_logos/Group 2.svg", alt: "Torrenegra Organization" },
      { src: "/alan_logos/buny.svg", alt: "Bunny" },
    ],
    linkedin: "https://www.linkedin.com/in/alan-arguello/",
  },
  {
    name: "Michelle Arguello",
    role: "CFO, Venture Capital Specialist",
    image: "/michelle.jpeg",
    bio: [
      "Contadora especializada en operación y finanzas.",
      "Fue Administration Manager en IGNIA Partners, liderando reportes a inversionistas, capital calls y soporte financiero del fondo.",
      "Ha dirigido procesos de control operativo y gobierno financiero para compañías en crecimiento, con foco en claridad, cumplimiento y continuidad.",
    ],
    logos: [
      { src: "/michelle_logos/ignia.webp", alt: "IGNIA Partners" },
      { src: "/michelle_logos/derevo.svg", alt: "Derevo" },
    ],
    linkedin: "https://www.linkedin.com/in/michelleargoroz/",
  },
];

export default function Equipo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="equipo"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5 sm:mb-6 text-center sm:text-left"
        >
          <span className="text-foreground">Equipo core y </span>
          <span className="text-elegant text-muted">red de especialistas.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-muted mb-10 sm:mb-12 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left"
        >
          Somos un equipo compacto. Según el tipo de proyecto, sumamos perfiles
          técnicos y de integración bajo un modelo de colaboración por proyecto,
          con responsables claros y entregables definidos.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group surface-card p-5 sm:p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border-light bg-card-strong">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      priority={member.name === "Alan Arguello"}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted">{member.role}</p>
                  </div>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-dark hover:text-white transition-colors duration-300"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                {member.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-light leading-relaxed text-left sm:text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs text-muted uppercase tracking-widest">
                  Experiencia previa
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  {member.logos.map((logo) => (
                    <div key={logo.src} className="profile-logo">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={110}
                        height={36}
                        className="profile-logo-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
