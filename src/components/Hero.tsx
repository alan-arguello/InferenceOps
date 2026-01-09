'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleField from './ParticleField';

const bullets = [
  'Ponemos orden y claridad sobre qué sí vale la pena implementar y qué no',
  'Integramos la solución a tu operación y a tus herramientas actuales',
  'Acompañamos la adopción para que se vuelva parte del día a día',
];

const socialProof = [
  { name: 'Anthropic' },
  { name: 'On Deck' },
  { name: 'BBVA' },
  { name: 'Supabase' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]">
        <ParticleField />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#2a2a2a] bg-[#0a0a0a]/60 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full pulse-soft" />
            <span className="text-xs sm:text-sm text-[#888888] tracking-wide">
              200+ empresas en la región
            </span>
          </motion.div>

          {/* Main Headline - Mixed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-[#f0f0f0]">Implementamos </span>
            <span className="text-elegant text-[#f0f0f0]">inteligencia artificial</span>
            <br className="hidden sm:block" />
            <span className="text-[#f0f0f0]"> en tu </span>
            <span className="text-elegant text-[#f0f0f0]">empresa.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#666666] leading-relaxed mb-12 max-w-3xl font-light"
          >
            Ayudamos a directores generales y equipos ejecutivos en corporativos y pymes de
            latinoamérica a mejorar eficiencia, ventas y operación con soluciones que se
            integran al trabajo real de sus equipos.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 mb-12"
          >
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-[#666666] rounded-full group-hover:bg-white transition-colors" />
                <span className="text-base sm:text-lg text-[#666666] group-hover:text-[#888888] transition-colors">
                  {bullet}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="text-sm text-[#666666] mb-5">
              Hemos apoyado a 200+ empresas en la región y coorganizado 40+ eventos en
              San Francisco y Latinoamérica, junto a organizaciones y comunidades como:
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {socialProof.map((item, index) => (
                <span
                  key={index}
                  className="text-sm text-[#888888] hover:text-white transition-colors cursor-default"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#050505] font-medium text-base rounded-sm hover:bg-[#f0f0f0] transition-all duration-300"
            >
              Agendar llamada
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#casos"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#2a2a2a] text-[#f0f0f0] font-medium text-base rounded-sm hover:border-[#666666] hover:bg-white/5 transition-all duration-300"
            >
              Ver casos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-[#666666] tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
