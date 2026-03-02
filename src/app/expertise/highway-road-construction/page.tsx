import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Highway & Road Construction",
  description:
    "Full-spectrum highway and road construction—planning, execution and delivery. NHAI, NHIDCL, Bharatmala and state highway projects.",
};

export default function HighwayRoadPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] min-h-[180px] mt-4 bg-[var(--grey-200)]">
            <Image
              src="/images/portfolio/hero-3.png"
              alt="Highway and road construction through mountain terrain"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
                Highway & Road Construction
              </h1>
            </div>
          </div>
          <p className="mt-8 text-lg text-[var(--concrete)] leading-relaxed max-w-3xl">
            We deliver end-to-end highway and road construction—from planning and design support to execution and handover. Our experience spans national highways, state highways and expressways for NHAI, NHIDCL and state authorities.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Scope & process
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Earthwork & grading</strong> — Bulk excavation, filling, compaction to specified standards.</li>
          <li><strong className="text-[var(--navy)]">Pavement layers</strong> — Sub-base, base and wearing course with quality control.</li>
          <li><strong className="text-[var(--navy)]">Drainage & structures</strong> — Culverts, minor bridges, retaining structures.</li>
          <li><strong className="text-[var(--navy)]">Safety & signage</strong> — Barricading, signages and traffic management during execution.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-[var(--concrete)] max-w-3xl">
          We work as main contractor or in partnership with tier-1 EPC players. Our machinery fleet and site management are geared for large-scale linear projects and tight schedules.
        </p>
        <div className="mt-8">
          <Button href="/projects" variant="secondary">View projects</Button>
        </div>
      </AnimatedSection>
    </>
  );
}
