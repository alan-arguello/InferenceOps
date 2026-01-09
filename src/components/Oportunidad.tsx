'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const blockers = [
  'Nadie aterriza esto al trabajo real del equipo',
  'La iniciativa se frena por datos, seguridad o falta de responsables internos',
  'Se intenta hacer todo a la vez y nada se adopta de forma consistente',
  'Se confunde "usar herramientas" con "transformar procesos"',
];

export default function Oportunidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="oportunidad" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {/* Subtle gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-sm text-[#666666] tracking-widest uppercase">
            02 — La oportunidad
          </span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] mb-10"
          >
            <span className="text-[#f0f0f0]">Las instituciones más grandes quieren resultados, pero </span>
            <span className="text-elegant text-[#f0f0f0]">no tienen el puente</span>
            <span className="text-[#f0f0f0]"> entre estrategia y </span>
            <span className="text-elegant text-[#666666]">ejecución.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 mb-16"
          >
            <p className="text-lg sm:text-xl text-[#666666] leading-relaxed font-light">
              En Silicon Valley, los mejores equipos avanzan a velocidad extrema. En latinoamérica,
              muchas organizaciones ya entendieron que esto importa, pero les falta acceso a talento
              y a una forma práctica de implementarlo dentro de flujos reales.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-light">
              <span className="text-[#666666]">Ahí está la oportunidad: </span>
              <span className="text-[#f0f0f0]">
                llevar capacidades de clase mundial al lugar donde se genera impacto
              </span>
              <span className="text-[#666666]">
                , con despliegue directo en la operación, al lado del cliente.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Blockers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-sm text-[#666666] uppercase tracking-widest mb-8">
            Lo que normalmente detiene el avance
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {blockers.map((blocker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 rounded-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 text-[#666666] mt-0.5">×</span>
                  <span className="text-base text-[#888888] group-hover:text-[#f0f0f0] transition-colors duration-300">
                    {blocker}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
