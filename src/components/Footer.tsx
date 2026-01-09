'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* CTA Section */}
      <section id="contacto" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background-alt">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] mb-8"
          >
            <span className="text-foreground">Hablemos y lo </span>
            <span className="text-elegant text-foreground">aterrizamos</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> con </span>
            <span className="text-elegant text-muted">claridad.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted leading-relaxed mb-10 max-w-2xl mx-auto font-light"
          >
            En una llamada breve entendemos tu contexto y te decimos si hay una oportunidad real
            para implementar esto con valor. Si no la hay, te dejamos recomendaciones claras y listo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:contacto@operationalinference.com"
              className="group btn btn-primary"
            >
              Agendar llamada
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-border">
        <div className="absolute inset-0 bg-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-white rounded-[2px] transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ease-out" />
                <div className="absolute inset-[2px] bg-background rounded-[1px] transform rotate-45" />
              </div>
              <span className="text-sm font-medium tracking-tight">
                <span className="text-foreground">Operational</span>
                <span className="text-muted"> Inference</span>
              </span>
            </a>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a
                href="mailto:contacto@operationalinference.com"
                className="text-sm text-muted hover:text-white transition-colors duration-300 underline-animation"
              >
                Contacto
              </a>
              <a
                href="https://www.linkedin.com/in/alan-arguello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-white transition-colors duration-300 underline-animation"
              >
                LinkedIn
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-dark">
              © {new Date().getFullYear()} Operational Inference
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
