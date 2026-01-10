"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Entender tu realidad",
    description:
      "Entramos al proceso con tu equipo. Observamos cómo operan, qué se hace manualmente, dónde hay retrabajo, qué datos existen y qué sistemas usan.",
  },
  {
    title: "Elegir un caso con valor claro",
    description:
      'Priorizamos un caso donde el impacto sea evidente para el negocio. Evitamos casos de "demo" que nadie usa.',
  },
  {
    title: "Implementar en sistemas reales",
    description:
      "Conectamos la solución al flujo de trabajo real. Trabajamos sobre tus herramientas actuales, como CRM, correo, WhatsApp, ERP, formularios y bases internas.",
  },
  {
    title: "Asegurar adopción",
    description:
      "Acompañamos el uso, iteramos con usuarios reales y dejamos responsables internos, documentación y una forma clara de mantenerlo.",
  },
];

export default function ComoTrabajamos() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.15", "end 0.85"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 sm:gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5 max-w-md mx-auto lg:mx-0"
            >
              <span className="text-foreground">
                Un método simple y práctico:{" "}
              </span>
              <span className="text-elegant text-foreground">
                entender, construir, integrar
              </span>
              <span className="text-foreground"> y </span>
              <span className="text-elegant text-muted">adoptar.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-muted leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Cada paso se construye sobre el anterior para asegurar adopción,
              no solo implementación.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div ref={timelineRef} className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
            <motion.div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-dim to-accent"
              style={{ scaleY: lineScale, transformOrigin: "top" }}
            />
            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-10"
                >
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-2 h-4 w-4 rounded-full border border-accent/60 bg-background shadow-[0_0_12px_rgba(124,244,216,0.3)]"
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted-dark uppercase tracking-[0.3em]">
                      Paso {index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {step.description}
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
