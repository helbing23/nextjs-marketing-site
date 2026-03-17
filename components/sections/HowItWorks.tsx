import { Container } from "@/components/layout/Container";
import { GitFork, Paintbrush, Rocket } from "lucide-react";

// [CHANGE] Replace with your product's actual steps
const STEPS = [
  {
    step: "01",
    icon: GitFork,
    title: "Clone and configure",
    description:
      "Clone the repo, update SITE_CONFIG in lib/constants.ts with your site name, URL, and copy. Done in 2 minutes.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Set your design tokens",
    description:
      "Pick an accent color preset in globals.css. All 50+ components instantly match your brand. No hunting for hardcoded values.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Deploy to Vercel",
    description:
      "Push to GitHub, connect Vercel, and your site is live on a global CDN in under 60 seconds. Zero DevOps required.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {/* [CHANGE] Section label */}
            How it works
          </p>
          <h2
            className="mt-3 text-balance font-heading text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Headline */}
            From clone to live in three steps
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-heading text-4xl font-semibold text-border-strong">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3
                  className="font-heading text-lg font-semibold text-text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
