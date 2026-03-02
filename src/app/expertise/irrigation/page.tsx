import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Irrigation Infrastructure",
  description:
    "Canals, dams and water infrastructure. Planning, execution and maintenance of irrigation projects.",
};

export default function IrrigationPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight mt-4">
            Irrigation Infrastructure
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            We plan, execute and maintain irrigation infrastructure—canals, canal lining, check dams, minor dams and related structures. Our work supports state irrigation departments and central schemes, with a focus on quality, durability and water efficiency.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Scope
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Canals & lining</strong> — Excavation, lining and rehabilitation.</li>
          <li><strong className="text-[var(--navy)]">Structures</strong> — Cross-drainage, head regulators, drop structures.</li>
          <li><strong className="text-[var(--navy)]">Dams & barrages</strong> — Earthwork, concrete and allied works.</li>
          <li><strong className="text-[var(--navy)]">Maintenance</strong> — Asset management and O&M support.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <Button href="/projects" variant="secondary">View projects</Button>
      </AnimatedSection>
    </>
  );
}
