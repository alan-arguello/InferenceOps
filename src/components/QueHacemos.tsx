"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  {
    title: "Carga operativa más ligera",
    description:
      "Automatizamos tareas repetitivas y liberamos horas para decisiones críticas.",
  },
  {
    title: "Atención y seguimiento más rápidos",
    description:
      "Menos fricción entre ventas, soporte y operación con flujos conectados.",
  },
  {
    title: "Respuestas y reportes consistentes",
    description:
      "Calidad uniforme en comunicaciones, reportes y decisiones internas.",
  },
  {
    title: "Operación menos dependiente",
    description:
      "Procesos documentados que siguen funcionando aunque cambie el equipo.",
  },
];

export default function QueHacemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6 max-w-xl"
            >
              <span className="text-foreground">Hacemos que esto </span>
              <span className="text-elegant text-foreground">funcione</span>
              <span className="text-foreground"> en la </span>
              <span className="text-elegant text-muted">operación.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-muted leading-relaxed font-light max-w-xl"
            >
              Nos integramos con tu equipo para identificar dónde hay valor,
              diseñar la solución correcta, implementarla en herramientas reales
              y asegurar adopción.
            </motion.p>
          </div>

          {/* Right Column - Results */}
          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <div className="result-grid">
              {results.map((result, index) => (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="result-card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-light leading-relaxed">
                    {result.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
