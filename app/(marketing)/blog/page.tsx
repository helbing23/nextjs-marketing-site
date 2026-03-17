import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "Articles on Next.js, design systems, and shipping fast.",
  path: "/blog",
});

export const revalidate = 3600;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <Container>
        <h1
          className="font-heading text-h2 font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Blog
        </h1>
        <p className="mt-3 text-text-secondary">
          Thoughts on building, designing, and shipping.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
