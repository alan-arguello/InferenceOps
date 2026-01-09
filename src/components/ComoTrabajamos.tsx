'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Entender tu realidad',
    description:
      'Entramos al proceso con tu equipo. Observamos cómo operan, qué se hace manualmente, dónde hay retrabajo, qué datos existen y qué sistemas usan.',
  },
  {
    number: '02',
    title: 'Elegir un caso con valor claro',
    description:
      'Priorizamos un caso donde el impacto sea evidente para el negocio. Evitamos casos de "demo" que nadie usa.',
  },
  {
    number: '03',
    title: 'Implementar en sistemas reales',
    description:
      'Conectamos la solución al flujo de trabajo real. Trabajamos sobre tus herramientas actuales, como CRM, correo, WhatsApp, ERP, formularios y bases internas.',
  },
  {
    number: '04',
    title: 'Asegurar adopción',
    description:
      'Acompañamos el uso, iteramos con usuarios reales y dejamos responsables internos, documentación y una forma clara de mantenerlo.',
  },
];

export default function ComoTrabajamos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-14 max-w-4xl"
        >
          <span className="text-foreground">Un método simple y práctico: </span>
          <span className="text-elegant text-foreground">entender, construir, integrar</span>
          <span className="text-foreground"> y </span>
          <span className="text-elegant text-muted">adoptar.</span>
        </motion.h2>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Step number */}
              <div className="mb-6">
                <span className="text-4xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-base text-muted leading-relaxed group-hover:text-muted-light transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-border"
        >
          <p className="text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            <span className="text-muted-light">Preferimos hacer pocas cosas, bien hechas. </span>
            <span className="text-elegant text-foreground">
              Nuestro trabajo no termina cuando &ldquo;funciona&rdquo;, termina cuando se usa.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
