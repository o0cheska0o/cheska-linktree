"use client";

import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import { LinkSection as LinkSectionType } from "@/types";

interface LinkSectionProps {
  section: LinkSectionType;
  startIndex: number;
}

export default function LinkSection({ section, startIndex }: LinkSectionProps) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: startIndex * 0.07 }}
        className="text-center text-[0.6rem] font-medium tracking-[0.22em] uppercase text-amber-700/70 mb-3"
      >
        {section.label}
      </motion.p>
      <div className="flex flex-col gap-2.5">
        {section.links.map((link, i) => (
          <LinkButton key={link.href} link={link} index={startIndex + i} />
        ))}
      </div>
    </div>
  );
}
