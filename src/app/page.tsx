import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";
import { StaggerGrid } from "@/components/StaggerGrid";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";

const snapshot = [
  { value: "17+", label: "Years operational" },
  { value: "50+", label: "Projects executed" },
  { value: "5", label: "States" },
  { value: "200+", label: "Machines" },
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

const featuredProjects = [
  { title: "NHAI Highway Project", region: "North India", href: "/projects" },
  { title: "NHIDCL Mountain Road", region: "J&K", href: "/projects" },
  { title: "BRO Strategic Road", region: "Arunachal Pradesh", href: "/projects" },
];

export default function Home() {
  return (
    <>
      <Hero />

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

      {/* Featured projects */}
      <AnimatedSection variant="grey" stagger>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--navy)]">
          Featured projects
        </h2>
        <p className="mt-4 text-lg text-[var(--concrete)] max-w-2xl">
          Delivered for NHAI, NHIDCL, BRO and tier-1 EPC partners across India.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map(({ title, region, href }) => (
            <AnimatedItem key={title}>
              <Link
                href={href}
                className="group block rounded-lg overflow-hidden border border-[var(--grey-200)] bg-white hover:shadow-lg transition-shadow"
              >
                <div
                  className="aspect-video bg-[var(--grey-200)]"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
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
          <Button href="/projects" variant="outline">
            View all projects
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
