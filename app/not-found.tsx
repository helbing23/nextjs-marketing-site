import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-bg-primary">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="font-heading text-8xl font-semibold text-border-strong">
            404
          </p>
          <h1
            className="mt-4 font-heading text-2xl font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Page not found
          </h1>
          <p className="mt-3 text-text-secondary">
            This page doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
