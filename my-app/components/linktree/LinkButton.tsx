"use client";

import { motion } from "framer-motion";
import { LinkItem } from "@/types";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

export default function LinkButton({ link, index }: LinkButtonProps) {
  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      style={{ cursor: "pointer" }}
      className="group flex items-center gap-3.5 px-4 py-3.5 no-underline rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_2px_16px_rgba(180,130,80,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] hover:bg-white/60 hover:border-amber-200/70 hover:shadow-[0_6px_28px_rgba(180,130,80,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors duration-300 relative overflow-hidden"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 55%)",
        }}
      />
      <span
        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-white/50 text-[18px] ${link.iconColor}`}
      >
        <i className={`ti ti-${link.icon}`} aria-hidden="true" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-serif text-[1.02rem] font-medium text-stone-800 tracking-wide leading-tight">
          {link.title}
        </span>
        <span className="block text-[0.7rem] font-light text-amber-800/60 tracking-wide mt-0.5">
          {link.subtitle}
        </span>
      </span>
      <i
        className="ti ti-chevron-right text-amber-600/50 text-[15px] flex-shrink-0 transition-all duration-200 group-hover:text-amber-600/90 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </motion.a>
  );
}
