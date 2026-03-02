import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Highway & road construction, EPC projects, high-altitude roads, irrigation infrastructure, maintenance & asset management.",
};

const expertiseList = [
  { href: "/expertise/highway-road-construction", title: "Highway & Road Construction", brief: "Full-spectrum road construction from planning to delivery.", image: "/images/portfolio/hero-3.png" },
  { href: "/expertise/epc-projects", title: "EPC Projects", brief: "Engineering, procurement and construction with single-point accountability.", image: "/images/portfolio/hero-1.png" },
  { href: "/expertise/high-altitude-roads", title: "High-Altitude Roads", brief: "Specialised execution in challenging terrain.", image: "/images/portfolio/hero-4.png" },
  { href: "/expertise/irrigation", title: "Irrigation Infrastructure", brief: "Canals, dams and water infrastructure.", image: "/images/portfolio/hero-2.png" },
  { href: "/expertise/maintenance", title: "Maintenance & Asset Management", brief: "Long-term maintenance and asset management.", image: "/images/portfolio/hero-5.png" },
];

export default function ExpertisePage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Expertise
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            From highways to high-altitude roads and irrigation, we deliver with process-driven execution and technical clarity.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ listStyle: "none" }}>
          {expertiseList.map(({ href, title, brief, image }) => (
            <AnimatedItem key={href}>
              <li>
                <Link
                  href={href}
                  className="block rounded-lg bg-white border border-[var(--grey-200)] hover:border-[var(--steel)] hover:shadow-md transition-all group overflow-hidden"
                >
                  <div className="aspect-video relative bg-[var(--grey-200)] overflow-hidden">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-[var(--navy)] group-hover:text-[var(--steel)]">
                      {title}
                    </h2>
                    <p className="mt-2 text-[var(--concrete)]">{brief}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-[var(--steel)]">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </li>
            </AnimatedItem>
          ))}
        </ul>
      </AnimatedSection>
    </>
  );
}
