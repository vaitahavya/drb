"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";

const SLIDES = [
  { src: "/images/hero/hero-1.png", alt: "Heavy machinery and excavators at a mountainous construction site" },
  { src: "/images/hero/hero-2.png", alt: "L&T-Komatsu excavator on a steep forested mountainside" },
  { src: "/images/hero/hero-3.png", alt: "Road construction cutting through lush mountain terrain" },
  { src: "/images/hero/hero-4.png", alt: "JCB excavator at high altitude with cloud-filled valleys" },
  { src: "/images/hero/hero-5.png", alt: "Road construction with excavators and gabion retaining wall" },
];

const AUTOPLAY_MS = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((prev) => (i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, isPaused, next]);

  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-end text-white overflow-hidden"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Slide track */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/70 to-[var(--navy)]/30"
        aria-hidden
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-24 pt-32"
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-tight drop-shadow-sm">
          Infrastructure at scale. Execution with precision.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-sm">
          DRB Infrastructure Pvt. Ltd.—planning, execution and maintenance of roads, highways and irrigation. Pan-India presence. No job too colossal. No job too minute.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Partner With Us
          </Button>
        </div>
      </motion.div>

      {/* Prev / Next */}
      <div className="absolute bottom-24 right-4 sm:right-8 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
