"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, MouseEvent } from "react";
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

// Team member card component with premium animations
function MemberCard({
  member,
  index,
  isInView,
}: {
  member: (typeof team)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse move for spotlight effect
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="surface-card p-5 sm:p-6 h-full"
      >
        {/* Premium glow effect on border */}
        <div className="surface-card-glow" />
        {/* Shimmer effect */}
        <div className="surface-card-shimmer" />

        {/* Header */}
        <div className="flex items-start justify-between mb-6 relative">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border-light bg-card-strong group-hover:border-accent/30 transition-colors duration-500"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="64px"
                priority={member.name === "Alan Arguello"}
              />
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}
                className="text-sm text-muted font-mono tracking-wide"
              >
                {member.role}
              </motion.p>
            </div>
          </div>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn-premium"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin size={16} />
          </motion.a>
        </div>

        {/* Bio */}
        <div className="space-y-4 relative">
          {member.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-muted-light leading-relaxed text-left sm:text-justify"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          className="mt-6 relative"
        >
          <div className="card-divider mb-4" />
          <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
            Experiencia previa
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {member.logos.map((logo, logoIndex) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.75 + index * 0.1 + logoIndex * 0.05 }}
                className="profile-logo"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={36}
                  className="profile-logo-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

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
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
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
            <MemberCard
              key={index}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
