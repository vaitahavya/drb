"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Optional background: default | navy | grey */
  variant?: "default" | "navy" | "grey";
  /** Inner max-width wrapper */
  narrow?: boolean;
  /** Stagger children (use with AnimatedItem) */
  stagger?: boolean;
  /** Reduce motion: skip animation */
  reduceMotion?: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

export function AnimatedSection({
  children,
  className = "",
  id,
  variant = "default",
  narrow = false,
  stagger = false,
  reduceMotion = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isReduced = reduceMotion;

  const bg =
    variant === "navy"
      ? "bg-[var(--navy)] text-white"
      : variant === "grey"
        ? "bg-[var(--grey-50)]"
        : "";

  if (isReduced) {
    return (
      <section id={id} className={`py-16 lg:py-24 ${bg} ${className}`}>
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>
          {children}
        </div>
      </section>
    );
  }

  const innerClass = `mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-4xl" : "max-w-7xl"}`;

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className={`py-16 lg:py-24 ${bg} ${className}`}
    >
      <div className={innerClass}>
        {stagger ? (
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="contents"
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </motion.section>
  );
}
