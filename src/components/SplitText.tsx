"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  type?: "words" | "chars";
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  once = true,
  type = "words",
}: SplitTextProps) {
  const units = type === "chars" ? text.split("") : text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`} aria-label={text}>
      {units.map((unit, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {unit === " " ? "\u00A0" : unit}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
