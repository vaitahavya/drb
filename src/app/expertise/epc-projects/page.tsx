import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "EPC Projects",
  description:
    "Engineering, procurement and construction (EPC) with single-point accountability. Full project delivery for infrastructure and road projects.",
};

export default function EPCProjectsPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight mt-4">
            EPC Projects
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            We execute EPC (Engineering, Procurement & Construction) projects with single-point accountability. From design coordination and procurement to construction and commissioning, we deliver turnkey infrastructure solutions for authorities and JV partners.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Why EPC with DRB
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Single point of contact</strong> — One team for design, procurement and construction.</li>
          <li><strong className="text-[var(--navy)]">Proven delivery</strong> — Track record with NHAI, NHIDCL, BRO and MoRTH-linked projects.</li>
          <li><strong className="text-[var(--navy)]">Resource strength</strong> — Plant, machinery and skilled manpower for large-scale execution.</li>
          <li><strong className="text-[var(--navy)]">Governance</strong> — Strong project controls, reporting and compliance.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <Button href="/projects" variant="secondary">View projects</Button>
      </AnimatedSection>
    </>
  );
}
