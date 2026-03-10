import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedItem } from "@/components/AnimatedItem";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DRB Infrastructure Pvt. Ltd.—office address, email, phone. Get in touch for partnerships and project enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <AnimatedSection className="pt-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight">
            Contact
          </h1>
          <p className="mt-6 text-lg text-[var(--concrete)] leading-relaxed">
            For partnership enquiries, project discussions or general correspondence, reach out to us at the details below.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="grey" stagger>
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-[var(--grey-200)] bg-white shadow-sm overflow-hidden">
            <div className="p-8 lg:p-10 space-y-8">
              <AnimatedItem>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--steel)]">
                    Office
                  </p>
                  <p className="font-display text-lg font-semibold text-[var(--navy)] mt-1">
                    DRB Infrastructure Pvt. Ltd.
                  </p>
                  <address className="mt-3 text-[var(--concrete)] not-italic leading-relaxed">
                    Plot No. 10, HIG Huda Enclave, Road No. 2,<br />
                    Banjara Hills, Hyderabad – 500034
                  </address>
                </div>
              </AnimatedItem>
              <div className="h-px bg-[var(--grey-200)]" aria-hidden />
              <AnimatedItem>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--steel)] w-20 shrink-0">
                    Landline
                  </p>
                  <a
                    href="tel:+9104046035835"
                    className="text-lg text-[var(--navy)] font-medium hover:text-[var(--accent)] transition-colors"
                  >
                    040-4603 5835
                  </a>
                </div>
              </AnimatedItem>
              <div className="h-px bg-[var(--grey-200)]" aria-hidden />
              <AnimatedItem>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--steel)] w-20 shrink-0">
                    Email
                  </p>
                  <a
                    href="mailto:info@drbipl.com"
                    className="text-lg text-[var(--navy)] font-medium hover:text-[var(--accent)] transition-colors break-all"
                  >
                    info@drbipl.com
                  </a>
                </div>
              </AnimatedItem>
              <div className="h-px bg-[var(--grey-200)]" aria-hidden />
              <AnimatedItem>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--steel)]">
                  CIN
                </p>
                <p className="mt-1 text-[var(--concrete)] font-mono text-sm">
                  U45400TG2008PTC062356
                </p>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-xl font-semibold text-[var(--navy)]">
          Our work
        </h2>
        <p className="mt-2 text-[var(--concrete)] max-w-2xl">
          Building infrastructure across India—from highways to high-altitude roads.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {["/images/portfolio/hero-1.png", "/images/portfolio/hero-2.png", "/images/portfolio/hero-3.png", "/images/portfolio/hero-4.png", "/images/portfolio/hero-5.png"].map((src, i) => (
            <div key={src} className="relative aspect-video rounded-lg overflow-hidden bg-[var(--grey-200)]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
