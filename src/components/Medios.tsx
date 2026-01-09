'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const mediaLinks = [
  {
    name: 'Bloomberg Línea',
    description: 'En qué emprender en LATAM en 2026: la IA seguirá liderando',
    url: 'https://www.bloomberglinea.com/latinoamerica/en-que-emprender-en-latam-en-2026-la-ia-seguira-liderando-pero-tenga-en-cuenta-estos-tips/',
  },
  {
    name: 'Forbes México',
    description: 'La sequía de inversiones amenaza a las startups',
    url: 'https://forbes.com.mx/la-sequia-de-inversiones-amenaza-a-las-startups/',
  },
  {
    name: 'Davivienda, Social Skin',
    description: 'Podcast sobre emprendimiento e innovación',
    url: 'https://open.spotify.com/episode/0OkBKUaO6d6XbQM1R8vJR7',
  },
];

export default function Medios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
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
            — Medios
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] mb-16"
        >
          <span className="text-[#f0f0f0]">Participaciones en </span>
          <span className="text-elegant text-[#666666]">medios.</span>
        </motion.h2>

        {/* Media Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaLinks.map((media, index) => (
            <motion.a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 rounded-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-lg font-light text-[#f0f0f0] group-hover:text-white transition-colors duration-300">
                  {media.name}
                </span>
                <ArrowUpRight
                  size={16}
                  className="flex-shrink-0 text-[#444444] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <p className="text-sm text-[#666666] leading-relaxed">{media.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
