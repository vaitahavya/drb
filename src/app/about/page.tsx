import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "About DRB",
  description:
    "DRB Infrastructure Pvt. Ltd. — incorporated 2008, operational since 2011. Our journey, philosophy, vision, mission and values.",
};

const values = [
  { title: "Engineering excellence", body: "Every project is executed with technical clarity and precision." },
  { title: "Ethics first", body: "Governance and integrity underpin all our engagements." },
  { title: "Partnership", body: "We build long-term relationships with authorities and EPC partners." },
  { title: "Safety", body: "Zero compromise on safety and compliance on site." },
];

export default function AboutPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            About DRB Infrastructure
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            DRB Infrastructure Pvt. Ltd. is a leading Indian infrastructure and road construction company. Incorporated in 2008 and operational since 2011, we specialise in planning, execution and maintenance of highways, high-altitude roads, irrigation and EPC projects across India.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
          Our journey
        </h2>
        <div className="mt-8 space-y-6 text-[var(--concrete)] max-w-3xl">
          <p>
            From our inception in 2008, we have grown into a trusted execution partner for national authorities and tier-1 EPC players. Our footprint spans J&K, Arunachal Pradesh, Manipur, Himachal Pradesh and Uttarakhand—including some of the most challenging high-altitude and border terrains.
          </p>
          <p>
            We believe in doing the job right: no marketing fluff, no over-promise. Our reputation rests on delivery—on time, within scope, with strong governance and safety standards.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
          Philosophy & ethics
        </h2>
        <p className="mt-4 text-[var(--concrete)] max-w-3xl leading-relaxed">
          Our tagline—<em>No job too colossal. No job too minute.</em>—reflects our approach: we take on large-scale infrastructure work with the same rigour we apply to every detail. Ethics and transparency are non-negotiable. We work with government bodies, PSUs and EPC partners who value accountability and long-term partnership.
        </p>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
          Vision & mission
        </h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <AnimatedItem>
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--navy)]">Vision</h3>
              <p className="mt-3 text-[var(--concrete)] leading-relaxed">
                To be a trusted name in Indian infrastructure—delivering projects that stand the test of time, with ethics and engineering excellence at the core.
              </p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--navy)]">Mission</h3>
              <p className="mt-3 text-[var(--concrete)] leading-relaxed">
                Execute every project with precision, safety and accountability. Build long-term partnerships with NHAI, NHIDCL, BRO, MoRTH and EPC players through consistent delivery.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection stagger>
        <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
          Core values
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ title, body }) => (
            <AnimatedItem key={title}>
              <li>
                <h3 className="font-display text-lg font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-[var(--concrete)] text-sm leading-relaxed">{body}</p>
              </li>
            </AnimatedItem>
          ))}
        </ul>
      </AnimatedSection>
    </>
  );
}
