"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section
        id="contacto"
        className="relative pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background-alt">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
          {/* Retro CTA Image */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <Image
                src="/retro-computer.jpg"
                alt="Retro computer workstation"
                width={1400}
                height={1000}
                sizes="(max-width: 640px) 520px, (max-width: 1024px) 760px, 1100px"
                className="w-[520px] sm:w-[760px] lg:w-[1100px] max-w-[92vw] h-auto opacity-70"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 100%), linear-gradient(to top, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 100%), linear-gradient(to top, black 80%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                  filter: "saturate(1.1) contrast(1.05) brightness(0.95)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-transparent to-transparent" />
          </div>
        </div>

        <div
          ref={ref}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl font-light leading-[1.1] mb-6 sm:mb-8"
          >
            <span className="text-foreground">De la intención a la </span>
            <span className="text-elegant text-foreground">operación.</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> Con </span>
            <span className="text-elegant text-muted">resultados.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-light"
          >
            Agendemos una llamada gratuita para mapear tu operación y detectar
            casos con retorno claro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:contacto@operationalinference.com"
              className="group btn btn-primary w-full sm:w-auto"
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
      <footer className="relative py-12 sm:py-16 border-t border-border">
        <div className="absolute inset-0 bg-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-white rounded-[2px] transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ease-out" />
                <div className="absolute inset-[2px] bg-background rounded-[1px] transform rotate-45" />
              </div>
              <span className="text-sm font-medium tracking-tight">
                <span className="text-foreground">Operational</span>
                <span className="text-muted"> Inference</span>
              </span>
            </a>

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
