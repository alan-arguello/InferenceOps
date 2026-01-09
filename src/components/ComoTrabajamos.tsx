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
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 dot-pattern opacity-20" />
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
            04 — Cómo trabajamos
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] mb-20 max-w-4xl"
        >
          <span className="text-[#f0f0f0]">Un método simple y práctico: </span>
          <span className="text-elegant text-[#f0f0f0]">entender, construir, integrar</span>
          <span className="text-[#f0f0f0]"> y </span>
          <span className="text-elegant text-[#666666]">adoptar.</span>
        </motion.h2>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
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
                <span className="text-5xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[#f0f0f0] mb-4 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#888888] transition-colors">
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
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-xl sm:text-2xl font-light leading-relaxed max-w-3xl">
            <span className="text-[#888888]">Preferimos hacer pocas cosas, bien hechas. </span>
            <span className="text-elegant text-[#f0f0f0]">
              Nuestro trabajo no termina cuando &ldquo;funciona&rdquo;, termina cuando se usa.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
