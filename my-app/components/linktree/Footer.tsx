"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="text-center mt-8"
    >
      {/* <p className="text-[0.68rem] tracking-[0.2em] text-amber-700/60 font-light">
        cheska.online
      </p> */}
      <div
        className="flex items-center justify-center gap-2 mt-2 opacity-30"
        aria-hidden="true"
      >
        <span className="w-1 h-1 rounded-full bg-amber-700" />
        <span className="w-1 h-1 rounded-full bg-amber-700" />
        <span className="w-1 h-1 rounded-full bg-amber-700" />
      </div>
    </motion.footer>
  );
}
