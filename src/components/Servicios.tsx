"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Implementación aplicada, hecha a la medida",
    includes: [
      "Automatización de procesos en operación, ventas, soporte y backoffice",
      "Asistentes internos para búsqueda, resumen, respuesta y reportes",
      "Integraciones con herramientas existentes y flujos ya usados por el equipo",
      "Buenas prácticas para control, trazabilidad y reducción de riesgos",
    ],
    deliverables: [
      "Solución funcionando dentro del flujo real",
      "Documentación clara para operación y mantenimiento",
      "Capacitación aplicada al equipo que la usará",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Adopción ejecutiva y entrenamiento aplicado",
    includes: [
      "Sesiones para líderes y ejecutivos sobre qué es real, qué es moda y qué priorizar",
      "Talleres aterrizados a tu industria y a tus procesos internos",
      "Guías internas para uso responsable y toma de decisiones",
    ],
    deliverables: [
      "Guía ejecutiva de priorización y decisión",
      "Rutinas de uso por rol, aplicadas al día a día",
      "Plantillas y ejemplos listos para aplicar con tu equipo",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Estrategia de adopción y eficiencia operativa",
    includes: [
      "Diagnóstico de fricciones operativas y oportunidades de automatización",
      "Priorización por impacto y facilidad de implementación",
      "Lineamientos mínimos para datos, seguridad y aprobaciones internas",
    ],
    deliverables: [
      "Mapa de oportunidades con recomendaciones claras",
      "Backlog priorizado para ejecutar sin perder foco",
      "Lineamientos prácticos para que esto sea sostenible",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Talento y pods para ejecución",
    includes: [
      "Apoyo para encontrar talento joven de alto potencial en latinoamérica",
      "Armado de equipos por proyecto según necesidad, sin inflar estructura",
      "Soporte en evaluación y entrevistas con criterios claros",
    ],
    deliverables: [
      "Shortlist validado y proceso de selección",
      "Onboarding y objetivos claros para el rol",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Eventos empresariales y activaciones estratégicas",
    includes: [
      "Diseño y ejecución de eventos con retorno, no solo branding",
      "Curación de agenda, invitados, speakers y seguimiento",
      "Conexión con comunidad técnica y ecosistema según objetivos",
    ],
    deliverables: [
      "Plan del evento y operación completa",
      "Estrategia de convocatoria y ejecución",
      "Resultados y siguientes pasos",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Inmersiones y conexiones con Silicon Valley",
    includes: [
      "Agenda curada para ejecutivos con aprendizaje aplicado",
      "Conexiones estratégicas cuando exista fit real",
      "Preparación y seguimiento para convertir reuniones en valor",
    ],
    deliverables: [
      "Agenda con objetivos por reunión",
      "Briefings previos",
      "Seguimiento con acciones posteriores",
    ],
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-border last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 sm:py-6 flex items-start gap-6 text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-sm text-muted-dark group-hover:text-muted transition-colors font-light">
          {service.number}
        </span>
        <div className="flex-1 flex items-start justify-between gap-4">
          <h3 className="text-base sm:text-lg font-light text-foreground group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <ChevronDown
            size={20}
            className={`flex-shrink-0 text-muted-dark group-hover:text-foreground transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-8"
        >
          <div className="ml-10 sm:ml-14 grid md:grid-cols-2 gap-8">
            {/* What's included */}
            <div>
              <h4 className="text-xs text-muted uppercase tracking-widest mb-4">
                Qué incluye
              </h4>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs text-muted uppercase tracking-widest mb-4">
                Entregables típicos
              </h4>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-light"
                  >
                    <span className="text-muted-dark mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Servicios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6 max-w-3xl"
        >
          <span className="text-foreground">
            Puedes llegar por cualquiera de estos{" "}
          </span>
          <span className="text-elegant text-foreground">caminos.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted mb-12 max-w-2xl font-light"
        >
          Nuestra prioridad es aterrizar en implementación y resultado.
        </motion.p>

        {/* Services List */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
