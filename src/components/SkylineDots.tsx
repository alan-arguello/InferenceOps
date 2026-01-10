'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skylineImage = "/skyline/sf-night.jpg";

export default function SkylineDots() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="skyline-dots"
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 240" className="w-full h-full" role="presentation">
        <defs>
          <pattern id="skyline-dot" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="1.2" fill="rgba(124, 244, 216, 0.5)" />
          </pattern>
          <mask id="skyline-mask">
            <rect width="800" height="240" fill="black" />
            <rect x="0" y="190" width="800" height="50" fill="white" />
            {/* Bay Bridge */}
            <rect x="0" y="170" width="190" height="12" fill="white" />
            <rect x="28" y="115" width="22" height="55" fill="white" />
            <rect x="118" y="115" width="22" height="55" fill="white" />
            <path d="M0 170 Q40 120 80 170" stroke="white" strokeWidth="3" fill="none" />
            <path d="M80 170 Q120 120 160 170" stroke="white" strokeWidth="3" fill="none" />
            <path d="M20 170 L40 120 L60 170" stroke="white" strokeWidth="2" fill="none" />
            <path d="M110 170 L130 120 L150 170" stroke="white" strokeWidth="2" fill="none" />
            {/* Downtown cluster */}
            <rect x="205" y="150" width="30" height="40" fill="white" />
            <rect x="240" y="130" width="45" height="60" fill="white" />
            <rect x="290" y="100" width="55" height="90" fill="white" />
            <path
              d="M355 190 L355 120 L370 120 L370 105 L395 105 L395 120 L410 120 L410 190 Z"
              fill="white"
            />
            {/* Transamerica Pyramid */}
            <polygon points="395,65 365,190 425,190" fill="white" />
            <rect x="393" y="48" width="4" height="16" fill="white" />
            <rect x="430" y="140" width="40" height="50" fill="white" />
            <rect x="468" y="115" width="16" height="75" fill="white" />
            <rect x="471" y="100" width="10" height="15" fill="white" />
            {/* Salesforce Tower */}
            <polygon points="505,190 505,55 565,45 575,55 575,190" fill="white" />
            <rect x="585" y="110" width="40" height="80" fill="white" />
            <rect x="635" y="125" width="50" height="65" fill="white" />
            <rect x="700" y="120" width="35" height="70" fill="white" />
            <rect x="740" y="140" width="40" height="50" fill="white" />
          </mask>
        </defs>
        <image
          href={skylineImage}
          x="0"
          y="0"
          width="800"
          height="240"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#skyline-mask)"
          className="skyline-photo"
        />
        <rect
          width="800"
          height="240"
          fill="url(#skyline-dot)"
          mask="url(#skyline-mask)"
          className="skyline-dot-layer"
        />
      </svg>
    </motion.div>
  );
}
