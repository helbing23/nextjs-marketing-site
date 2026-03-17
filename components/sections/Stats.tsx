import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

// [CHANGE] Replace with real, defensible stats
const STATS = [
  { value: 10000, suffix: "+", label: "Developers using this stack" },
  { value: 99, suffix: "%", label: "Lighthouse performance score" },
  { value: 5, suffix: "min", label: "Time to first deploy" },
  { value: 0, suffix: "", label: "Config files to touch" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <Container>
        <dl className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-10 text-center"
            >
              <dt className="order-2 mt-2 text-sm text-text-secondary">
                {stat.label}
              </dt>
              <dd
                className="order-1 font-heading text-4xl font-semibold text-text-primary"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
