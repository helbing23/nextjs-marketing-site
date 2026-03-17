import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "Articles on Next.js, design systems, and shipping fast.",
  path: "/blog",
});

export const revalidate = 3600;

// [CHANGE] Wire up to MDX files via lib/mdx.ts once you have blog posts
const PLACEHOLDER_POSTS = [
  {
    slug: "getting-started",
    title: "Getting started with this template",
    description: "A walkthrough of the first 30 minutes with this starter.",
    date: "2026-01-15",
    readingTime: "5 min read",
  },
  {
    slug: "design-system",
    title: "How the design token system works",
    description: "Deep dive into the CSS custom property architecture.",
    date: "2026-01-22",
    readingTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <h1
          className="font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Blog
        </h1>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          Thoughts on building, designing, and shipping.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PLACEHOLDER_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-colors hover:border-[var(--color-accent)]/40"
            >
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2
                className="mt-3 font-heading text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
