"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animated visualization components for each service
function AutomationVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500" />
        </motion.div>
      </div>

      {/* Left side icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {[
          { icon: "⚡", delay: 0 },
          { icon: "📊", delay: 0.2 },
          { icon: "🔄", delay: 0.4 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Right side outputs */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {[
          { color: "from-emerald-400 to-teal-500", delay: 0.6 },
          { color: "from-amber-400 to-orange-500", delay: 0.8 },
          { color: "from-rose-400 to-pink-500", delay: 1 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <div className={`w-4 h-4 rounded bg-gradient-to-br ${item.color}`} />
          </motion.div>
        ))}
      </div>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
        {/* Left to center */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`left-${i}`}
            d={`M 35 ${55 + i * 22} Q 70 ${55 + i * 22} 85 75`}
            fill="none"
            stroke="url(#gradient-blue)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: i * 0.2, duration: 1 }}
          />
        ))}
        {/* Center to right */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`right-${i}`}
            d={`M 115 75 Q 130 ${55 + i * 22} 165 ${55 + i * 22}`}
            fill="none"
            stroke={
              i === 0
                ? "url(#gradient-green)"
                : i === 1
                  ? "url(#gradient-orange)"
                  : "url(#gradient-pink)"
            }
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient
            id="gradient-orange"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="gradient-pink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TrainingVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Dashboard mockup */}
      <div className="absolute inset-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
        {/* Top bar */}
        <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>

        {/* Content */}
        <div className="p-3 flex gap-3">
          {/* Sidebar */}
          <div className="w-12 flex flex-col gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`h-2 rounded ${i === 1 ? "bg-blue-400/60" : "bg-white/10"}`}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 space-y-2">
            {/* Charts row */}
            <div className="flex gap-2">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 h-16 rounded-lg bg-gradient-to-t from-blue-500/20 to-transparent border border-white/10 origin-bottom"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex-1 h-16 rounded-lg bg-gradient-to-t from-violet-500/20 to-transparent border border-white/10 origin-bottom"
              />
            </div>

            {/* Progress bars */}
            <div className="space-y-1.5">
              {[80, 60, 90].map((width, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-white/20" />
                  </div>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
                      className={`h-full rounded-full ${i === 0 ? "bg-emerald-400/60" : i === 1 ? "bg-amber-400/60" : "bg-blue-400/60"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-1 right-2 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center gap-1"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] text-emerald-300">Activo</span>
      </motion.div>
    </div>
  );
}

function StrategyVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden p-4">
      {/* Roadmap visualization */}
      <div className="relative h-full flex items-center">
        {/* Main line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-violet-500/50 to-emerald-500/50 origin-left"
        />

        {/* Nodes */}
        {[
          { label: "Diagnóstico", color: "blue", pos: "5%" },
          { label: "Diseño", color: "violet", pos: "35%" },
          { label: "Ejecución", color: "emerald", pos: "65%" },
          { label: "Escala", color: "amber", pos: "95%" },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
            className="absolute flex flex-col items-center"
            style={{ left: node.pos, transform: "translateX(-50%)" }}
          >
            <div
              className={`w-4 h-4 rounded-full bg-${node.color}-500/30 border-2 border-${node.color}-400 flex items-center justify-center`}
              style={{
                backgroundColor:
                  node.color === "blue"
                    ? "rgba(59, 130, 246, 0.3)"
                    : node.color === "violet"
                      ? "rgba(139, 92, 246, 0.3)"
                      : node.color === "emerald"
                        ? "rgba(16, 185, 129, 0.3)"
                        : "rgba(251, 191, 36, 0.3)",
                borderColor:
                  node.color === "blue"
                    ? "#60a5fa"
                    : node.color === "violet"
                      ? "#a78bfa"
                      : node.color === "emerald"
                        ? "#34d399"
                        : "#fbbf24",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    node.color === "blue"
                      ? "#60a5fa"
                      : node.color === "violet"
                        ? "#a78bfa"
                        : node.color === "emerald"
                          ? "#34d399"
                          : "#fbbf24",
                }}
              />
            </div>
            <span className="mt-2 text-[10px] text-muted-light whitespace-nowrap">
              {node.label}
            </span>

            {/* Floating cards */}
            {i < 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.3 }}
                className="absolute -top-12 w-16 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <div className="space-y-1">
                  <div className="w-10 h-1 bg-white/20 rounded" />
                  <div className="w-6 h-1 bg-white/10 rounded" />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TalentVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Network of people */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Center person */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border-2 border-white/20 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
        </motion.div>

        {/* Orbiting people */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const radius = 70;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
              className="absolute w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${["#f472b6", "#34d399", "#fbbf24", "#60a5fa", "#a78bfa", "#f97316"][i]} 0%, ${["#ec4899", "#10b981", "#f59e0b", "#3b82f6", "#8b5cf6", "#ea580c"][i]} 100%)`,
                }}
              />
            </motion.div>
          );
        })}

        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 150"
          style={{ overflow: "visible" }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const endX = 100 + Math.cos(angle) * 50;
            const endY = 75 + Math.sin(angle) * 50;
            return (
              <motion.line
                key={i}
                x1="100"
                y1="75"
                x2={endX}
                y2={endY}
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Floating skill tags */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        className="absolute top-3 left-3 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-300"
      >
        ML Engineer
      </motion.div>
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-3 right-3 px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-300"
      >
        Full Stack
      </motion.div>
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-300"
      >
        Data Science
      </motion.div>
    </div>
  );
}

function EventsVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden p-3">
      {/* Stage/venue mockup */}
      <div className="relative h-full">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent rounded-xl" />

        {/* Stage */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-t from-white/10 to-white/5 rounded-t-lg border-t border-x border-white/20 origin-bottom"
        >
          {/* Podium */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-white/10 rounded border border-white/20"
          />
        </motion.div>

        {/* Spotlight beams */}
        {[-30, 0, 30].map((angle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 + i * 0.3 }}
            className="absolute top-0 left-1/2 w-20 h-32 origin-top"
            style={{
              transform: `translateX(-50%) rotate(${angle}deg)`,
              background: `linear-gradient(180deg, ${i === 0 ? "rgba(96, 165, 250, 0.3)" : i === 1 ? "rgba(167, 139, 250, 0.3)" : "rgba(251, 191, 36, 0.3)"} 0%, transparent 100%)`,
              clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
            }}
          />
        ))}

        {/* Audience dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.05 }}
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Calendar badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute top-0 right-0 w-10 h-12 bg-white/10 border border-white/20 rounded-lg overflow-hidden"
        >
          <div className="h-3 bg-rose-500/40" />
          <div className="flex flex-col items-center justify-center h-9">
            <span className="text-[10px] text-muted">MAR</span>
            <span className="text-sm font-medium text-white">15</span>
          </div>
        </motion.div>

        {/* Attendee count */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute top-0 left-0 flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-lg"
        >
          <div className="flex -space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-background"
                style={{
                  background: `linear-gradient(135deg, ${["#60a5fa", "#a78bfa", "#34d399"][i]} 0%, ${["#3b82f6", "#8b5cf6", "#10b981"][i]} 100%)`,
                }}
              />
            ))}
          </div>
          <span className="text-[10px] text-muted-light">+124</span>
        </motion.div>
      </div>
    </div>
  );
}

