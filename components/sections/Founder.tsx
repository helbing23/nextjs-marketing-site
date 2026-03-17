import { Container } from "@/components/layout/Container";
import { Twitter } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* [CHANGE] Replace with real founder/team quote and info */}
          <blockquote className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 md:p-12">
            {/* Decorative quote mark */}
            <span
              className="absolute left-8 top-6 font-heading text-7xl leading-none text-[var(--color-border-strong)]"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              className="relative mt-6 text-balance text-lg leading-relaxed text-[var(--color-text-primary)] md:text-xl"
            >
              {/* [CHANGE] Real founder quote — no fake testimonials */}
              I built this template after shipping 20+ marketing sites and
              getting tired of setting up the same boilerplate every time. Every
              decision here comes from real projects, real deadlines, and real
              production traffic.
            </p>

            <footer className="mt-8 flex items-center gap-4">
              {/* [CHANGE] Replace with actual founder photo via next/image */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
              <div>
                <p className="font-semibold text-[var(--color-text-primary)]">
                  {/* [CHANGE] Founder name */}
                  Your Name
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {/* [CHANGE] Title / company */}
                  Founder, [Company Name]
                </p>
              </div>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="ml-auto text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
