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
        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedItem>
            <div>
              <h2 className="font-display text-xl font-semibold text-[var(--navy)]">
                Office
              </h2>
              <address className="mt-4 text-[var(--concrete)] not-italic leading-relaxed">
                DRB Infrastructure Pvt. Ltd.<br />
                [Office address to be updated]<br />
                India
              </address>
              <p className="mt-6">
                <span className="font-medium text-[var(--navy)]">Email:</span>{" "}
                <a href="mailto:info@drbinfrastructure.com" className="text-[var(--steel)] hover:underline">
                  info@drbinfrastructure.com
                </a>
              </p>
              <p className="mt-2">
                <span className="font-medium text-[var(--navy)]">Phone:</span>{" "}
                <a href="tel:+91" className="text-[var(--steel)] hover:underline">
                  [Phone to be updated]
                </a>
              </p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div>
              <h2 className="font-display text-xl font-semibold text-[var(--navy)]">
                Enquiry form
              </h2>
              <form
                action="#"
                method="post"
                className="mt-4 space-y-4"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--navy)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded border border-[var(--grey-300)] bg-white px-4 py-2 text-[var(--foreground)] focus:border-[var(--steel)] focus:ring-1 focus:ring-[var(--steel)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--navy)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded border border-[var(--grey-300)] bg-white px-4 py-2 text-[var(--foreground)] focus:border-[var(--steel)] focus:ring-1 focus:ring-[var(--steel)]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--navy)]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1 block w-full rounded border border-[var(--grey-300)] bg-white px-4 py-2 text-[var(--foreground)] focus:border-[var(--steel)] focus:ring-1 focus:ring-[var(--steel)]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--navy)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded border border-[var(--grey-300)] bg-white px-4 py-2 text-[var(--foreground)] focus:border-[var(--steel)] focus:ring-1 focus:ring-[var(--steel)]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-medium px-6 py-3 rounded bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Send message
                </button>
              </form>
              <p className="mt-4 text-sm text-[var(--concrete)]">
                Form submission can be wired to your email or API. Backend integration is left for you to add.
              </p>
            </div>
          </AnimatedItem>
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
        <h2 className="font-display text-xl font-semibold text-[var(--navy)] mt-12">
          Map
        </h2>
        <div className="mt-4 aspect-video max-w-4xl rounded-lg bg-[var(--grey-200)] flex items-center justify-center text-[var(--concrete)]">
          Map placeholder — integrate Google Maps or similar with your office coordinates.
        </div>
      </AnimatedSection>
    </>
  );
}
