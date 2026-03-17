import Link from "next/link";
import { Container } from "./Container";
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 font-heading text-base font-semibold text-text-primary"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded bg-accent text-xs font-bold text-white">
                  {SITE_CONFIG.name.charAt(0)}
                </span>
                <span>{SITE_CONFIG.name}</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {SITE_CONFIG.tagline}
              </p>
              {/* Social links */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-text-tertiary transition-colors hover:text-text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-tertiary transition-colors hover:text-text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-tertiary transition-colors hover:text-text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-text-tertiary">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary">
              Built with Next.js 15 · Tailwind v4 · shadcn/ui
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
