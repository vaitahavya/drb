import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";
import { StaggerGrid } from "@/components/StaggerGrid";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { ConstructionStrength } from "@/components/ConstructionStrength";

const snapshot = [
  { value: "17+", label: "Years operational" },
  { value: "25+", label: "Projects" },
  { value: "5", label: "States" },
  { value: "80+", label: "Machinery" },
];

const expertiseHighlights = [
  {
    title: "Highway & Road Construction",
    href: "/expertise/highway-road-construction",
    brief: "Full-spectrum road construction from planning to delivery.",
  },
  {
    title: "EPC Projects",
    href: "/expertise/epc-projects",
    brief: "Engineering, procurement and construction with single-point accountability.",
  },
  {
    title: "High-Altitude Roads",
    href: "/expertise/high-altitude-roads",
    brief: "Specialised execution in challenging terrain—J&K, Himachal, Uttarakhand.",
  },
  {
    title: "Irrigation Infrastructure",
    href: "/expertise/irrigation",
    brief: "Canals, dams and water infrastructure with proven delivery.",
  },
  {
    title: "Maintenance & Asset Management",
    href: "/expertise/maintenance",
    brief: "Long-term maintenance and asset management for built infrastructure.",
  },
];

const ongoingProjects = [
  { title: "MoRTH blackspot ID JK-02-005 at Barnoti & other blackspots on NH-44, UT of J&K (EPC)", region: "NHAI, Jammu", href: "/projects" },
  { title: "4-Lane with Paved Shoulder: Jammu-Akhnoor road NH-144A, Ganesh Vihar to Khati Chowk (20.350 Km)", region: "NHIDCL, Jammu", href: "/projects" },
];

