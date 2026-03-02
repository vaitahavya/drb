import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/expertise" className="text-sm font-medium text-[var(--steel)] hover:underline">
            ← Expertise
          </Link>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] min-h-[180px] mt-4 bg-[var(--grey-200)]">
            <Image
              src="/images/portfolio/hero-4.png"
              alt="High-altitude road construction—JCB excavator at elevation"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
                High-Altitude Roads
              </h1>
            </div>
          </div>
          <p className="mt-8 text-lg text-[var(--concrete)] leading-relaxed max-w-3xl">
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
