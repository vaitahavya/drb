"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  /** Optional custom delay in seconds (when used without stagger parent, use delay) */
  delay?: number;
}

export function AnimatedItem({ children, className = "", delay = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      transition={delay > 0 ? { delay, duration: 0.4, ease: "easeOut" } : undefined}
    >
      {children}
    </motion.div>
  );
}
