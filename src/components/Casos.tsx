"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Premium industry-specific visualizations

// ANDE - Voice/Audio Waveform (Digital interaction)
function AndeVisualization() {
  return (
    <div className="relative w-full h-32 overflow-hidden flex items-center justify-center">
      {/* Audio waveform */}
      <div className="flex items-center gap-[3px] h-16">
        {[
          0.3, 0.5, 0.7, 0.4, 0.9, 0.6, 1, 0.7, 0.5, 0.8, 0.4, 0.6, 0.9, 0.5,
          0.7, 0.3, 0.6, 0.8, 0.5, 0.4, 0.7, 0.9, 0.6, 0.5, 0.3,
        ].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.1 }}
            animate={{ scaleY: [0.1, h, 0.1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            className="w-[2px] rounded-full origin-center"
            style={{
              height: "100%",
              background:
                i < 8
                  ? "rgba(124, 244, 216, 0.6)"
                  : i < 17
                    ? "linear-gradient(180deg, rgba(124, 244, 216, 0.8), rgba(166, 255, 106, 0.6))"
                    : "rgba(166, 255, 106, 0.5)",
            }}
          />
        ))}
      </div>

      {/* Subtle glow behind */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 244, 216, 0.15), transparent 70%)",
        }}
      />

      {/* Corner accent */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
        <span className="text-[9px] text-muted-dark font-mono">LIVE</span>
      </div>
    </div>
  );
}

// Cerebro Labs - Neural Network Graph
function CerebroVisualization() {
  const nodes = [
    { x: 20, y: 20 },
    { x: 50, y: 12 },
    { x: 80, y: 22 },
    { x: 12, y: 50 },
    { x: 40, y: 45 },
    { x: 65, y: 50 },
    { x: 88, y: 48 },
    { x: 25, y: 78 },
    { x: 55, y: 82 },
    { x: 80, y: 75 },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [2, 6],
    [3, 4], [4, 5], [5, 6], [3, 7], [4, 8], [5, 9],
    [7, 8], [8, 9], [4, 7], [5, 8],
  ];

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 95">
        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(124, 244, 216, 0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
          />
        ))}

        {/* Animated data flow */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`flow-${i}`}
            r="1.5"
            fill="#7cf4d8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [nodes[0].x, nodes[4].x, nodes[8].x],
              cy: [nodes[0].y, nodes[4].y, nodes[8].y],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i === 4 || i === 5 ? 3 : 2}
            fill={
              i === 4 || i === 5
                ? "rgba(124, 244, 216, 0.8)"
                : "rgba(124, 244, 216, 0.4)"
            }
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05, type: "spring" }}
          />
        ))}
      </svg>

      {/* Metrics */}
      <div className="absolute bottom-3 left-3 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent/60" />
          <span className="text-[9px] text-muted-dark font-mono">10 nodes</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent-dim/60" />
          <span className="text-[9px] text-muted-dark font-mono">16 edges</span>
        </div>
      </div>
    </div>
  );
}

// CloudSeguro - Encrypted Data Stream
function CloudSeguroVisualization() {
  return (
    <div className="relative w-full h-32 overflow-hidden flex items-center justify-center">
      {/* Hex grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 80">
          {[...Array(6)].map((_, row) =>
            [...Array(8)].map((_, col) => (
              <motion.text
                key={`${row}-${col}`}
                x={col * 14 + (row % 2) * 7}
                y={row * 14 + 10}
                fontSize="6"
                fill="rgba(124, 244, 216, 0.4)"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.1,
                }}
              >
                {["0", "1", "A", "F", "E", "7", "C", "9"][
                  Math.floor(Math.random() * 8)
                ]}
              </motion.text>
            ))
          )}
        </svg>
      </div>

      {/* Central shield indicator */}
      <div className="relative z-10 flex flex-col items-center">
        <svg width="32" height="38" viewBox="0 0 32 38">
          <motion.path
            d="M16 2 L30 8 L30 18 C30 28 16 36 16 36 C16 36 2 28 2 18 L2 8 L16 2Z"
            fill="none"
            stroke="rgba(124, 244, 216, 0.5)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M16 2 L30 8 L30 18 C30 28 16 36 16 36 C16 36 2 28 2 18 L2 8 L16 2Z"
            fill="rgba(124, 244, 216, 0.08)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-2 text-[9px] text-accent font-mono tracking-wider"
        >
          SECURED
        </motion.div>
      </div>

      {/* Scanning line */}
      <motion.div
        animate={{ y: [-50, 50] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124, 244, 216, 0.4), transparent)",
        }}
      />
    </div>
  );
}

