"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "color-mix(in srgb, var(--color-primary) 8%, transparent)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mx", `${x}px`);
    divRef.current.style.setProperty("--my", `${y}px`);
    divRef.current.style.setProperty("--spotlight", spotlightColor);
  }, [spotlightColor]);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden border border-zinc-200 transition-all duration-300 hover:border-zinc-300 shadow-sm ${className}`}
      style={{
        background: `radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), var(--spotlight, ${spotlightColor}), transparent 75%), #ffffff`,
      }}
      whileHover={{ scale: 1.003, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
