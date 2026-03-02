"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PORTFOLIO = [
  {
    src: "/images/portfolio/hero-1.png",
    alt: "Heavy machinery at mountainous construction site",
    title: "Mountain earthmoving",
    tag: "Scale",
  },
  {
    src: "/images/portfolio/hero-2.png",
    alt: "Excavator on steep forested mountainside",
    title: "Steep terrain",
    tag: "Precision",
  },
  {
    src: "/images/portfolio/hero-3.png",
    alt: "Road construction through mountain terrain",
    title: "Highway through mountains",
    tag: "Infrastructure",
  },
  {
    src: "/images/portfolio/hero-4.png",
    alt: "High-altitude JCB excavator",
    title: "High-altitude execution",
    tag: "3,848m elevation",
  },
  {
    src: "/images/portfolio/hero-5.png",
    alt: "Road construction with gabion wall",
    title: "Road & retaining structures",
    tag: "Engineering",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ConstructionStrength() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--grey-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Portfolio
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)] mt-2">
            Construction strength in frame
          </h2>
          <p className="mt-4 text-[var(--concrete)]">
            From high-altitude roads to highways and earthmoving—see our machinery and projects in challenging terrain.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {/* Featured large cell */}
          <motion.div
            variants={item}
            className="sm:col-span-2 lg:row-span-2 relative group rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[380px] shadow-lg"
          >
            <Image
              src={PORTFOLIO[0].src}
              alt={PORTFOLIO[0].alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                {PORTFOLIO[0].tag}
              </span>
              <p className="font-display text-xl lg:text-2xl font-semibold mt-1">
                {PORTFOLIO[0].title}
              </p>
            </div>
          </motion.div>

          {/* Grid of four */}
          {PORTFOLIO.slice(1, 5).map((slide, i) => (
            <motion.div
              key={slide.src}
              variants={item}
              className="relative group rounded-xl overflow-hidden aspect-[4/3] shadow-md"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  {slide.tag}
                </span>
                <p className="font-display text-lg font-semibold text-white mt-0.5">
                  {slide.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
