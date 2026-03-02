import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at DRB Infrastructure—culture, safety, values. Join our team in infrastructure and road construction.",
};

export default function CareersPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Careers
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            We look for people who share our commitment to execution, safety and ethics. If you want to build a career in infrastructure and road construction, we would like to hear from you.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Culture & values
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Execution focus</strong> — We deliver. No job too colossal, no job too minute.</li>
          <li><strong className="text-[var(--navy)]">Safety first</strong> — Zero compromise on site safety and compliance.</li>
          <li><strong className="text-[var(--navy)]">Integrity</strong> — We operate with transparency and accountability.</li>
          <li><strong className="text-[var(--navy)]">Growth</strong> — We invest in our people and encourage technical and leadership development.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Open roles
        </h2>
        <p className="mt-4 text-[var(--concrete)] max-w-3xl">
          We hire across site execution, project management, engineering, and support functions. Open positions are updated as we scale. Send your profile and we will get back when there is a fit.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Apply / Send your profile
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
