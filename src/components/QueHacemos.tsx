'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const results = [
  'Reducción de carga operativa en tareas repetitivas',
  'Mayor velocidad en atención, seguimiento y coordinación interna',
  'Mejor consistencia y calidad en respuestas, reportes y decisiones',
  'Menos dependencia de personas clave para que la operación avance',
];

export default function QueHacemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6"
            >
              <span className="text-foreground">Hacemos que esto </span>
              <span className="text-elegant text-foreground">funcione</span>
              <span className="text-foreground"> en la </span>
              <span className="text-elegant text-muted">operación.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-muted leading-relaxed font-light"
            >
              Nos integramos con tu equipo para identificar dónde hay valor, diseñar
              la solución correcta, implementarla en herramientas reales y asegurar adopción.
            </motion.p>
          </div>

          {/* Right Column - Results */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-muted uppercase tracking-widest mb-6"
            >
              Resultados típicos
            </motion.h3>

            <div className="space-y-1">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-4 border-b border-border hover:border-border-light transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 text-accent mt-0.5 group-hover:text-accent-dim transition-colors">→</span>
                    <span className="text-base sm:text-lg text-muted-light group-hover:text-foreground transition-colors duration-300">
                      {result}
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
