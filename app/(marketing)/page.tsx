import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Integrations } from "@/components/sections/Integrations";
import { Founder } from "@/components/sections/Founder";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Integrations />
      <Founder />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
