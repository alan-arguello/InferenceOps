"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkylineDots from "./SkylineDots";

const blockers = [
  "Nadie aterriza esto al trabajo real del equipo",
  "La iniciativa se frena por datos, seguridad o falta de responsables internos",
  "Se intenta hacer todo a la vez y nada se adopta de forma consistente",
  'Se confunde "usar herramientas" con "transformar procesos"',
];

export default function Oportunidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="oportunidad"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {/* Subtle gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[360px] sm:w-[520px] lg:w-[640px] h-[160px] sm:h-[220px] lg:h-[260px] opacity-60 pointer-events-none">
          <SkylineDots />
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-10"
          >
            <span className="text-foreground">
              Las instituciones más grandes quieren resultados, pero{" "}
            </span>
            <span className="text-elegant text-foreground">
              no tienen el puente
            </span>
            <span className="text-foreground"> entre estrategia y </span>
            <span className="text-elegant text-muted">ejecución.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 mb-12"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
              En Silicon Valley, los mejores equipos avanzan a velocidad
              extrema. En latinoamérica, muchas organizaciones ya entendieron
              que esto importa, pero les falta acceso a talento y a una forma
              práctica de implementarlo dentro de flujos reales.
            </p>
            <p className="text-base sm:text-lg leading-relaxed font-light">
              <span className="text-muted">Ahí está la oportunidad: </span>
              <span className="text-foreground">
                llevar capacidades de clase mundial al lugar donde se genera
                impacto
              </span>
              <span className="text-muted">
                , con despliegue directo en la operación, al lado del cliente.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
