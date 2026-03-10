import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "DRB Infrastructure projects—highways, expressways, mountain roads, irrigation. NHAI, NHIDCL, BRO, MoRTH, Bharatmala.",
  openGraph: {
    title: "Projects | DRB Infrastructure",
    description:
      "DRB Infrastructure project portfolio—highways, expressways, mountain roads, irrigation. NHAI, NHIDCL, BRO, Bharatmala.",
    url: "https://www.drbipl.com/projects",
  },
  alternates: { canonical: "https://www.drbipl.com/projects" },
};

const ONGOING_PROJECTS = [
  {
    id: "nhai-jk-blackspot",
    title: "Long Term Measures to the MoRTH identified blackspot ID JK-02-005 at Barnoti and additional measures to the other blackspots on NH-44 in the UT of J&K on EPC mode",
    region: "UT of J&K",
    authority: "NHAI",
    location: "Jammu",
  },
  {
    id: "nhidcl-jammu-akhnoor",
    title: "Up-gradation to 4-Lane with Paved Shoulder of Jammu-Akhnoor road section of NH-144A from Ganesh Vihar (Km 6.000) to Khati Chowk (Km 26.350) of 20.350 Km length in the state of Jammu and Kashmir on EPC basis Package-III",
    region: "Jammu and Kashmir",
    authority: "NHIDCL",
    location: "Jammu",
  },
];

const COMPLETED_PROJECTS = [
  {
    id: "balipara-charduar-tawang",
    title: "Balipara-Charduar-Tawang Road NH13 for BRO",
    region: "Arunachal Pradesh",
    principal: "Patel Engineering Limited",
    image: "/images/projects/sella-pass-nh13-bro-arunachal-1.png",
  },
  {
    id: "delhi-amritsar-katra",
    title: "Delhi Amritsar Katra Expressway under Bharatmala Pariyojna",
    region: "UT of J&K",
    principal: "Vishwa Samudra Engineering Pvt. Ltd.",
    image: "/images/projects/delhi-amritsar-katra-bharatmala-1.png",
  },
  {
    id: "pakke-seijosa-itakhola",
    title: "Pakke-Seijosa-Itakhola Road (62.0 Km)",
    region: "Arunachal Pradesh",
    principal: null,
    image: "/images/projects/pakke-seijosa-itakhola-arunachal-1.png",
  },
  {
    id: "trans-arunachal-nh229",
    title: "Construction of Trans Arunachal Highway NH 229",
    region: "Arunachal Pradesh",
    principal: "M/s Sushee Infra Pvt Ltd",
    image: "/images/projects/trans-arunachal-nh229-1.png",
  },
  {
    id: "imphal-kangchup-tamenglong",
    title: "Construction of Imphal Kangchup-Tamenglong Road",
    region: "Manipur",
    principal: "Hindustan Construction Company",
    image: "/images/portfolio/hero-2.png",
  },
  {
    id: "uttarakhand-helang-gabion",
    title: "Uttarakhand Helang Gabion Protection wall",
    region: "Uttarakhand",
    principal: "In relation to Maccaferri",
    image: "/images/portfolio/hero-5.png",
  },
  {
    id: "kiratpur-ner-chowk-nh21",
    title: "Kiratpur to Ner-chowk of NH-21",
    region: "Himachal Pradesh",
    principal: "IL&FS Engineering and Constructions Company Limited",
    image: "/images/projects/kiratpur-nh214-hp-1.png",
  },
  {
    id: "bro-arunachal",
    title: "BRO Road Construction Project, Arunachal Pradesh",
    region: "Arunachal Pradesh",
    principal: "Border Roads Organisation (BRO)",
    image: "/images/portfolio/hero-3.png",
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

      {/* Key projects under execution */}
      <AnimatedSection variant="grey" stagger>
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--navy)]">
            Key projects under execution
          </h2>
          <span className="inline-flex items-center rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Ongoing
          </span>
        </div>
        <p className="text-[var(--concrete)] max-w-3xl mb-8">
          We are currently providing our services for the following projects under NHAI and NHIDCL.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {ONGOING_PROJECTS.map((project) => (
            <AnimatedItem key={project.id}>
              <article className="rounded-lg overflow-hidden bg-white border border-[var(--grey-200)] hover:shadow-md transition-shadow">
                <div className="aspect-video relative bg-[var(--grey-100)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--concrete)]">Under execution</span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--concrete)]">
                    <span>{project.authority}</span>
                    <span>·</span>
                    <span>{project.location}</span>
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
      </AnimatedSection>

      {/* Major works completed */}
      <AnimatedSection stagger id="completed">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--navy)] mb-2">
          List of major works completed
        </h2>
        <p className="text-[var(--concrete)] max-w-3xl mb-8">
          Our expertise services were provided in many successful constructions around India.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLETED_PROJECTS.map((project) => (
            <AnimatedItem key={project.id}>
              <article className="rounded-lg overflow-hidden bg-white border border-[var(--grey-200)] hover:shadow-md transition-shadow group">
                <div className="aspect-video relative bg-[var(--grey-200)] flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.title} — completed`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--concrete)]">{project.region}</p>
                  {project.principal && (
                    <p className="mt-2 text-xs text-[var(--concrete)]">
                      Principal: {project.principal}
                    </p>
                  )}
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
