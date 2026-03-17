import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const revalidate = 3600;

// [CHANGE] Replace with real MDX post loading via lib/mdx.ts
const POSTS: Record<string, { title: string; description: string; date: string; content: string }> = {
  "getting-started": {
    title: "Getting started with this template",
    description: "A walkthrough of the first 30 minutes with this starter.",
    date: "2026-01-15",
    content: "Replace this with MDX content loaded from content/blog/getting-started.mdx",
  },
  "design-system": {
    title: "How the design token system works",
    description: "Deep dive into the CSS custom property architecture.",
    date: "2026-01-22",
    content: "Replace this with MDX content loaded from content/blog/design-system.mdx",
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <article className="bg-[var(--color-bg-primary)] py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            <time dateTime={post.date}>{post.date}</time>
          </p>
          <h1
            className="mt-3 font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>
          <div className="prose prose-invert mt-10 max-w-none text-[var(--color-text-secondary)]">
            {/* [CHANGE] Replace with rendered MDX via next-mdx-remote */}
            <p>{post.content}</p>
          </div>
        </div>
      </Container>
    </article>
  );
}
