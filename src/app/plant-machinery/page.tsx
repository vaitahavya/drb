import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Plant & Machinery",
  description:
    "DRB Infrastructure plant and machinery—earthmoving, compaction, paving and allied equipment. Capacity and execution strength.",
};

const categories = [
  {
    title: "Earthmoving",
    items: ["Excavators (20T–40T)", "Dumpers / tippers", "Dozers", "Loaders"],
  },
  {
    title: "Compaction & paving",
    items: ["Vibratory rollers", "WMM / GSB plants", "Hot mix plants", "Paver finishers"],
  },
  {
    title: "Drilling & crushing",
    items: ["Drilling rigs", "Crushers", "Batching plants"],
  },
  {
    title: "Support equipment",
    items: ["Water tankers", "Generator sets", "Survey & QC equipment"],
  },
];

export default function PlantMachineryPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Plant & Machinery
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            We maintain a large, modern fleet to support highway, EPC and irrigation projects. Equipment is deployed across sites with emphasis on availability, maintenance and safety.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)] mb-8">
          Equipment categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map(({ title, items }) => (
            <AnimatedItem key={title}>
              <div className="rounded-lg border border-[var(--grey-200)] bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--navy)]">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2 text-[var(--concrete)]">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-[var(--concrete)] max-w-3xl">
          Our fleet is regularly upgraded and maintained to meet project schedules and quality standards. For detailed capacity and make enquiries, please get in touch.
        </p>
      </AnimatedSection>
    </>
  );
}
