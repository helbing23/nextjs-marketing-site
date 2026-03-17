import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";
import { COMPETITORS, SITE_CONFIG } from "@/lib/constants";
import { Check, X } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(COMPARISON_DATA).map((competitor) => ({ competitor }));
}

// [CHANGE] Add real comparison data per competitor
const COMPARISON_DATA: Record<
  string,
  {
    name: string;
    tagline: string;
    features: { label: string; us: boolean; them: boolean }[];
  }
> = {
  "competitor-one": {
    name: "Competitor One",
    tagline: "Why developers choose us over Competitor One",
    features: [
      { label: "Next.js 15 App Router", us: true, them: false },
      { label: "Tailwind v4 design system", us: true, them: false },
      { label: "TypeScript strict mode", us: true, them: true },
      { label: "shadcn/ui components", us: true, them: false },
      { label: "MDX blog system", us: true, them: true },
      { label: "Vercel-ready deployment", us: true, them: true },
    ],
  },
  "competitor-two": {
    name: "Competitor Two",
    tagline: "Why developers choose us over Competitor Two",
    features: [
      { label: "Next.js 15 App Router", us: true, them: true },
      { label: "Tailwind v4 design system", us: true, them: false },
      { label: "Open source MIT license", us: true, them: false },
      { label: "One-time payment", us: true, them: false },
      { label: "No vendor lock-in", us: true, them: false },
      { label: "Self-hosted capable", us: true, them: true },
    ],
  },
  "competitor-three": {
    name: "Competitor Three",
    tagline: "Why developers choose us over Competitor Three",
    features: [
      { label: "Full source code access", us: true, them: false },
      { label: "TypeScript strict mode", us: true, them: false },
      { label: "shadcn/ui components", us: true, them: false },
      { label: "Free forever tier", us: true, them: false },
      { label: "Performance-first architecture", us: true, them: true },
      { label: "Active maintenance", us: true, them: true },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const data = COMPARISON_DATA[competitor];
  if (!data) notFound();

  return createMetadata({
    title: `${SITE_CONFIG.name} vs ${data.name}`,
    description: `${data.tagline}. Compare features, pricing, and developer experience side by side.`,
    path: `/compare/${competitor}`,
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const data = COMPARISON_DATA[competitor];
  if (!data) return notFound();

  return (
    <div className="bg-bg-primary">
      {/* Hero */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Comparison
            </p>
            <h1
              className="mt-3 font-heading text-h2 font-semibold text-text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {SITE_CONFIG.name} vs {data.name}
            </h1>
            <p className="mt-4 text-text-secondary">
              {data.tagline}
            </p>
          </div>

          {/* Comparison table */}
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-secondary">
                  <th className="px-6 py-4 text-left font-medium text-text-tertiary">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-accent">
                    {SITE_CONFIG.name}
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-text-secondary">
                    {data.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-bg-primary">
                {data.features.map((row) => (
                  <tr key={row.label}>
                    <td className="px-6 py-4 text-text-primary">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.us ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-error" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.them ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-error" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/#pricing"
              className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get {SITE_CONFIG.name} →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
