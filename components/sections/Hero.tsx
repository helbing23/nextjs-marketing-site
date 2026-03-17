import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/shared/Badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-20 md:py-32">
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent opacity-[0.08] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <div className="mb-6 flex justify-center">
            <Badge variant="accent">
              <Sparkles className="h-3 w-3" />
              [CHANGE] Announcement or tagline badge
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-balance text-display font-semibold leading-tight tracking-tight text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Your main headline goes here */}
            The fastest way to{" "}
            <span className="text-accent">
              build and ship
            </span>{" "}
            your next product
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-body-lg text-text-secondary">
            {/* [CHANGE] 1-2 sentence description of your product's value prop */}
            A production-ready Next.js 15 marketing site template with a complete
            design system, all components pre-built, and ready to deploy in
            minutes. Replace copy, update colors, ship.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#pricing"
              className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-accent/30"
            >
              {/* [CHANGE] Primary CTA text */}
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 rounded-lg border border-border bg-bg-secondary px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-strong hover:bg-bg-tertiary"
            >
              {/* [CHANGE] Secondary CTA text */}
              See how it works
            </Link>
          </div>

          {/* Social proof chip */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-bg-primary"
                  style={{
                    background: `hsl(${(i * 60 + 270) % 360}, 60%, 55%)`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                {/* [CHANGE] Real number */}
                1,000+
              </span>{" "}
              developers use this template
            </p>
          </div>
        </div>

        {/* Hero mockup / graphic */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="rounded-xl border border-border bg-bg-secondary p-1 shadow-2xl shadow-black/40">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-1.5 rounded-t-lg border-b border-border bg-bg-tertiary px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
              <div className="mx-auto flex h-6 w-56 items-center rounded bg-bg-primary px-3">
                <span className="text-xs text-text-tertiary">
                  yoursite.com
                </span>
              </div>
            </div>
            {/* [CHANGE] Replace with a screenshot of your actual product/site */}
            <div className="flex h-64 items-center justify-center rounded-b-lg bg-linear-to-br from-bg-secondary to-bg-tertiary">
              <p className="text-sm text-text-tertiary">
                [CHANGE] Add a product screenshot here
              </p>
            </div>
          </div>

          {/* Floating accent cards */}
          <div className="absolute -left-4 top-1/4 hidden rounded-lg border border-border bg-bg-secondary p-3 shadow-lg lg:block">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span className="text-xs font-medium text-text-primary">
                Deploy successful
              </span>
            </div>
          </div>
          <div className="absolute -right-4 bottom-1/4 hidden rounded-lg border border-border bg-bg-secondary p-3 shadow-lg lg:block">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-medium text-text-primary">
                100 Lighthouse score
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
