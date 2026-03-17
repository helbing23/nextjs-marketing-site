import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: MetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const image = ogImage ?? SITE_CONFIG.ogImage;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
      creator: SITE_CONFIG.twitterHandle,
    },
  };
}
