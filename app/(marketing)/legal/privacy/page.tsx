import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How we collect, use, and protect your data.",
  path: "/legal/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20">
      <Container>
        <div className="prose prose-invert mx-auto max-w-2xl">
          <h1 className="font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]">
            Privacy Policy
          </h1>
          <p className="text-[var(--color-text-tertiary)]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div className="mt-8 space-y-6 text-[var(--color-text-secondary)]">
            <p>
              {/* [CHANGE] Replace with real privacy policy */}
              This is a placeholder privacy policy. Replace with your actual
              privacy policy before launching.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
