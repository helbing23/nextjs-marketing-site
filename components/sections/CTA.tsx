import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-bg-secondary px-8 py-16 text-center md:px-16">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-10 blur-3xl"
            aria-hidden="true"
          />

          <h2
            className="relative font-heading text-balance text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Final CTA headline */}
            Ready to ship your marketing site?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-text-secondary">
            {/* [CHANGE] Supporting copy */}
            Clone the repo, update your copy, deploy to Vercel. Your site is
            live before your coffee is cold.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#pricing"
              className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover"
            >
              {/* [CHANGE] CTA text */}
              Get the template
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="https://github.com/helbing23/nextjs-marketing-site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              View on GitHub
            </Link>
          </div>

          <p className="relative mt-6 text-xs text-text-tertiary">
            MIT licensed. No account required.
          </p>
        </div>
      </Container>
    </section>
  );
}
