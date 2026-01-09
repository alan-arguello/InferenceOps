"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    company: "ANDE",
    industry: "Sindicato de educación, Costa Rica",
    context:
      "Congreso anual con necesidad de una experiencia innovadora y participativa.",
    action:
      "Desarrollamos un avatar digital interactivo en vivo de Emma Gamboa para interacción directa durante el evento.",
    result:
      "Más de 150 asistentes interactuaron con el avatar y se logró una experiencia memorable durante el congreso.",
  },
  {
    company: "Cerebro Labs",
    industry: "EdTech, México y España",
    context:
      "Necesidad de fortalecer ejecución comercial y prospección a instituciones educativas.",
    action:
      "Acompañamiento en mejoras de proceso comercial, prospección y apoyo estratégico en alianzas.",
    result:
      "Mayor orden y consistencia en la operación comercial, con enfoque de mejora continua.",
  },
  {
    company: "CloudSeguro",
    industry: "Ciberseguridad, Colombia",
    context:
      "Fortalecer operación, ventas y posicionamiento para crecimiento sostenible.",
    action:
      "Acompañamiento en mejora de prospección, operación interna y alianzas estratégicas.",
    result:
      "Mejor estructura comercial y operativa para crecer con mayor claridad.",
  },
  {
    company: "Blind Creator",
    industry: "Software para agencias de influencers, México",
    context:
      "Necesidad de sumar talento técnico sin perder costo-beneficio ni velocidad de ejecución.",
    action:
      "Conectamos a un Data Analyst en Perú y a una Product Designer en Argentina listos para integrarse.",
    result:
      "Talento incorporado en menos de 10 días hábiles, con alta motivación y excelente costo-beneficio.",
  },
  {
    company: "Bunny Inc",
    industry: "Datos para laboratorios, Estados Unidos",
    context:
      "Explorar factibilidad y estrategia para entrar a un mercado de alta exigencia en datos, evaluación y entornos de entrenamiento.",
    action:
      "Investigación de mercado y relacionamiento en San Francisco con actores relevantes para validación real.",
    result:
      "Aprendizajes accionables para definir enfoque y siguientes pasos con información de primera mano.",
  },
  {
    company: "Universidad Continental",
    industry: "Educación superior, Perú",
    context: "Evento de innovación y formación técnica con estudiantes.",
    action:
      "Participamos como ponentes y jueces, y apoyamos con asesoría para iniciativas posteriores.",
    result:
      "Mejor diseño de experiencia y mayor claridad para nuevas iniciativas.",
  },
];

export default function Casos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const remainder = cases.length % 3;
  const lastRowStart = cases.length - remainder;
  const getColStart = (index: number) => {
    if (remainder === 0 || index < lastRowStart) return "";
    if (remainder === 1)
      return index === cases.length - 1 ? "lg:col-start-3" : "";
    if (remainder === 2)
      return index === cases.length - 2 ? "lg:col-start-2" : "lg:col-start-4";
    return "";
  };

  return (
    <section
      id="casos"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-alt">
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6 text-center"
        >
          <span className="text-foreground">Algunos de nuestros</span>
          <span className="text-elegant text-muted"> clientes.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-muted mb-12 text-center max-w-2xl mx-auto"
        >
          En llamada podemos compartir más contexto. Preferimos decir menos y
          ejecutar más.
        </motion.p>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 lg:justify-items-center">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group surface-card w-full p-5 sm:p-6 lg:col-span-2 ${getColStart(
                index
              )}`}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-white transition-colors">
                  {caseItem.company}
                </h3>
                <p className="text-xs text-muted tracking-wide">
                  {caseItem.industry}
                </p>
              </div>

              {/* Content */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs text-muted-dark uppercase tracking-widest">
                    Contexto
                  </span>
                  <p className="text-sm text-muted-light mt-2 leading-relaxed clamp-3">
                    {caseItem.context}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-dark uppercase tracking-widest">
                    Qué hicimos
                  </span>
                  <p className="text-sm text-muted-light mt-2 leading-relaxed clamp-3">
                    {caseItem.action}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted uppercase tracking-widest">
                    Resultado
                  </span>
                  <p className="text-sm text-foreground mt-2 leading-relaxed clamp-3">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