const completedProjects = [
  { title: "Balipara-Charduar-Tawang Road NH13 for BRO", region: "Arunachal Pradesh", image: "/images/projects/sella-pass-nh13-bro-arunachal-1.png" },
  { title: "Delhi Amritsar Katra Expressway under Bharatmala Pariyojna", region: "UT of J&K", image: "/images/projects/delhi-amritsar-katra-bharatmala-1.png" },
  { title: "Pakke-Seijosa-Itakhola Road (62.0 Km)", region: "Arunachal Pradesh", image: "/images/projects/pakke-seijosa-itakhola-arunachal-1.png" },
  { title: "Construction of Trans Arunachal Highway NH 229", region: "Arunachal Pradesh", image: "/images/projects/trans-arunachal-nh229-1.png" },
  { title: "Construction of Imphal Kangchup-Tamenglong Road", region: "Manipur", image: "/images/portfolio/hero-2.png" },
  { title: "Uttarakhand Helang Gabion Protection wall", region: "Uttarakhand", image: "/images/portfolio/hero-5.png" },
  { title: "Kiratpur to Ner-chowk of NH-21", region: "Himachal Pradesh", image: "/images/projects/kiratpur-nh214-hp-1.png" },
  { title: "BRO Road Construction Project, Arunachal Pradesh", region: "Arunachal Pradesh", image: "/images/portfolio/hero-3.png" },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "DRB Infrastructure Pvt. Ltd.—Indian infrastructure & road construction. High-altitude roads, highways, irrigation, EPC. Planning, execution & maintenance. No job too colossal. No job too minute.",
  openGraph: {
    title: "DRB Infrastructure Pvt. Ltd. | Roads, EPC & Infrastructure",
    description:
      "Leading Indian infrastructure & road construction company. High-altitude roads, highways, irrigation, EPC.",
    url: "https://www.drbipl.com",
  },
  alternates: { canonical: "https://www.drbipl.com/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ConstructionStrength />

      {/* Company snapshot */}
      <AnimatedSection variant="grey" stagger>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {snapshot.map(({ value, label }) => (
            <AnimatedItem key={label}>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">{value}</p>
                <p className="mt-1 text-[var(--concrete)]">{label}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Core expertise */}
      <AnimatedSection>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">
          Core expertise
        </h2>
        <p className="mt-4 text-lg text-[var(--concrete)] max-w-2xl">
          From highways to high-altitude roads and irrigation, we deliver with engineering clarity and accountability.
        </p>
        <StaggerGrid className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseHighlights.map(({ title, href, brief }) => (
            <AnimatedItem key={href}>
              <Link
                href={href}
                className="block p-6 rounded-lg border border-[var(--grey-200)] hover:border-[var(--steel)] hover:shadow-md transition-all group"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--steel)]">
                  {title}
                </h3>
                <p className="mt-2 text-[var(--concrete)]">{brief}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[var(--steel)]">
                  Learn more →
                </span>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerGrid>
        <div className="mt-10">
          <Button href="/expertise" variant="outline">
            View all expertise
          </Button>
        </div>
      </AnimatedSection>

      {/* Key projects under execution */}
      <AnimatedSection variant="grey" stagger>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">
            Key projects under execution
          </h2>
          <span className="inline-flex items-center rounded-full bg-[var(--accent)]/15 px-3 py-1 text-sm font-semibold text-[var(--accent)]">
            Ongoing
          </span>
        </div>
        <p className="mt-4 text-lg text-[var(--concrete)] max-w-2xl">
          We are currently providing our services for projects under NHAI and NHIDCL in the UT of J&K.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ongoingProjects.map(({ title, region, href }) => (
            <AnimatedItem key={title}>
              <Link
                href={href}
                className="group block rounded-lg overflow-hidden border border-[var(--grey-200)] bg-white hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative bg-[var(--grey-100)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--concrete)]">Under execution</span>
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-semibold text-white">
                    Ongoing
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[var(--navy)] group-hover:text-[var(--steel)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--concrete)]">{region}</p>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/projects" variant="outline">
            View all projects
          </Button>
        </div>
      </AnimatedSection>

      {/* Major works completed */}
      <AnimatedSection variant="grey" stagger>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">
          Major works completed
        </h2>
        <p className="mt-4 text-lg text-[var(--concrete)] max-w-2xl">
          Our expertise services were provided in many successful constructions around India—BRO, NHAI, NHIDCL and tier-1 EPC partners.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map(({ title, region, image }) => (
            <AnimatedItem key={title}>
              <Link
                href="/projects#completed"
                className="group block rounded-lg overflow-hidden border border-[var(--grey-200)] bg-white hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative bg-[var(--grey-200)] flex items-center justify-center">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[var(--navy)] group-hover:text-[var(--steel)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--concrete)]">{region}</p>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/projects#completed" variant="outline">
            View full list of major works completed
          </Button>
        </div>
      </AnimatedSection>

      {/* Vision & mission */}
      <AnimatedSection stagger>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedItem>
            <div>
              <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
                Vision
              </h2>
              <p className="mt-4 text-[var(--concrete)] leading-relaxed">
                To be a trusted name in Indian infrastructure—delivering projects that stand the test of time, with ethics and engineering excellence at the core.
              </p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div>
              <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">
                Mission
              </h2>
              <p className="mt-4 text-[var(--concrete)] leading-relaxed">
                Execute every project with precision, safety and accountability. Build long-term partnerships with authorities and EPC players through consistent delivery.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Leadership preview */}
      <AnimatedSection variant="grey" stagger>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">
          Leadership
        </h2>
        <p className="mt-4 text-lg text-[var(--concrete)] max-w-2xl">
          Founded and led by professionals with deep experience in infrastructure execution and corporate governance.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-4xl">
          <AnimatedItem>
            <div>
              <p className="font-display text-xl font-semibold text-[var(--navy)]">Mr. Ramesh Babu D</p>
              <p className="text-[var(--concrete)]">Founder & CMD · 17+ years in infrastructure</p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div>
              <p className="font-display text-xl font-semibold text-[var(--navy)]">Mrs. Krupa Jyothi D</p>
              <p className="text-[var(--concrete)]">Co-Founder & Director · Corporate finance & legal</p>
            </div>
          </AnimatedItem>
        </div>
        <div className="mt-10">
          <Button href="/leadership" variant="outline">
            Meet the leadership
          </Button>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection variant="navy">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">
            Partner with DRB
          </h2>
          <p className="mt-4 text-white/85">
            Government authorities, EPC partners, JV and strategic partners—we are ready to discuss your next project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" className="bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
              Get in touch
            </Button>
            <Button href="/projects" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--navy)]">
              View our projects
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
