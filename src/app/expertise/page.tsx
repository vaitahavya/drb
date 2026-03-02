import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Highway & road construction, EPC projects, high-altitude roads, irrigation infrastructure, maintenance & asset management.",
};

const expertiseList = [
  { href: "/expertise/highway-road-construction", title: "Highway & Road Construction", brief: "Full-spectrum road construction from planning to delivery." },
  { href: "/expertise/epc-projects", title: "EPC Projects", brief: "Engineering, procurement and construction with single-point accountability." },
  { href: "/expertise/high-altitude-roads", title: "High-Altitude Roads", brief: "Specialised execution in challenging terrain." },
  { href: "/expertise/irrigation", title: "Irrigation Infrastructure", brief: "Canals, dams and water infrastructure." },
  { href: "/expertise/maintenance", title: "Maintenance & Asset Management", brief: "Long-term maintenance and asset management." },
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
          {expertiseList.map(({ href, title, brief }) => (
            <AnimatedItem key={href}>
              <li>
                <Link
                  href={href}
                  className="block p-6 rounded-lg bg-white border border-[var(--grey-200)] hover:border-[var(--steel)] hover:shadow-md transition-all group"
                >
                  <h2 className="font-display text-xl font-semibold text-[var(--navy)] group-hover:text-[var(--steel)]">
                    {title}
                  </h2>
                  <p className="mt-2 text-[var(--concrete)]">{brief}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-[var(--steel)]">
                    Learn more →
                  </span>
                </Link>
              </li>
            </AnimatedItem>
          ))}
        </ul>
      </AnimatedSection>
    </>
  );
}
