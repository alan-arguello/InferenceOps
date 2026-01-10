"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const bullets = [
  "Ponemos orden y claridad sobre qué sí vale la pena implementar y qué no",
  "Priorizamos lo que sí mueve el P&L y descartamos lo que no)",
  "Acompañamos la adopción para que se vuelva parte del día a día",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        <ParticleField />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(9,11,17,0.7)] to-[var(--background)]" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#090b11_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-5xl text-center sm:text-left">
          {/* Main Headline - Mixed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-8 max-w-[20ch] sm:max-w-none mx-auto sm:mx-0"
          >
            <span className="block sm:whitespace-nowrap">
              <span className="text-foreground">Implementamos </span>
              <span className="text-elegant text-foreground">inteligencia</span>
            </span>
            <span className="block sm:whitespace-nowrap">
              <span className="text-elegant text-foreground">artificial</span>
              <span className="text-foreground"> en tu </span>
              <span className="text-elegant text-foreground">empresa.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0 font-light"
          >
            Ayudamos a equipos ejecutivos a mejorar eficiencia, ventas y
            operación con soluciones que se integran al trabajo real de sus
            equipos.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto sm:mx-0 text-left"
          >
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-accent rounded-full group-hover:bg-accent-dim transition-colors" />
                <span className="text-sm sm:text-base lg:text-lg text-muted group-hover:text-muted-light transition-colors">
                  {bullet}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center sm:flex-row sm:justify-center gap-4"
          >
            <a href="#contacto" className="group btn btn-primary">
              Agendar llamada
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a href="#casos" className="group btn btn-secondary">
              Ver casos
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
