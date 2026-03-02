import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "DRB Infrastructure projects—highways, expressways, mountain roads, irrigation. NHAI, NHIDCL, BRO, MoRTH, Bharatmala.",
};

const projects = [
  { title: "NHAI Highway Package", region: "North India", authority: "NHAI", type: "Highway" },
  { title: "NHIDCL Mountain Road", region: "J&K", authority: "NHIDCL", type: "Mountain" },
  { title: "BRO Strategic Road", region: "Arunachal Pradesh", authority: "BRO", type: "Mountain" },
  { title: "State Highway Upgradation", region: "Himachal Pradesh", authority: "State PWD", type: "Highway" },
  { title: "Irrigation Canal Package", region: "Uttarakhand", authority: "State Irrigation", type: "Irrigation" },
  { title: "Bharatmala Link Road", region: "Manipur", authority: "NHAI", type: "Expressway" },
];

export default function ProjectsPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Projects
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            Our project portfolio spans highways, expressways, high-altitude roads and irrigation—delivered for NHAI, NHIDCL, BRO, MoRTH and tier-1 EPC partners across India.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, region, authority, type }) => (
            <AnimatedItem key={title}>
              <article className="rounded-lg overflow-hidden bg-white border border-[var(--grey-200)] hover:shadow-md transition-shadow">
                <div
                  className="aspect-video bg-[var(--grey-200)]"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--concrete)]">
                    <span>{type}</span>
                    <span>·</span>
                    <span>{authority}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-[var(--navy)] mt-2">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--concrete)]">{region}</p>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </div>
        <p className="mt-8 text-[var(--concrete)] text-center text-sm">
          Filter by region, authority and type coming soon. For specific project enquiries,{" "}
          <Link href="/contact" className="text-[var(--steel)] font-medium hover:underline">
            contact us
          </Link>
          .
        </p>
      </AnimatedSection>
    </>
  );
}
