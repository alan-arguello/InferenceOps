"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function QueHacemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("QueHacemos");
  const title = t.rich("title", {
    accent: (chunks) => (
      <span className="text-elegant text-foreground">{chunks}</span>
    ),
    muted: (chunks) => <span className="text-elegant text-muted">{chunks}</span>,
  });
  const results = t.raw("results") as {
    title: string;
    description: string;
  }[];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5 max-w-xl mx-auto lg:mx-0"
          >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-muted leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          {/* Right Column - Results */}
          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <div className="result-grid">
              {results.map((result, index) => (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="result-card"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                    {result.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                    {result.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
