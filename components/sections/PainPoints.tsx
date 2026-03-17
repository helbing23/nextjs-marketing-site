import { Container } from "@/components/layout/Container";
import { XCircle, CheckCircle2 } from "lucide-react";

// [CHANGE] Replace with real pain points your product solves
const PAINS = [
  {
    problem: "Spending weeks on boilerplate instead of building features",
    solution: "Ship a complete, production-ready site in hours, not weeks",
  },
  {
    problem: "Inconsistent design decisions slowing down development",
    solution: "A complete design system with every token pre-configured",
  },
  {
    problem: "SEO and performance as an afterthought that's hard to bolt on",
    solution: "Built-in metadata factory, sitemap, JSON-LD, and 100 Lighthouse",
  },
  {
    problem: "Choosing between dozens of conflicting libraries and patterns",
    solution: "Opinionated stack with zero configuration debates",
  },
];

export function PainPoints() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* [CHANGE] Section label */}
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The problem
          </p>
          <h2
            className="mt-3 text-balance font-heading text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Headline */}
            Most teams waste their first sprint on setup
          </h2>
          <p className="mt-4 text-pretty text-text-secondary">
            {/* [CHANGE] Description */}
            Every new project starts the same way — choosing libraries,
            configuring tools, debugging TypeScript, writing the same Header and
            Footer. This template eliminates that entirely.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4">
          {PAINS.map((item) => (
            <div
              key={item.problem}
              className="grid gap-4 rounded-xl border border-border bg-bg-secondary p-6 sm:grid-cols-2"
            >
              {/* Pain */}
              <div className="flex gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-error" />
                <p className="text-sm text-text-secondary line-through decoration-error/40">
                  {item.problem}
                </p>
              </div>
              {/* Solution */}
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <p className="text-sm font-medium text-text-primary">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
