import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "High-Altitude Roads",
  description:
    "Specialised execution of high-altitude and mountain roads. J&K, Himachal Pradesh, Uttarakhand, Arunachal Pradesh, Manipur.",
};

export default function HighAltitudeRoadsPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight mt-4">
            High-Altitude Roads
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            DRB has built a strong reputation in high-altitude and mountainous terrain. We execute roads in J&K, Himachal Pradesh, Uttarakhand, Arunachal Pradesh and Manipur—often in partnership with BRO, NHIDCL and state authorities, where weather, access and geology demand specialised planning and execution.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
          Capabilities
        </h2>
        <ul className="mt-6 space-y-4 text-[var(--concrete)] max-w-3xl">
          <li><strong className="text-[var(--navy)]">Terrain expertise</strong> — Cut-and-fill, hill-side roads, tunnelling support and slope stabilisation.</li>
          <li><strong className="text-[var(--navy)]">Weather windows</strong> — Planning and resource deployment aligned to short working seasons.</li>
          <li><strong className="text-[var(--navy)]">Logistics</strong> — Mobilisation and supply chain in remote locations.</li>
          <li><strong className="text-[var(--navy)]">Safety</strong> — Rigorous safety protocols for high-altitude and border roads.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <Button href="/projects" variant="secondary">View projects</Button>
      </AnimatedSection>
    </>
  );
}
