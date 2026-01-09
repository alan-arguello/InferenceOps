'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cases = [
  {
    company: 'ANDE',
    industry: 'Sindicato de educación, Costa Rica',
    context: 'Congreso anual con necesidad de una experiencia innovadora y participativa.',
    action:
      'Desarrollamos un avatar digital interactivo en vivo de Emma Gamboa para interacción directa durante el evento.',
    result:
      'Más de 150 asistentes interactuaron con el avatar y se logró una experiencia memorable durante el congreso.',
  },
  {
    company: 'Cerebro Labs',
    industry: 'EdTech, México y España',
    context: 'Necesidad de fortalecer ejecución comercial y prospección a instituciones educativas.',
    action:
      'Acompañamiento en mejoras de proceso comercial, prospección y apoyo estratégico en alianzas.',
    result: 'Mayor orden y consistencia en la operación comercial, con enfoque de mejora continua.',
  },
  {
    company: 'CloudSeguro',
    industry: 'Ciberseguridad, Colombia',
    context: 'Fortalecer operación, ventas y posicionamiento para crecimiento sostenible.',
    action: 'Acompañamiento en mejora de prospección, operación interna y alianzas estratégicas.',
    result: 'Mejor estructura comercial y operativa para crecer con mayor claridad.',
  },
  {
    company: 'Bunny Inc',
    industry: 'Datos para laboratorios, Estados Unidos',
    context:
      'Explorar factibilidad y estrategia para entrar a un mercado de alta exigencia en datos, evaluación y entornos de entrenamiento.',
    action:
      'Investigación de mercado y relacionamiento en San Francisco con actores relevantes para validación real.',
    result:
      'Aprendizajes accionables para definir enfoque y siguientes pasos con información de primera mano.',
  },
  {
    company: 'Universidad Continental',
    industry: 'Educación superior, Perú',
    context: 'Evento de innovación y formación técnica con estudiantes.',
    action:
      'Participamos como ponentes y jueces, y apoyamos con asesoría para iniciativas posteriores.',
    result: 'Mejor diseño de experiencia y mayor claridad para nuevas iniciativas.',
  },
];

export default function Casos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="casos" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-sm text-[#666666] tracking-widest uppercase">
            06 — Casos
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] mb-6"
        >
          <span className="text-[#f0f0f0]">Casos </span>
          <span className="text-elegant text-[#666666]">reales.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-[#666666] mb-16"
        >
          En llamada podemos compartir más contexto. Preferimos decir menos y ejecutar más.
        </motion.p>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 sm:p-8 border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 rounded-sm"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#f0f0f0] mb-1 group-hover:text-white transition-colors">
                  {caseItem.company}
                </h3>
                <p className="text-xs text-[#666666] tracking-wide">{caseItem.industry}</p>
              </div>

              {/* Content */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs text-[#444444] uppercase tracking-widest">
                    Contexto
                  </span>
                  <p className="text-sm text-[#888888] mt-2 leading-relaxed">{caseItem.context}</p>
                </div>
                <div>
                  <span className="text-xs text-[#444444] uppercase tracking-widest">
                    Qué hicimos
                  </span>
                  <p className="text-sm text-[#888888] mt-2 leading-relaxed">{caseItem.action}</p>
                </div>
                <div>
                  <span className="text-xs text-[#666666] uppercase tracking-widest">
                    Resultado
                  </span>
                  <p className="text-sm text-[#f0f0f0] mt-2 leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
