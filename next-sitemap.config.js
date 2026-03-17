// [CHANGE] Keep siteUrl in sync with SITE_CONFIG.url in lib/constants.ts

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: false, // robots.ts handles this natively in Next.js
  exclude: ["/legal/*", "/api/*"],
};
