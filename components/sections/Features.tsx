import { Container } from "@/components/layout/Container";
import {
  Zap,
  Shield,
  Globe,
  Palette,
  Code2,
  BarChart3,
} from "lucide-react";

// [CHANGE] Replace with real product features
const FEATURES = [
  {
    icon: Zap,
    title: "Next.js 15 App Router",
    description:
      "React Server Components by default. Every page is SSG or ISR. No unnecessary client-side JavaScript.",
  },
  {
    icon: Palette,
    title: "Complete Design System",
    description:
      "Every color, spacing, radius, and animation token pre-configured in globals.css. One file to rule them all.",
  },
  {
    icon: Globe,
    title: "SEO-ready out of the box",
    description:
      "Metadata factory, dynamic sitemap, JSON-LD structured data, canonical URLs — all wired up before you write a line.",
  },
  {
    icon: Code2,
    title: "TypeScript strict mode",
    description:
      "Full type safety throughout. No any, no shortcuts. The compiler catches errors before they reach production.",
  },
  {
    icon: Shield,
    title: "Security headers",
    description:
      "CSP, X-Frame-Options, and all recommended security headers pre-configured in next.config.ts.",
  },
  {
    icon: BarChart3,
    title: "Analytics & monitoring",
    description:
      "Vercel Analytics and Speed Insights integrated. PostHog and Crisp ready to activate with a single env var.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            {/* [CHANGE] Section label */}
            Features
          </p>
          <h2
            className="mt-3 text-balance font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Headline */}
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 text-pretty text-[var(--color-text-secondary)]">
            {/* [CHANGE] Description */}
            Built with the opinions of a senior engineer who&apos;s shipped
            dozens of marketing sites. Every decision is intentional.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-tertiary)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-muted)] transition-colors group-hover:bg-[var(--color-accent-muted)]">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3
                  className="font-heading text-base font-semibold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
