import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using our service.",
  path: "/legal/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20">
      <Container>
        <div className="prose prose-invert mx-auto max-w-2xl">
          <h1 className="font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]">
            Terms of Service
          </h1>
          <p className="text-[var(--color-text-tertiary)]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div className="mt-8 space-y-6 text-[var(--color-text-secondary)]">
            <p>
              {/* [CHANGE] Replace with real terms of service */}
              This is a placeholder terms of service. Replace with your actual
              terms before launching.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
