"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/our-value-system", label: "Our Value System" },
      { href: "/leadership", label: "Leadership" },
      { href: "/DRB-PROFILE.pdf", label: "Download Profile", external: true },
    ],
  },
  {
    href: "/expertise",
    label: "Expertise",
    children: [
      { href: "/expertise/highway-road-construction", label: "Highway & Road Construction" },
      { href: "/expertise/epc-projects", label: "EPC Projects" },
      { href: "/expertise/high-altitude-roads", label: "High-Altitude Roads" },
      { href: "/expertise/irrigation", label: "Irrigation Infrastructure" },
      { href: "/expertise/maintenance", label: "Maintenance & Asset Management" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/plant-machinery", label: "Plant & Machinery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--grey-200)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-[var(--navy)]"
          >
            DRB Infrastructure
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="text-[var(--concrete)] hover:text-[var(--navy)] font-medium transition-colors py-2"
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </button>
                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 pt-1 w-56">
                      <div className="bg-white rounded border border-[var(--grey-200)] shadow-lg py-2">
                        {item.children.map((child) =>
                          "external" in child && child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-[var(--concrete)] hover:bg-[var(--grey-50)] hover:text-[var(--navy)]"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-[var(--concrete)] hover:bg-[var(--grey-50)] hover:text-[var(--navy)]"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors py-2 ${
                    pathname === item.href
                      ? "text-[var(--navy)]"
                      : "text-[var(--concrete)] hover:text-[var(--navy)]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 text-[var(--navy)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--grey-200)] py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <span className="block px-4 py-2 font-medium text-[var(--navy)]">{item.label}</span>
                    {item.children.map((child) =>
                      "external" in child && child.external ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 pl-8 pr-4 text-[var(--concrete)] hover:bg-[var(--grey-50)]"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 pl-8 pr-4 text-[var(--concrete)] hover:bg-[var(--grey-50)]"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2 font-medium ${
                      pathname === item.href ? "text-[var(--navy)]" : "text-[var(--concrete)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
