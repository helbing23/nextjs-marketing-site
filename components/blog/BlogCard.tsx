import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

export function BlogCard({ slug, title, description, date, readingTime }: PostMeta) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/40"
    >
      <div className="flex items-center gap-2 text-xs text-text-tertiary">
        <time dateTime={date}>{date}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <h2
        className="mt-3 font-heading text-lg font-semibold text-text-primary group-hover:text-accent"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
    </Link>
  );
}