function SiliconValleyVisualization() {
  return (
    <div className="relative w-full h-48 overflow-hidden flex items-center justify-center">
      {/* Globe wireframe */}
      <div className="relative w-36 h-36">
        {/* Outer ring */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-white/10"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Horizontal lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={`h-${i}`}
            className="absolute left-1/2 -translate-x-1/2 w-full border-t border-white/5"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}

        {/* Vertical ellipses */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`v-${i}`}
            animate={{ rotateY: 360 }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              transform: `rotateY(${60 * i}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}

        {/* Connection points */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/3 right-2 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-1/3 left-4 w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-6 right-1/4 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50"
        />

        {/* Animated arc */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 144 144"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="M 72 15 Q 120 50 85 120"
            fill="none"
            stroke="url(#arc-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          />
          <motion.path
            d="M 72 15 Q 24 60 50 100"
            fill="none"
            stroke="url(#arc-gradient-2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.5 }}
          />
          <defs>
            <linearGradient
              id="arc-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="arc-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Location labels */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] text-emerald-300">San Francisco</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-2 left-4 text-[9px] text-muted flex items-center gap-1"
      >
        <div className="w-1 h-1 rounded-full bg-amber-400" />
        CDMX
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-2 right-4 text-[9px] text-muted flex items-center gap-1"
      >
        <div className="w-1 h-1 rounded-full bg-violet-400" />
        São Paulo
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
    highlights: ["Automatización", "Asistentes IA", "Integraciones"],
    visualization: AutomationVisualization,
    gradient: "from-blue-500/20 via-violet-500/10 to-transparent",
    accentColor: "blue",
  },
  {
    id: 2,
    number: "02",
    group: "core",
    title: "Adopción ejecutiva",
    subtitle: "Entrenamiento aplicado",
    description:
      "Sesiones y talleres para líderes sobre qué es real, qué priorizar y cómo decidir.",
    highlights: ["Ejecutivos", "Talleres", "Decisiones"],
    visualization: TrainingVisualization,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald",
  },
  {
    id: 3,
    number: "03",
    group: "core",
    title: "Estrategia de adopción",
    subtitle: "Eficiencia operativa",
    description:
      "Diagnóstico, priorización por impacto y lineamientos para una adopción sostenible.",
    highlights: ["Diagnóstico", "Roadmap", "Priorización"],
    visualization: StrategyVisualization,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet",
  },
  {
    id: 4,
    number: "04",
    group: "complementary",
    title: "Talento y pods",
    subtitle: "Ejecución ágil",
    description:
      "Talento de alto potencial en Latam y equipos por proyecto sin inflar estructura.",
    highlights: ["Latam", "Pods", "Selección"],
    visualization: TalentVisualization,
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "rose",
  },
  {
    id: 5,
    number: "05",
    group: "complementary",
    title: "Eventos empresariales",
    subtitle: "Activaciones estratégicas",
    description:
      "Eventos con retorno real, curación de agenda y conexión con el ecosistema.",
    highlights: ["Eventos", "Networking", "ROI"],
    visualization: EventsVisualization,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "amber",
  },
  {
    id: 6,
    number: "06",
    group: "complementary",
    title: "Inmersiones",
    subtitle: "Silicon Valley",
    description:
      "Agenda curada para ejecutivos con conexiones estratégicas y aprendizaje aplicado.",
    highlights: ["Silicon Valley", "Conexiones", "Inmersión"],
    visualization: SiliconValleyVisualization,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "cyan",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div className="h-full border border-border rounded-lg overflow-hidden hover:border-white/20 transition-colors">
        {/* Visualization */}
        <div className="relative bg-white/[0.02]">
          <Visualization />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Number */}
          <span className="text-sm text-muted-dark font-light">
            {service.number}
          </span>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-light text-foreground mt-2 group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-muted-dark mb-3">{service.subtitle}</p>

          {/* Description */}
          <p className="text-sm text-muted-light leading-relaxed">
            {service.description}
          </p>
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
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] mb-6 max-w-3xl"
        >
          <span className="text-foreground">Nuestros </span>
          <span className="text-elegant text-foreground">servicios.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted mb-12 max-w-2xl font-light"
        >
          Nuestra prioridad es aterrizar en implementación y resultado.
        </motion.p>

        {/* Services Grid */}
        <div className="space-y-12">
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-2">
              Servicios core
            </p>
            <p className="text-sm text-muted mb-6 max-w-2xl">
              Lo que siempre ejecutamos para asegurar implementación y adopción
              real.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-xs text-muted uppercase tracking-widest mb-2">
              Complementarios
            </p>
            <p className="text-sm text-muted mb-6 max-w-2xl">
              Activaciones y soporte adicional cuando el proyecto lo requiere.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
