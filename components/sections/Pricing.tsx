import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// [CHANGE] Replace with real pricing tiers, prices, and features
const TIERS = [
  {
    name: "Starter",
    price: "$0",
    period: "free forever",
    description: "Perfect for side projects and personal sites.",
    cta: "Get started",
    ctaHref: "#",
    featured: false,
    features: [
      "Full template source code",
      "Dark design system",
      "All section components",
      "Vercel deployment guide",
      "MIT license",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "one-time",
    description: "For teams shipping production marketing sites.",
    cta: "Get Pro",
    ctaHref: "#",
    featured: true,
    features: [
      "Everything in Starter",
      "Blog with MDX + CMS",
      "Programmatic SEO pages",
      "Email via Resend",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  {
    name: "Agency",
    price: "$199",
    period: "per year",
    description: "Unlimited client projects with white-label rights.",
    cta: "Get Agency",
    ctaHref: "#",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited client sites",
      "White-label license",
      "Figma design files",
      "Slack support channel",
      "Quarterly updates",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Pricing
          </p>
          <h2
            className="mt-3 text-balance font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-pretty text-[var(--color-text-secondary)]">
            {/* [CHANGE] Pricing description */}
            No seat fees, no hidden limits. Pay once, use forever.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                tier.featured
                  ? "border-[var(--color-accent)]/60 bg-[var(--color-bg-secondary)] shadow-lg shadow-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/20"
                  : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
              )}
            >
              {tier.featured && (
                <div className="mb-4 -mt-2 flex justify-center">
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3
                  className="font-heading text-lg font-semibold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span
                  className="font-heading text-4xl font-semibold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-[var(--color-text-tertiary)]">
                  / {tier.period}
                </span>
              </div>

              <Link
                href={tier.ctaHref}
                className={cn(
                  "mt-6 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors",
                  tier.featured
                    ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]"
                    : "border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-tertiary)]"
                )}
              >
                {tier.cta}
              </Link>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
