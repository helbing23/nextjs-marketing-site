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
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="prose prose-invert mx-auto max-w-2xl">
          <h1 className="font-heading text-h2 font-semibold text-text-primary">
            Terms of Service
          </h1>
          <p className="text-text-tertiary">
            {/* [CHANGE] Update this date when you publish your real terms */}
            Last updated: January 1, 2026
          </p>
          <div className="mt-8 space-y-6 text-text-secondary">
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
