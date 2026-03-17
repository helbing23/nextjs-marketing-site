export const SITE_CONFIG = {
  name: "[SITE NAME]",           // [CHANGE] e.g. "Acme"
  url: "https://example.com",    // [CHANGE] production URL
  description: "[SITE DESCRIPTION]", // [CHANGE] ~160 chars for SEO
  tagline: "[YOUR TAGLINE]",     // [CHANGE] short value prop
  twitterHandle: "@yourhandle",  // [CHANGE]
  ogImage: "/images/og/default.png",
};

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/yourhandle",   // [CHANGE]
  github: "https://github.com/yourorg",        // [CHANGE]
  linkedin: "https://linkedin.com/company/you", // [CHANGE]
};

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Changelog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#founder" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];

// [CHANGE] Replace with real competitors relevant to your product
export const COMPETITORS = [
  "competitor-one",
  "competitor-two",
  "competitor-three",
];

// [CHANGE] Replace with real use cases for your product
export const USE_CASES = [
  "use-case-one",
  "use-case-two",
  "use-case-three",
];
