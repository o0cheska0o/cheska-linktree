"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  delay?: number;
}

export default function SectionDivider({ delay = 0 }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 my-5"
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/50" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
    </motion.div>
  );
}
