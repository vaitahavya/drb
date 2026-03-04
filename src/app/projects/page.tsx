import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "DRB Infrastructure projects—highways, expressways, mountain roads, irrigation. NHAI, NHIDCL, BRO, MoRTH, Bharatmala.",
};

const PROJECT_IMAGES = [
  "/images/portfolio/hero-3.png",
  "/images/portfolio/hero-4.png",
  "/images/portfolio/hero-5.png",
  "/images/portfolio/hero-1.png",
  "/images/portfolio/hero-2.png",
  "/images/portfolio/hero-3.png",
];

const projects = [
  { title: "Arunachal Pradesh – BRO Project", region: "Arunachal Pradesh", authority: "BRO", type: "Mountain" },
  { title: "Arunachal Pradesh – NHAI Project", region: "Arunachal Pradesh", authority: "NHAI", type: "Highway" },
  { title: "Uttarakhand – BRO Project", region: "Uttarakhand", authority: "BRO", type: "Mountain" },
  { title: "Arunachal Pradesh – BRO Project", region: "Arunachal Pradesh", authority: "BRO", type: "Mountain" },
  { title: "Arunachal Pradesh – NHAI Project", region: "Arunachal Pradesh", authority: "NHAI", type: "Highway" },
  { title: "Uttarakhand – BRO Project", region: "Uttarakhand", authority: "BRO", type: "Mountain" },
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
          {projects.map(({ title, region, authority, type }, i) => (
            <AnimatedItem key={`${region}-${authority}-${i}`}>
              <article className="rounded-lg overflow-hidden bg-white border border-[var(--grey-200)] hover:shadow-md transition-shadow group">
                <div className="aspect-video relative bg-[var(--grey-200)] overflow-hidden">
                  <Image
                    src={PROJECT_IMAGES[i]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
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
