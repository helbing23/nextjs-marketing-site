import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogContentProps {
  source: string;
}

export function BlogContent({ source }: BlogContentProps) {
  return (
    <div className="prose prose-invert mt-10 max-w-none text-text-secondary">
      <MDXRemote source={source} />
    </div>
  );
}
