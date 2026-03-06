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

const ONGOING_PROJECTS = [
  {
    id: "kiratpur-nh214-hp",
    title: "Kiratpur to Ner-Chowk NH-214 Lane Road Work",
    region: "Himachal Pradesh",
    authority: "NHAI",
    type: "Highway",
    images: [
      "/images/projects/kiratpur-nh214-hp-1.png",
      "/images/projects/kiratpur-nh214-hp-2.png",
    ],
  },
  {
    id: "pakke-seijosa-itakhola",
    title: "Pakke-Seijosa-Itakhola Road (62 km)",
    region: "Arunachal Pradesh",
    authority: "State / NHAI",
    type: "Highway",
    images: [
      "/images/projects/pakke-seijosa-itakhola-arunachal-1.png",
      "/images/projects/pakke-seijosa-itakhola-arunachal-2.png",
      "/images/projects/pakke-seijosa-itakhola-arunachal-4.png",
      "/images/projects/pakke-seijosa-itakhola-arunachal-13.png",
    ],
  },
  {
    id: "sella-pass-nh13-bro",
    title: "Sella Pass Balipara-Charduar-Tawang Road NH13",
    region: "Arunachal Pradesh",
    authority: "BRO",
    type: "Mountain",
    images: [
      "/images/projects/sella-pass-nh13-bro-arunachal-1.png",
      "/images/projects/sella-pass-nh13-bro-arunachal-2.png",
      "/images/projects/sella-pass-nh13-bro-arunachal-3.png",
      "/images/projects/sella-pass-nh13-bro-arunachal-4.png",
    ],
  },
  {
    id: "trans-arunachal-nh229",
    title: "Trans-Arunachal Highway NH-229",
    region: "Arunachal Pradesh",
    authority: "NHAI / MoRTH",
    type: "Highway",
    images: [
      "/images/projects/trans-arunachal-nh229-1.png",
      "/images/projects/trans-arunachal-nh229-2.png",
    ],
  },
  {
    id: "delhi-amritsar-katra-bharatmala",
    title: "Delhi–Amritsar–Katra Expressway (Bharatmala Pariyojana)",
    region: "Multi-state",
    authority: "NHAI",
    type: "Expressway",
    images: [
      "/images/projects/delhi-amritsar-katra-bharatmala-1.png",
      "/images/projects/delhi-amritsar-katra-bharatmala-2.png",
      "/images/projects/delhi-amritsar-katra-bharatmala-3.png",
      "/images/projects/delhi-amritsar-katra-bharatmala-4.png",
    ],
  },
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
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--navy)]">
            Ongoing projects
          </h2>
          <span className="inline-flex items-center rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Ongoing
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ONGOING_PROJECTS.map((project) => (
            <AnimatedItem key={project.id}>
              <article className="rounded-lg overflow-hidden bg-white border border-[var(--grey-200)] hover:shadow-md transition-shadow group">
                <div className="aspect-video relative bg-[var(--grey-200)] flex items-center justify-center">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} — site view`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-semibold text-white">
                    Ongoing
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--concrete)]">
                    <span>{project.type}</span>
                    <span>·</span>
                    <span>{project.authority}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-[var(--navy)] mt-2">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--concrete)]">{project.region}</p>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </div>
        <p className="mt-8 text-[var(--concrete)] text-center text-sm">
          For specific project enquiries,{" "}
          <Link href="/contact" className="text-[var(--steel)] font-medium hover:underline">
            contact us
          </Link>
          .
        </p>
      </AnimatedSection>
    </>
  );
}
