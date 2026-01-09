'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Alan Arguello',
    role: 'Co-founder',
    bio: [
      'Experiencia en ingeniería de software y trabajo directo junto a equipos ejecutivos.',
      'Previamente, junto a Alexander Torrenegra, cofundó Torrenegra Organization, donde apoyó a más de 100 empresas en la región en temas de ejecución, operación y crecimiento.',
      'Trabajó con Andrés Bilbao, uno de los cofundadores de Rappi en Makers Fellowship, apoyando a empresas a conseguir talento joven técnico y acompañando a emprendedores en su desarrollo.',
      'También fue invertido y acelerado por Platanus Ventures, uno de los programas más selectivos para empresas tecnológicas en latinoamérica.',
    ],
    linkedin: 'https://www.linkedin.com/in/alan-arguello/',
  },
  {
    name: 'Michelle Arguello',
    role: 'Co-founder',
    bio: [
      'Contadora con experiencia en operación y finanzas. Ha asesorado a empresas y corporativos en México y ha trabajado en roles de administración y control operativo.',
      'Trabajó como Administration Manager en IGNIA Partners, uno de los fondos de venture capital más reconocidos en méxico, apoyando la operación del fondo con tareas como reportes a inversionistas, capital calls, distribución de ganancias y soporte financiero.',
    ],
    linkedin: 'https://www.linkedin.com/in/michelleargoroz/',
  },
];

export default function Equipo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="equipo" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
            07 — Equipo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] mb-6"
        >
          <span className="text-[#f0f0f0]">Equipo core y </span>
          <span className="text-elegant text-[#666666]">red de especialistas.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-[#666666] mb-16 max-w-2xl"
        >
          Somos un equipo compacto. Según el tipo de proyecto, sumamos perfiles técnicos y de
          integración bajo un modelo de colaboración por proyecto, con responsables claros y
          entregables definidos.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 sm:p-8 border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 rounded-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 bg-white/[0.02] border border-white/10 flex items-center justify-center rounded-sm">
                    <span className="text-xl font-light text-[#444444]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#f0f0f0] group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#666666]">{member.role}</p>
                  </div>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#444444] hover:text-white transition-colors duration-300"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm text-[#888888] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
