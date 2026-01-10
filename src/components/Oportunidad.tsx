"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Oportunidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="oportunidad"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {/* Subtle gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-3xl" />
        {/* San Francisco Skyline Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] sm:w-full lg:w-[95%] h-[240px] sm:h-[320px] lg:h-[420px] pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/sf-skyline.jpg"
              alt="San Francisco Bay Bridge Skyline"
              fill
              className="object-cover object-center opacity-55"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 30%, black 100%), linear-gradient(to top, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 30%, black 100%), linear-gradient(to top, black 60%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                filter: "grayscale(1) contrast(1.1) brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5"
          >
            <span className="text-foreground">
              La Inteligencia Artificial es la mayor{" "}
            </span>
            <span className="text-elegant text-foreground">
              revolución tecnológica
            </span>
            <span className="text-foreground"> y </span>
            <span className="text-elegant text-muted">
              traemos el conocimiento
            </span>
            <span className="text-foreground"> de Silicon Valley a </span>
            <span className="text-elegant text-muted">Latinoamérica.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed font-light max-w-3xl mx-auto">
              Después de conversar con líderes y corporativos en la región,
              vimos una diferencia abismal entre la adopción tecnológica y la
              mejora real de eficiencia operativa en las empresas.
            </p>
            <p className="text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto">
              <span className="text-muted">
                Traemos know-how y consultoría{" "}
              </span>
              <span className="text-foreground">
                para desplegar soluciones hechas a la medida
              </span>
              <span className="text-muted">
                , con un objetivo claro: que las empresas de Latinoamérica
                compitan a nivel mundial.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
