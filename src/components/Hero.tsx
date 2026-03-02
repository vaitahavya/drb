"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end bg-[var(--navy)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/80 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-24 pt-32"
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-tight">
          Infrastructure at scale. Execution with precision.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
          DRB Infrastructure Pvt. Ltd.—planning, execution and maintenance of roads, highways and irrigation. Pan-India presence. No job too colossal. No job too minute.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Partner With Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
