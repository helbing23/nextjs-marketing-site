import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description: "Simple, honest pricing. Free to start, pay once for Pro features. No subscriptions, no seat fees.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
