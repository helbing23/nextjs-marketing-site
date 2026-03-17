import { Container } from "@/components/layout/Container";

// [CHANGE] Replace with real FAQs relevant to your product
export const FAQS = [
  {
    q: "Do I need any special tooling to use this template?",
    a: "You need Node.js 20+, npm, and a GitHub account. Claude Code is recommended but optional — every step in the SOP works with any code editor.",
  },
  {
    q: "Is this a one-time purchase or a subscription?",
    a: "The Starter tier is free forever. Pro and Agency are one-time payments with no recurring fees. You own the code.",
  },
  {
    q: "Can I use this for client work?",
    a: "The Starter and Pro tiers include a single-project license. The Agency tier includes unlimited client projects with white-label rights.",
  },
  {
    q: "What if I want a light mode design system?",
    a: "The template is dark-first by design. Light mode can be added by duplicating the CSS variable block with a .light class selector. The Tailwind v4 setup makes this straightforward.",
  },
  {
    q: "How do I change the accent color?",
    a: "Update the four --color-accent* variables in app/globals.css. All 50+ components inherit the value automatically — no find-and-replace needed.",
  },
  {
    q: "Does this work with Cursor AI?",
    a: "Yes. The SOP includes a CLAUDE.md template and optional .cursorrules file that prime both Claude Code and Cursor with the project rules.",
  },
  {
    q: "What deployment platforms are supported?",
    a: "Vercel is the default (zero config). The code is standard Next.js 15 and works on any Node.js host including Railway, Render, and Hostinger.",
  },
  {
    q: "Is there a blog system included?",
    a: "Yes. The Pro tier includes a full MDX blog with frontmatter, reading time, syntax highlighting via Shiki, and ISR caching.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[var(--color-bg-secondary)] py-20 md:py-28">
      {/* JSON-LD is injected in the page file via generateMetadata or a script tag */}
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            FAQ
          </p>
          <h2
            className="mt-3 text-balance font-heading text-[var(--text-h2)] font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Common questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--color-border)]">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-[var(--color-text-primary)]">
                <span>{faq.q}</span>
                <span className="mt-0.5 shrink-0 text-[var(--color-text-tertiary)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
