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
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="prose prose-invert mx-auto max-w-2xl">
          <h1 className="font-heading text-h2 font-semibold text-text-primary">
            Privacy Policy
          </h1>
          <p className="text-text-tertiary">
            {/* [CHANGE] Update this date when you publish your real policy */}
            Last updated: January 1, 2026
          </p>
          <div className="mt-8 space-y-6 text-text-secondary">
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
