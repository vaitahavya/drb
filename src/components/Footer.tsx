import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold">DRB Infrastructure Pvt. Ltd.</p>
            <p className="mt-2 text-sm text-white/80 max-w-md">
              Planning, execution & maintenance. High-altitude roads, highways, irrigation, EPC projects. Pan-India presence.
            </p>
            <p className="mt-4 text-sm text-white/70 italic">No job too colossal. No job too minute.</p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/about/our-value-system" className="hover:text-white transition-colors">Our Value System</Link></li>
              <li><Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/plant-machinery" className="hover:text-white transition-colors">Plant & Machinery</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><a href="/DRB-PROFILE.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Download Profile</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Contact</h3>
            <address className="mt-4 text-sm text-white/80 not-italic leading-relaxed">
              Plot No. 10, HIG Huda Enclave, Road No. 2,<br />
              Banjara Hills, Hyderabad – 500034<br />
              <a href="tel:+9104046035835" className="hover:text-white transition-colors">040-4603 5835</a><br />
              <a href="mailto:info@drbipl.com" className="hover:text-white transition-colors">info@drbipl.com</a>
            </address>
            <p className="mt-2 text-xs text-white/60">CIN: U45400TG2008PTC062356</p>
            <p className="mt-2">
              <Link href="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                View map & enquiry form →
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-sm text-white/60">
          <p>© {new Date().getFullYear()} DRB Infrastructure Pvt. Ltd. (CIN: U45400TG2008PTC062356). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
