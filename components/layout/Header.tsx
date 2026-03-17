import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary transition-opacity hover:opacity-80"
            aria-label={`${SITE_CONFIG.name} — home`}
          >
            {/* [CHANGE] Replace with next/image logo once you have a logo file */}
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
              {SITE_CONFIG.name.charAt(0)}
            </span>
            <span>{SITE_CONFIG.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#pricing"
              className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover md:block"
            >
              Get Started
            </Link>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