// Blind Creator - Analytics Dashboard
function BlindCreatorVisualization() {
  return (
    <div className="relative w-full h-32 overflow-hidden p-4">
      <div className="h-full flex gap-3">
        {/* Engagement chart */}
        <div className="flex-1 flex flex-col">
          <div className="text-[8px] text-muted-dark font-mono mb-2 uppercase tracking-wider">
            Engagement
          </div>
          <div className="flex-1 flex items-end gap-1">
            {[45, 62, 38, 71, 55, 83, 67, 91, 76, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex-1 rounded-sm origin-bottom"
                style={{
                  height: `${h}%`,
                  background:
                    h > 70
                      ? "rgba(166, 255, 106, 0.6)"
                      : "rgba(124, 244, 216, 0.4)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="w-20 flex flex-col justify-between py-1">
          {[
            { label: "Reach", value: "2.4M", change: "+12%" },
            { label: "CTR", value: "4.8%", change: "+0.6%" },
            { label: "Conv", value: "1.2K", change: "+23%" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-right"
            >
              <div className="text-[8px] text-muted-dark font-mono">
                {metric.label}
              </div>
              <div className="text-xs text-foreground font-mono">
                {metric.value}
              </div>
              <div className="text-[8px] text-accent-dim font-mono">
                {metric.change}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trend line overlay */}
      <svg
        className="absolute inset-4 w-[calc(100%-5rem)] h-[calc(100%-2rem)]"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 45 Q 20 40 35 35 T 60 25 T 100 10"
          fill="none"
          stroke="rgba(124, 244, 216, 0.3)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </svg>
    </div>
  );
}

// Bunny Inc - Data Pipeline
function BunnyVisualization() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80">
        {/* Data flow paths */}
        <motion.path
          d="M 20 40 C 50 40 50 20 80 20 L 120 20 C 150 20 150 40 180 40"
          fill="none"
          stroke="rgba(124, 244, 216, 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M 20 40 L 80 40 L 120 40 L 180 40"
          fill="none"
          stroke="rgba(124, 244, 216, 0.5)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="M 20 40 C 50 40 50 60 80 60 L 120 60 C 150 60 150 40 180 40"
          fill="none"
          stroke="rgba(166, 255, 106, 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Nodes */}
        {[
          { x: 20, y: 40, size: 6 },
          { x: 80, y: 20, size: 4 },
          { x: 80, y: 40, size: 4 },
          { x: 80, y: 60, size: 4 },
          { x: 120, y: 20, size: 4 },
          { x: 120, y: 40, size: 4 },
          { x: 120, y: 60, size: 4 },
          { x: 180, y: 40, size: 6 },
        ].map((node, i) => (
          <motion.rect
            key={i}
            x={node.x - node.size / 2}
            y={node.y - node.size / 2}
            width={node.size}
            height={node.size}
            rx="1"
            fill={
              i === 0 || i === 7
                ? "rgba(124, 244, 216, 0.8)"
                : "rgba(124, 244, 216, 0.4)"
            }
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.08 }}
          />
        ))}

        {/* Data particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            fill="#7cf4d8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              cx: [20, 80, 120, 180],
              cy: [40, i === 0 ? 20 : i === 1 ? 40 : 60, i === 0 ? 20 : i === 1 ? 40 : 60, 40],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}

        {/* Labels */}
        <text x="20" y="55" fontSize="6" fill="rgba(165, 175, 188, 0.6)" textAnchor="middle" fontFamily="monospace">
          INPUT
        </text>
        <text x="100" y="75" fontSize="6" fill="rgba(165, 175, 188, 0.6)" textAnchor="middle" fontFamily="monospace">
          PROCESS
        </text>
        <text x="180" y="55" fontSize="6" fill="rgba(165, 175, 188, 0.6)" textAnchor="middle" fontFamily="monospace">
          OUTPUT
        </text>
      </svg>
    </div>
  );
}

// Universidad Continental - Innovation Metrics
function UniversidadVisualization() {
  return (
    <div className="relative w-full h-32 overflow-hidden p-4">
      <div className="h-full flex items-center justify-center gap-6">
        {/* Radial progress indicators */}
        {[
          { label: "Proyectos", value: 24, max: 30 },
          { label: "Equipos", value: 8, max: 10 },
          { label: "Impacto", value: 92, max: 100, accent: true },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-14 h-14">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="2"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke={item.accent ? "#7cf4d8" : "rgba(124, 244, 216, 0.5)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${(item.value / item.max) * 88} 88`}
                  initial={{ strokeDasharray: "0 88" }}
                  animate={{
                    strokeDasharray: `${(item.value / item.max) * 88} 88`,
                  }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                />
              </svg>
              {/* Center value */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-sm font-mono ${item.accent ? "text-accent" : "text-foreground"}`}
                >
                  {item.value}
                </span>
              </div>
            </div>
            <span className="mt-1.5 text-[8px] text-muted-dark font-mono uppercase tracking-wider">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124, 244, 216, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 244, 216, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </div>
  );
}

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
    url: "https://ande.cr/",
    visualization: AndeVisualization,
  },
  {
    company: "Cerebro Labs",
    industry: "EdTech, México y España",
    context:
      "Fortalecer ejecución comercial y prospección con procesos más claros.",
    action:
      "Acompañamos el orden del pipeline, la prospección y alianzas para sostener la operación comercial.",
    result:
      "Operación comercial más consistente y con seguimiento visible para el equipo.",
    url: "https://cerebro-labs.ai/",
    visualization: CerebroVisualization,
  },
  {
    company: "CloudSeguro",
    industry: "Ciberseguridad, Colombia",
    context:
      "Fortalecer operación, ventas y posicionamiento para crecimiento sostenible.",
    action:
      "Acompañamiento en mejora de prospección, operación interna y alianzas estratégicas.",
    result:
      "Estructura comercial y operativa más clara para crecer con control.",
    url: "https://www.cloudseguro.co/",
    visualization: CloudSeguroVisualization,
  },
  {
    company: "Blind Creator",
    industry: "Software para agencias de influencers, México",
    context:
      "Necesidad de sumar talento técnico para ejecutar automatizaciones con alto costo-beneficio.",
    action:
      "Conectamos a un Data Analyst en Perú y a una Product Designer en Argentina listos para integrarse.",
    result:
      "Talento incorporado en menos de 10 días hábiles, con alta motivación y excelente costo-beneficio.",
    url: "https://www.blindcreator.com/",
    visualization: BlindCreatorVisualization,
  },
  {
    company: "Bunny Inc",
    industry: "Datos para laboratorios, Estados Unidos",
    context:
      "Explorar factibilidad y estrategia para entrar a un mercado de alta exigencia en datos.",
    action:
      "Investigación de mercado y relacionamiento en San Francisco con actores relevantes.",
    result:
      "Aprendizajes accionables para definir enfoque operativo y siguientes pasos.",
    url: "https://bunnyinc.com/",
    visualization: BunnyVisualization,
  },
  {
    company: "Universidad Continental",
    industry: "Educación superior, Perú",
    context: "Evento de innovación y formación técnica con estudiantes.",
    action:
      "Participamos como ponentes y jueces, y diseñamos dinámicas para activar proyectos.",
    result:
      "Experiencia más clara y un pipeline de iniciativas con foco aplicado.",
    url: "https://fablab.ucontinental.edu.pe/",
    visualization: UniversidadVisualization,
  },
];

function CaseCard({
  caseItem,
  index,
  isInView,
}: {
  caseItem: (typeof cases)[0];
  index: number;
  isInView: boolean;
}) {
  const Visualization = caseItem.visualization;

  return (
    <motion.a
      href={caseItem.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group block"
    >
      <div className="surface-card h-full cursor-pointer">
        {/* Visualization */}
        <div className="border-b border-white/[0.06]">
          <Visualization />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                  {caseItem.company}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent"
                />
              </div>
              <p className="text-[11px] text-muted-dark mt-1 font-mono">
                {caseItem.industry}
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-2 sm:space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-white/20" />
                <span className="text-[9px] text-muted-dark uppercase tracking-widest font-mono">
                  Contexto
                </span>
              </div>
              <p className="text-sm text-muted-light leading-relaxed line-clamp-2">
                {caseItem.context}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-accent/40" />
                <span className="text-[9px] text-muted-dark uppercase tracking-widest font-mono">
                  Qué hicimos
                </span>
              </div>
              <p className="text-sm text-muted-light leading-relaxed line-clamp-2">
                {caseItem.action}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-accent" />
                <span className="text-[9px] text-accent uppercase tracking-widest font-mono">
                  Resultado
                </span>
              </div>
              <p className="text-sm text-foreground leading-relaxed line-clamp-2">
                {caseItem.result}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-[10px] text-muted-dark group-hover:text-muted transition-colors font-mono">
              Visitar sitio
            </span>
            <div className="w-6 h-6 rounded border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
              <ArrowUpRight
                size={12}
                className="text-muted-dark group-hover:text-accent transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Casos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5 sm:mb-6 max-w-3xl text-center sm:text-left mx-auto sm:mx-0"
        >
          <span className="text-foreground">Casos reales</span>
          <span className="text-elegant text-muted"> en operación.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted mb-10 sm:mb-12 max-w-2xl text-center sm:text-left mx-auto sm:mx-0 font-light"
        >
          Implementación con resultados visibles y adopción por el equipo.
        </motion.p>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index}
              caseItem={caseItem}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
