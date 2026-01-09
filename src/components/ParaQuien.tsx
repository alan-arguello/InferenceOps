'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const signals = [
  'El equipo usa ChatGPT de forma básica, pero no hay mejoras visibles en la operación',
  'Hay interés del liderazgo, pero no existe una iniciativa que se sostenga en el tiempo',
  'Existen procesos manuales, retrabajo, cuellos de botella y reportes que consumen tiempo',
  'La conversación está llena de herramientas, pero vacía de resultados',
];

export default function ParaQuien() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="para-quien" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6"
            >
              <span className="text-foreground">Esto es para empresas que aún no han </span>
              <span className="text-elegant text-foreground">adoptado</span>
              <span className="text-foreground"> esta tecnología, o la están usando de forma </span>
              <span className="text-elegant text-muted">superficial.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-muted leading-relaxed font-light"
            >
              Trabajamos con líderes que sienten presión por implementar, pero no tienen
              claridad de por dónde empezar, qué priorizar y cómo lograr que el equipo
              lo use sin fricción.
            </motion.p>
          </div>

          {/* Right Column - Signals */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-muted uppercase tracking-widest mb-6"
            >
              Señales típicas
            </motion.h3>

            <div className="space-y-1">
              {signals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-4 border-b border-border hover:border-border-light transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-accent rounded-full group-hover:bg-accent-dim transition-colors duration-300" />
                    <span className="text-base sm:text-lg text-muted-light group-hover:text-foreground transition-colors duration-300">
                      {signal}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
