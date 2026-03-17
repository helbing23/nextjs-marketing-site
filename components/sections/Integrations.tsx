import { Container } from "@/components/layout/Container";

// [CHANGE] Replace with your actual integration logos
// Place logo files in public/images/integrations/ and use next/image
const INTEGRATIONS_ROW_1 = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Vercel",
  "Resend",
  "PostHog",
];

const INTEGRATIONS_ROW_2 = [
  "Lucide",
  "Zod",
  "React Hook Form",
  "MDX",
  "next-sitemap",
  "Zustand",
  "Shiki",
  "Recharts",
];

function IntegrationCard({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-bg-secondary px-4 py-2.5">
      {/* [CHANGE] Replace with next/image logo */}
      <div className="h-4 w-4 rounded bg-accent-muted" />
      <span className="whitespace-nowrap text-sm font-medium text-text-secondary">
        {name}
      </span>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Integrations
          </p>
          <h2
            className="mt-3 text-balance font-heading text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] Headline */}
            Powered by the best tools in the ecosystem
          </h2>
        </div>
      </Container>

      {/* Full-width marquee — extends beyond Container */}
      <div className="pause-marquee mt-12 overflow-hidden">
        {/* Row 1 — left */}
        <div className="marquee-fade mb-4 flex gap-4">
          <div className="animate-marquee flex min-w-full gap-4">
            {INTEGRATIONS_ROW_1.map((name) => (
              <IntegrationCard key={name} name={name} />
            ))}
          </div>
          <div className="animate-marquee flex min-w-full gap-4" aria-hidden="true">
            {INTEGRATIONS_ROW_1.map((name) => (
              <IntegrationCard key={`${name}-dup`} name={name} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="marquee-fade flex gap-4">
          <div className="animate-marquee-reverse flex min-w-full gap-4">
            {INTEGRATIONS_ROW_2.map((name) => (
              <IntegrationCard key={name} name={name} />
            ))}
          </div>
          <div className="animate-marquee-reverse flex min-w-full gap-4" aria-hidden="true">
            {INTEGRATIONS_ROW_2.map((name) => (
              <IntegrationCard key={`${name}-dup`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
