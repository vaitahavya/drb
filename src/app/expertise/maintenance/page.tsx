import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] min-h-[180px] mt-4 bg-[var(--grey-200)]">
            <Image
              src="/images/portfolio/hero-5.png"
              alt="Road and retaining structures—maintenance and asset management"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
                Maintenance & Asset Management
              </h1>
            </div>
          </div>
          <p className="mt-8 text-lg text-[var(--concrete)] leading-relaxed max-w-3xl">
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
