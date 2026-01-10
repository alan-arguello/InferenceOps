"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Oportunidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Oportunidad");
  const titleLine1 = t.rich("title.line1", {
    accent: (chunks) => (
      <span className="text-elegant text-foreground">{chunks}</span>
    ),
  });
  const titleLine2 = t.rich("title.line2", {
    accent: (chunks) => (
      <span className="text-elegant text-foreground">{chunks}</span>
    ),
    muted: (chunks) => <span className="text-elegant text-muted">{chunks}</span>,
  });
  const paragraphOne = t.rich("paragraphs.0", {
    highlight: (chunks) => <span className="text-foreground">{chunks}</span>,
  });
  const paragraphTwo = t.rich("paragraphs.1", {
    highlight: (chunks) => <span className="text-foreground">{chunks}</span>,
  });
  const paragraphThree = t.rich("paragraphs.2", {
    highlight: (chunks) => <span className="text-foreground">{chunks}</span>,
    strong: (chunks) => <span className="text-foreground">{chunks}</span>,
    br: () => <br className="hidden sm:block" />,
  });

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
        <div className="relative max-w-4xl mx-auto">
          <div className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border border-white/10 bg-white/[0.02]" />
          <div className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] border border-white/10 bg-white/[0.04]" />
          <div className="relative z-10 rounded-[28px] border border-border-light bg-[rgba(14,18,26,0.78)] backdrop-blur-sm px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-9 shadow-[0_30px_70px_rgba(0,0,0,0.45)] text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5"
            >
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-5 sm:space-y-6 max-w-3xl"
            >
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {paragraphOne}
              </p>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {paragraphTwo}
              </p>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {paragraphThree}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
