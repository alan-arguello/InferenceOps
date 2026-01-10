"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, MouseEvent } from "react";

// Premium service visualizations

// Implementation - API/Integration Flow
function AutomationVisualization() {
  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        {/* API endpoints */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Left source systems */}
          {[
            { y: 20, label: "CRM" },
            { y: 50, label: "ERP" },
            { y: 80, label: "API" },
          ].map((item, i) => (
            <g key={i}>
              <rect
                x="10"
                y={item.y - 8}
                width="32"
                height="16"
                rx="2"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
              <text
                x="26"
                y={item.y + 1}
                fontSize="6"
                fill="rgba(165, 175, 188, 0.7)"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {item.label}
              </text>
            </g>
          ))}

          {/* Center processing node */}
          <rect
            x="85"
            y="35"
            width="30"
            height="30"
            rx="4"
            fill="rgba(124, 244, 216, 0.1)"
            stroke="rgba(124, 244, 216, 0.4)"
            strokeWidth="1"
          />
          <text
            x="100"
            y="52"
            fontSize="5"
            fill="#7cf4d8"
            textAnchor="middle"
            fontFamily="monospace"
          >
            AI
          </text>

          {/* Right output systems */}
          {[
            { y: 20, label: "SLACK" },
            { y: 50, label: "MAIL" },
            { y: 80, label: "DB" },
          ].map((item, i) => (
            <g key={i}>
              <rect
                x="158"
                y={item.y - 8}
                width="32"
                height="16"
                rx="2"
                fill="rgba(166, 255, 106, 0.08)"
                stroke="rgba(166, 255, 106, 0.3)"
                strokeWidth="0.5"
              />
              <text
                x="174"
                y={item.y + 1}
                fontSize="5"
                fill="rgba(166, 255, 106, 0.8)"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {item.label}
              </text>
            </g>
          ))}
        </motion.g>

        {/* Connection paths */}
        {[20, 50, 80].map((y, i) => (
          <g key={`path-${i}`}>
            <motion.path
              d={`M 42 ${y} L 85 50`}
              fill="none"
              stroke="rgba(124, 244, 216, 0.2)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            />
            <motion.path
              d={`M 115 50 L 158 ${y}`}
              fill="none"
              stroke="rgba(166, 255, 106, 0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            />
          </g>
        ))}

        {/* Data flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="1.5"
            fill="#7cf4d8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              cx: [42, 85, 115, 158],
              cy: [20 + i * 30, 50, 50, 20 + i * 30],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Status */}
      <div className="absolute bottom-2 right-3 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
          <span className="text-[8px] text-muted-dark font-mono">
            3 FLOWS ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

// Training - Learning Progress Dashboard
function TrainingVisualization() {
  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden p-3">
      <div className="h-full flex gap-4">
        {/* Skills matrix */}
        <div className="flex-1">
          <div className="text-[7px] text-muted-dark font-mono uppercase tracking-wider mb-2">
            Adoption Rate
          </div>
          <div className="space-y-2">
            {[
              { label: "Prompting", value: 92 },
              { label: "Tools", value: 78 },
              { label: "Workflows", value: 85 },
              { label: "Analysis", value: 71 },
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[7px] text-muted-dark font-mono w-14 truncate">
                  {skill.label}
                </span>
                <div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        skill.value > 80
                          ? "rgba(124, 244, 216, 0.7)"
                          : "rgba(166, 255, 106, 0.5)",
                    }}
                  />
                </div>
                <span className="text-[8px] text-foreground font-mono w-6 text-right">
                  {skill.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Session metrics */}
        <div className="w-16 flex flex-col justify-between border-l border-white/[0.06] pl-3">
          {[
            { label: "Sessions", value: "24" },
            { label: "Hours", value: "48" },
            { label: "Teams", value: "6" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="text-[7px] text-muted-dark font-mono uppercase">
                {metric.label}
              </div>
              <div className="text-sm text-foreground font-mono">
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completion indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-2 right-2 flex items-center gap-1"
      >
        <span className="text-[8px] text-accent font-mono">81.5% COMPLETE</span>
      </motion.div>
    </div>
  );
}

// Strategy - Roadmap Timeline
function StrategyVisualization() {
  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        {/* Timeline base */}
        <motion.line
          x1="20"
          y1="50"
          x2="180"
          y2="50"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Progress line */}
        <motion.line
          x1="20"
          y1="50"
          x2="120"
          y2="50"
          stroke="url(#timeline-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Phase markers */}
        {[
          { x: 20, label: "Q1", status: "done" },
          { x: 60, label: "Q2", status: "done" },
          { x: 100, label: "Q3", status: "current" },
          { x: 140, label: "Q4", status: "pending" },
          { x: 180, label: "SCALE", status: "pending" },
        ].map((phase, i) => (
          <g key={i}>
            <motion.circle
              cx={phase.x}
              cy="50"
              r={phase.status === "current" ? 5 : 3}
              fill={
                phase.status === "done"
                  ? "#7cf4d8"
                  : phase.status === "current"
                  ? "#a6ff6a"
                  : "rgba(255,255,255,0.1)"
              }
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            />
            {phase.status === "current" && (
              <motion.circle
                cx={phase.x}
                cy="50"
                r="8"
                fill="none"
                stroke="rgba(166, 255, 106, 0.3)"
                strokeWidth="1"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <text
              x={phase.x}
              y="68"
              fontSize="6"
              fill={
                phase.status === "pending"
                  ? "rgba(165, 175, 188, 0.4)"
                  : "rgba(165, 175, 188, 0.8)"
              }
              textAnchor="middle"
              fontFamily="monospace"
            >
              {phase.label}
            </text>
          </g>
        ))}

        {/* Milestone cards */}
        {[
          { x: 40, y: 25, label: "Diagnóstico" },
          { x: 80, y: 25, label: "Diseño" },
          { x: 120, y: 25, label: "Ejecución" },
        ].map((milestone, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.15 }}
          >
            <rect
              x={milestone.x - 18}
              y={milestone.y - 8}
              width="36"
              height="14"
              rx="2"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
            <text
              x={milestone.x}
              y={milestone.y + 1}
              fontSize="5"
              fill="rgba(165, 175, 188, 0.7)"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {milestone.label}
            </text>
          </motion.g>
        ))}

        <defs>
          <linearGradient
            id="timeline-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7cf4d8" />
            <stop offset="100%" stopColor="#a6ff6a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-3 text-[8px] text-muted-dark font-mono"
      >
        PHASE 3 OF 5
      </motion.div>
    </div>
  );
}

// Talent - Team Network Matrix
function TalentVisualization() {
  const roles = [
    { x: 30, y: 25, label: "ML", size: 4 },
    { x: 70, y: 20, label: "FE", size: 3 },
    { x: 110, y: 25, label: "BE", size: 3 },
    { x: 150, y: 20, label: "DS", size: 4 },
    { x: 50, y: 55, label: "PM", size: 3 },
    { x: 90, y: 50, label: "LEAD", size: 5 },
    { x: 130, y: 55, label: "QA", size: 3 },
    { x: 70, y: 80, label: "UX", size: 3 },
    { x: 110, y: 80, label: "DBA", size: 3 },
  ];

  const connections = [
    [0, 4],
    [1, 4],
    [1, 5],
    [2, 5],
    [2, 6],
    [3, 6],
    [4, 5],
    [5, 6],
    [4, 7],
    [5, 7],
    [5, 8],
    [6, 8],
    [0, 5],
    [3, 5],
  ];

  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 100">
        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={roles[from].x}
            y1={roles[from].y}
            x2={roles[to].x}
            y2={roles[to].y}
            stroke="rgba(124, 244, 216, 0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
          />
        ))}

        {/* Role nodes */}
        {roles.map((role, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
          >
            <circle
              cx={role.x}
              cy={role.y}
              r={role.size * 2.5}
              fill={
                role.label === "LEAD"
                  ? "rgba(124, 244, 216, 0.15)"
                  : "rgba(255,255,255,0.03)"
              }
              stroke={
                role.label === "LEAD"
                  ? "rgba(124, 244, 216, 0.5)"
                  : "rgba(255,255,255,0.1)"
              }
              strokeWidth="0.5"
            />
            <text
              x={role.x}
              y={role.y + 1.5}
              fontSize="5"
              fill={
                role.label === "LEAD" ? "#7cf4d8" : "rgba(165, 175, 188, 0.7)"
              }
              textAnchor="middle"
              fontFamily="monospace"
            >
              {role.label}
            </text>
          </motion.g>
        ))}

        {/* Data flow */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`flow-${i}`}
            r="1.5"
            fill="#7cf4d8"
            animate={{
              opacity: [0, 1, 0],
              cx: [roles[0].x, roles[5].x, roles[8].x],
              cy: [roles[0].y, roles[5].y, roles[8].y],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Team stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 left-3 flex items-center gap-3"
      >
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent" />
          <span className="text-[8px] text-muted-dark font-mono">9 ROLES</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent-dim" />
          <span className="text-[8px] text-muted-dark font-mono">14 LINKS</span>
        </div>
      </motion.div>
    </div>
  );
}

