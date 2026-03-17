import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { BlogContent } from "@/components/blog/BlogContent";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-bg-primary py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1
            className="mt-3 font-heading text-h2 font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>
          <BlogContent source={post.source} />
        </div>
      </Container>
    </article>
  );
}
