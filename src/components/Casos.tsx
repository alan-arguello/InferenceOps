"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, MouseEvent, type ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

type AndeVisualizationProps = {
  liveLabel: string;
};

type CerebroVisualizationProps = {
  nodesLabel: string;
  edgesLabel: string;
};

type CloudSeguroVisualizationProps = {
  securedLabel: string;
};

type BlindCreatorVisualizationProps = {
  engagementLabel: string;
  metricLabels: string[];
};

type BunnyVisualizationProps = {
  inputLabel: string;
  processLabel: string;
  outputLabel: string;
};

type UniversidadVisualizationProps = {
  labels: string[];
};

// Premium industry-specific visualizations

// ANDE - Voice/Audio Waveform (Digital interaction)
function AndeVisualization({ liveLabel }: AndeVisualizationProps) {
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
        <span className="text-[9px] text-muted-dark font-mono">
          {liveLabel}
        </span>
      </div>
    </div>
  );
}

// Cerebro Labs - Neural Network Graph
function CerebroVisualization({
  nodesLabel,
  edgesLabel,
}: CerebroVisualizationProps) {
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
          <span className="text-[9px] text-muted-dark font-mono">
            {nodesLabel}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-accent-dim/60" />
          <span className="text-[9px] text-muted-dark font-mono">
            {edgesLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

// CloudSeguro - Encrypted Data Stream
function CloudSeguroVisualization({ securedLabel }: CloudSeguroVisualizationProps) {
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
          {securedLabel}
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
function BlindCreatorVisualization({
  engagementLabel,
  metricLabels,
}: BlindCreatorVisualizationProps) {
  const metricValues = ["2.4M", "4.8%", "1.2K"];
  const metricChanges = ["+12%", "+0.6%", "+23%"];
  const metrics = metricValues.map((value, index) => ({
    label: metricLabels[index] ?? "",
    value,
    change: metricChanges[index] ?? "",
  }));

  return (
    <div className="relative w-full h-32 overflow-hidden p-4">
      <div className="h-full flex gap-3">
        {/* Engagement chart */}
        <div className="flex-1 flex flex-col">
          <div className="text-[8px] text-muted-dark font-mono mb-2 uppercase tracking-wider">
            {engagementLabel}
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
          {metrics.map((metric, i) => (
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
function BunnyVisualization({
  inputLabel,
  processLabel,
  outputLabel,
}: BunnyVisualizationProps) {
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
        <text
          x="20"
          y="55"
          fontSize="6"
          fill="rgba(165, 175, 188, 0.6)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {inputLabel}
        </text>
        <text
          x="100"
          y="75"
          fontSize="6"
          fill="rgba(165, 175, 188, 0.6)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {processLabel}
        </text>
        <text
          x="180"
          y="55"
          fontSize="6"
          fill="rgba(165, 175, 188, 0.6)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {outputLabel}
        </text>
      </svg>
    </div>
  );
}

// Universidad Continental - Innovation Metrics
function UniversidadVisualization({ labels }: UniversidadVisualizationProps) {
  const items = [
    { label: labels[0] ?? "", value: 24, max: 30 },
    { label: labels[1] ?? "", value: 8, max: 10 },
    { label: labels[2] ?? "", value: 92, max: 100, accent: true },
  ];

  return (
    <div className="relative w-full h-32 overflow-hidden p-4">
      <div className="h-full flex items-center justify-center gap-6">
        {/* Radial progress indicators */}
        {items.map((item, i) => (
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

type CaseEntry = {
  company: string;
  industry: string;
  context: string;
  action: string;
  result: string;
  url: string;
};

type CaseItem = CaseEntry & {
  visualization: ComponentType<any>;
  visualizationProps?: Record<string, unknown>;
};

function CaseCard({
  caseItem,
  index,
  isInView,
  labels,
}: {
  caseItem: CaseItem;
  index: number;
  isInView: boolean;
  labels: {
    context: string;
    action: string;
    result: string;
    visit: string;
  };
}) {
  const Visualization = caseItem.visualization;
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
    <motion.a
      href={caseItem.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group block"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="surface-card h-full cursor-pointer"
      >
        {/* Premium glow effect on border */}
        <div className="surface-card-glow" />
        {/* Shimmer effect */}
        <div className="surface-card-shimmer" />

        {/* Visualization */}
        <div className="viz-container relative">
          <Visualization {...(caseItem.visualizationProps ?? {})} />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base sm:text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300"
                >
                  {caseItem.company}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                >
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent"
                  />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                className="text-[11px] text-muted-dark mt-1 font-mono tracking-wide"
              >
                {caseItem.industry}
              </motion.p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-2 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + index * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-white/20" />
                <span className="text-[9px] text-muted-dark uppercase tracking-widest font-mono">
                  {labels.context}
                </span>
              </div>
              <p className="text-sm text-muted-light leading-relaxed line-clamp-2">
                {caseItem.context}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-accent/40" />
                <span className="text-[9px] text-muted-dark uppercase tracking-widest font-mono">
                  {labels.action}
                </span>
              </div>
              <p className="text-sm text-muted-light leading-relaxed line-clamp-2">
                {caseItem.action}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + index * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-px bg-accent" />
                <span className="text-[9px] text-accent uppercase tracking-widest font-mono">
                  {labels.result}
                </span>
              </div>
              <p className="text-sm text-foreground leading-relaxed line-clamp-2">
                {caseItem.result}
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
            className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between"
          >
            <span className="text-[10px] text-muted-dark group-hover:text-muted transition-colors duration-300 font-mono">
              {labels.visit}
            </span>
            <div className="icon-btn-premium w-6 h-6 rounded">
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Casos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Casos");
  const title = t.rich("title", {
    muted: (chunks) => <span className="text-elegant text-muted">{chunks}</span>,
  });
  const labels = t.raw("labels") as {
    context: string;
    action: string;
    result: string;
    visit: string;
  };
  const visuals = t.raw("visuals") as {
    ande: { live: string };
    cerebro: { nodes: string; edges: string };
    cloud: { secured: string };
    blind: { engagement: string; metrics: string[] };
    bunny: { input: string; process: string; output: string };
    universidad: { labels: string[] };
  };
  const casesData = t.raw("cases") as CaseEntry[];
  const caseVisualizations = [
    AndeVisualization,
    CerebroVisualization,
    CloudSeguroVisualization,
    BlindCreatorVisualization,
    BunnyVisualization,
    UniversidadVisualization,
  ];
  const caseVisualizationProps = [
    { liveLabel: visuals.ande.live },
    { nodesLabel: visuals.cerebro.nodes, edgesLabel: visuals.cerebro.edges },
    { securedLabel: visuals.cloud.secured },
    {
      engagementLabel: visuals.blind.engagement,
      metricLabels: visuals.blind.metrics,
    },
    {
      inputLabel: visuals.bunny.input,
      processLabel: visuals.bunny.process,
      outputLabel: visuals.bunny.output,
    },
    { labels: visuals.universidad.labels },
  ];
  const cases = casesData.map((caseItem, index) => ({
    ...caseItem,
    visualization: caseVisualizations[index],
    visualizationProps: caseVisualizationProps[index],
  }));

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
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted mb-10 sm:mb-12 max-w-2xl text-center sm:text-left mx-auto sm:mx-0 font-light"
        >
          {t("subtitle")}
        </motion.p>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index}
              caseItem={caseItem}
              index={index}
              isInView={isInView}
              labels={labels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
