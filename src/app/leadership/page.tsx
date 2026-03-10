import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "DRB Infrastructure leadership—Mr. Ramesh Babu D (Founder & CMD), Mrs. Krupa Jyothi D (Co-Founder & Director). Governance and ethics.",
};

const leaders = [
  {
    name: "Mr. Ramesh Babu D",
    role: "Founder & CMD",
    bio: "Over 17 years in infrastructure execution, with deep experience in high-altitude roads, highways and irrigation. Leads strategy, execution and client relationships.",
  },
  {
    name: "Mrs. Krupa Jyothi D",
    role: "Co-Founder & Director",
    bio: "NALSAR graduate. Leads corporate finance, legal, equity and debt. Ensures governance, compliance and institutional partnerships.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Leadership
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            DRB is founded and led by professionals with hands-on experience in infrastructure execution and corporate governance. Ethics and accountability are at the core of our leadership.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <div className="grid gap-12 lg:grid-cols-2">
          {leaders.map(({ name, role, bio }) => (
            <AnimatedItem key={name}>
              <div className="rounded-lg border border-[var(--grey-200)] bg-white p-8">
                <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
                  {name}
                </h2>
                <p className="mt-1 text-[var(--steel)] font-medium">{role}</p>
                <p className="mt-4 text-[var(--concrete)] leading-relaxed">{bio}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Governance & ethics
        </h2>
        <p className="mt-4 text-[var(--concrete)] max-w-3xl leading-relaxed">
          We are committed to transparent governance, compliance with all applicable laws and ethical conduct in every engagement. Our board and leadership set the tone for accountability and long-term partnership with authorities and partners.
        </p>
      </AnimatedSection>
    </>
  );
}
