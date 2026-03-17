import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";
import { USE_CASES, SITE_CONFIG } from "@/lib/constants";

export async function generateStaticParams() {
  return USE_CASES.map((usecase) => ({ usecase }));
}

// [CHANGE] Add real use case data
const USE_CASE_DATA: Record<
  string,
  { title: string; description: string; body: string }
> = {
  "use-case-one": {
    title: "For SaaS marketing sites",
    description: "The fastest way to launch a high-converting SaaS landing page.",
    body: "[CHANGE] Replace with real use case content describing how your product fits this specific audience.",
  },
  "use-case-two": {
    title: "For indie developers",
    description: "Ship your side project's marketing site in an afternoon.",
    body: "[CHANGE] Replace with real use case content describing how your product fits this specific audience.",
  },
  "use-case-three": {
    title: "For digital agencies",
    description: "A reusable client site system that scales with your portfolio.",
    body: "[CHANGE] Replace with real use case content describing how your product fits this specific audience.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ usecase: string }>;
}): Promise<Metadata> {
  const { usecase } = await params;
  const data = USE_CASE_DATA[usecase];
  if (!data) return {};

  return createMetadata({
    title: `${SITE_CONFIG.name} ${data.title}`,
    description: data.description,
    path: `/use-case/${usecase}`,
  });
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ usecase: string }>;
}) {
  const { usecase } = await params;
  const data = USE_CASE_DATA[usecase];
  if (!data) notFound();

  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Use case
          </p>
          <h1
            className="mt-3 font-heading text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {data.title}
          </h1>
          <p className="mt-4 text-text-secondary">
            {data.description}
          </p>
          <div className="mt-8 text-text-secondary">
            <p>{data.body}</p>
          </div>
          <div className="mt-10">
            <Link
              href="/#pricing"
              className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get started →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