// Events - Attendance Analytics
function EventsVisualization() {
  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden p-3">
      <div className="h-full flex gap-4">
        {/* Attendance chart */}
        <div className="flex-1">
          <div className="text-[7px] text-muted-dark font-mono uppercase tracking-wider mb-2">
            Attendance
          </div>
          <div className="h-16 flex items-end gap-1">
            {[35, 52, 68, 45, 82, 91, 78, 95, 88, 72, 85, 92].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex-1 rounded-sm origin-bottom"
                style={{
                  height: `${h}%`,
                  background:
                    h > 80
                      ? "rgba(124, 244, 216, 0.6)"
                      : h > 60
                      ? "rgba(124, 244, 216, 0.4)"
                      : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[6px] text-muted-dark font-mono">JAN</span>
            <span className="text-[6px] text-muted-dark font-mono">DEC</span>
          </div>
        </div>

        {/* Event metrics */}
        <div className="w-20 flex flex-col justify-center gap-2 border-l border-white/[0.06] pl-3">
          {[
            { label: "Events", value: "12", unit: "/yr" },
            { label: "Avg", value: "156", unit: "pax" },
            { label: "NPS", value: "72", unit: "" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="text-[6px] text-muted-dark font-mono uppercase">
                {metric.label}
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm text-foreground font-mono">
                  {metric.value}
                </span>
                <span className="text-[7px] text-muted-dark font-mono">
                  {metric.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next event indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
        <span className="text-[7px] text-accent font-mono">NEXT: MAR 15</span>
      </motion.div>
    </div>
  );
}

// Silicon Valley - Global Network
function SiliconValleyVisualization() {
  const locations = [
    { x: 25, y: 35, label: "SF", primary: true },
    { x: 60, y: 65, label: "CDMX", primary: false },
    { x: 100, y: 45, label: "NYC", primary: false },
    { x: 140, y: 70, label: "SAO", primary: false },
    { x: 170, y: 30, label: "LON", primary: false },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [0, 4],
    [1, 3],
    [2, 4],
  ];

  return (
    <div className="relative w-full h-32 sm:h-36 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        {/* Grid background */}
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(124, 244, 216, 0.05)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection arcs */}
        {connections.map(([from, to], i) => (
          <motion.path
            key={i}
            d={`M ${locations[from].x} ${locations[from].y} Q ${
              (locations[from].x + locations[to].x) / 2
            } ${Math.min(locations[from].y, locations[to].y) - 15} ${
              locations[to].x
            } ${locations[to].y}`}
            fill="none"
            stroke="rgba(124, 244, 216, 0.2)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
          />
        ))}

        {/* Location nodes */}
        {locations.map((loc, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
          >
            {loc.primary && (
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r="12"
                fill="none"
                stroke="rgba(124, 244, 216, 0.2)"
                strokeWidth="0.5"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.primary ? 6 : 4}
              fill={
                loc.primary
                  ? "rgba(124, 244, 216, 0.3)"
                  : "rgba(255,255,255,0.05)"
              }
              stroke={loc.primary ? "#7cf4d8" : "rgba(255,255,255,0.2)"}
              strokeWidth="1"
            />
            <text
              x={loc.x}
              y={loc.y + (loc.primary ? 16 : 12)}
              fontSize="5"
              fill={loc.primary ? "#7cf4d8" : "rgba(165, 175, 188, 0.6)"}
              textAnchor="middle"
              fontFamily="monospace"
            >
              {loc.label}
            </text>
          </motion.g>
        ))}

        {/* Data transfer animation */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`transfer-${i}`}
            r="2"
            fill="#7cf4d8"
            animate={{
              opacity: [0, 1, 0],
              cx: [locations[0].x, locations[i + 1].x],
              cy: [locations[0].y, locations[i + 1].y],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Network status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-3 flex items-center gap-3"
      >
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent" />
          <span className="text-[8px] text-muted-dark font-mono">5 HUBS</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent-dim" />
          <span className="text-[8px] text-muted-dark font-mono">
            LATAM + US + EU
          </span>
        </div>
      </motion.div>
    </div>
  );
}

const services = [
  {
    id: 1,
    number: "01",
    group: "core",
    title: "Implementación aplicada",
    subtitle: "Hecha a la medida",
    description:
      "Automatización de procesos y asistentes internos integrados con tus herramientas existentes.",
    visualization: AutomationVisualization,
  },
  {
    id: 2,
    number: "02",
    group: "core",
    title: "Adopción ejecutiva",
    subtitle: "Entrenamiento aplicado",
    description:
      "Sesiones y talleres para líderes sobre qué es real, qué priorizar y cómo decidir.",
    visualization: TrainingVisualization,
  },
  {
    id: 3,
    number: "03",
    group: "core",
    title: "Estrategia de adopción",
    subtitle: "Eficiencia operativa",
    description:
      "Diagnóstico, priorización por impacto y lineamientos para una adopción sostenible.",
    visualization: StrategyVisualization,
  },
  {
    id: 4,
    number: "04",
    group: "complementary",
    title: "Talento técnico",
    subtitle: "Ejecución ágil",
    description:
      "Talento de alto potencial en Latam y equipos por proyecto sin inflar estructura.",
    visualization: TalentVisualization,
  },
  {
    id: 5,
    number: "05",
    group: "complementary",
    title: "Eventos empresariales",
    subtitle: "Activaciones estratégicas",
    description:
      "Eventos con retorno real, curación de agenda y conexión con el ecosistema.",
    visualization: EventsVisualization,
  },
  {
    id: 6,
    number: "06",
    group: "complementary",
    title: "Inmersiones",
    subtitle: "Silicon Valley",
    description:
      "Agenda curada para ejecutivos con conexiones estratégicas y aprendizaje aplicado.",
    visualization: SiliconValleyVisualization,
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
  const Visualization = service.visualization;
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse move for spotlight effect
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(4px)" }}
      animate={
        isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}
      }
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="surface-card h-full"
      >
        {/* Premium glow effect on border */}
        <div className="surface-card-glow" />
        {/* Shimmer effect */}
        <div className="surface-card-shimmer" />

        {/* Visualization */}
        <div className="viz-container relative">
          <Visualization />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-[10px] text-muted-dark font-mono tracking-wider">
              {service.number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.45 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-white transition-colors duration-300"
          >
            {service.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
            className="text-[10px] sm:text-[11px] text-muted-dark mb-3 font-mono tracking-wide"
          >
            {service.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 + index * 0.08 }}
            className="text-sm sm:text-base text-muted-light leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Servicios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const coreServices = services.filter((service) => service.group === "core");
  const complementaryServices = services.filter(
    (service) => service.group === "complementary"
  );

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
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-5 max-w-3xl mx-auto sm:mx-0 text-center sm:text-left"
        >
          <span className="text-foreground">Nuestros </span>
          <span className="text-elegant text-foreground">servicios.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted mb-10 sm:mb-12 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left font-light"
        >
          Nuestra prioridad: impacto medible, implementación en producción y
          adopción por el equipo.
        </motion.p>

        {/* Services Grid */}
        <div className="space-y-12">
          <div>
            <p className="text-[10px] text-muted uppercase tracking-widest mb-2 font-mono text-center sm:text-left">
              Servicios core
            </p>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
              Lo que siempre ejecutamos para asegurar implementación y adopción
              real.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] text-muted uppercase tracking-widest mb-2 font-mono text-center sm:text-left">
              Complementarios
            </p>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
              Activaciones y soporte adicional cuando el proyecto lo requiere.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {complementaryServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index + coreServices.length}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
