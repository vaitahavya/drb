import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Maintenance & Asset Management",
  description:
    "Long-term maintenance and asset management for roads and built infrastructure. O&M contracts and lifecycle support.",
};

export default function MaintenancePage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight mt-4">
            Maintenance & Asset Management
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            Beyond construction, we offer maintenance and asset management for roads and irrigation assets. Our O&M approach is systematic—periodic inspection, preventive maintenance and timely repairs—so that infrastructure performs over its design life.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Services
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Road maintenance</strong> — Pavement repair, crack sealing, resurfacing.</li>
          <li><strong className="text-[var(--navy)]">Drainage & structures</strong> — Cleaning, repair and strengthening.</li>
          <li><strong className="text-[var(--navy)]">Irrigation assets</strong> — Canals, gates and allied O&M.</li>
          <li><strong className="text-[var(--navy)]">Reporting</strong> — Condition surveys and compliance reporting for authorities.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <Button href="/contact" variant="secondary">Discuss O&M requirements</Button>
      </AnimatedSection>
    </>
  );
}
