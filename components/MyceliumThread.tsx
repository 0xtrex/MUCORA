"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  className?: string;
  color?: string;
  vertical?: boolean;
};

/**
 * MUCORA's signature motif: a branching mycelium thread that draws itself
 * in as it enters the viewport, echoing the underground fungal network the
 * brand is named for. Used sparingly as a connective device between sections.
 */
export default function MyceliumThread({ className = "", color = "#2E4B3B", vertical = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const paths = vertical
    ? [
        "M100 0 C100 40 60 40 60 80 C60 120 100 120 100 160 C100 200 140 200 140 240 C140 280 100 280 100 320",
        "M100 40 C130 55 150 60 168 90",
        "M100 120 C70 135 45 145 20 170",
        "M100 200 C130 215 150 225 172 255",
      ]
    : [
        "M0 60 C40 60 40 20 80 20 C120 20 120 60 160 60 C200 60 200 20 240 20 C280 20 280 60 320 60",
        "M80 20 C90 -6 100 -14 120 -20",
        "M160 60 C170 86 180 94 200 100",
      ];

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={vertical ? "0 0 200 320" : "0 0 320 100"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={color}
            strokeWidth={i === 0 ? 1.6 : 1}
            strokeLinecap="round"
            opacity={i === 0 ? 0.5 : 0.3}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.8, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}
