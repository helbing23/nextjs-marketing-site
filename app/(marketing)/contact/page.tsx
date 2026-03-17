import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch. We respond to every message within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-xl">
          <h1
            className="font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* [CHANGE] */}
            Get in touch
          </h1>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            {/* [CHANGE] */}
            Have a question or want to collaborate? Send us a message and
            we&apos;ll reply within 24 hours.
          </p>

          {/* [CHANGE] Replace with React Hook Form + Resend API route */}
          <form className="mt-10 space-y-5" action="/api/contact" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-text-primary)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-text-primary)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-text-primary)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
