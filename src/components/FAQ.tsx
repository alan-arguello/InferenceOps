"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "¿Esto es para empresas que no han usado nada de esto?",
    answer:
      "Sí. De hecho, ahí suele haber más oportunidad, porque se puede avanzar con claridad y sin confusión interna.",
  },
  {
    question: "¿Esto es un curso?",
    answer:
      "No. Podemos entrenar al equipo, pero el enfoque principal es implementación y uso real dentro de la empresa.",
  },
  {
    question: "¿Necesito un equipo técnico interno?",
    answer:
      "No es obligatorio. Sí necesitamos acceso a responsables internos, procesos reales y sistemas relevantes para que lo implementado se mantenga.",
  },
  {
    question: "¿Qué tipos de casos suelen funcionar mejor?",
    answer:
      "Casos donde hay volumen, retrabajo, coordinación manual, respuestas repetitivas o reportes que consumen tiempo, como ventas, atención, operaciones y backoffice.",
  },
  {
    question: "¿Cómo manejan seguridad y datos?",
    answer:
      "Se define desde el inicio qué datos se usan, dónde corre la solución, quién accede, qué se registra y cómo se controla el riesgo. Si no se puede hacer bien, no se hace.",
  },
  {
    question: "¿Trabajan con cualquier industria?",
    answer:
      "Sí, siempre que exista un proceso claro donde esto pueda aportar valor concreto.",
  },
  {
    question: "¿Qué no hacen?",
    answer:
      "No vendemos chatbots genéricos sin dueño ni métricas. No prometemos resultados sin baseline. No implementamos IA cuando un flujo simple o reglas resuelven mejor.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg text-foreground font-light group-hover:text-white transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 text-muted-dark group-hover:text-muted transition-colors mt-1">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-6">
              <p className="text-sm sm:text-base text-muted-light leading-relaxed max-w-3xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-8 sm:mb-12 text-center"
        >
          <span className="text-foreground">Preguntas </span>
          <span className="text-elegant text-muted">frecuentes.</span>
        </motion.h2>

        {/* FAQ List */}
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
