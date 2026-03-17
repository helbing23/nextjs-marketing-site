"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors hover:text-text-primary md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-down nav panel */}
      <nav
        className={cn(
          "fixed inset-x-0 top-[65px] z-50 border-b border-border bg-bg-primary px-6 pb-8 pt-4 transition-all duration-300 md:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        )}
        aria-label="Mobile navigation"
      >
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-border pt-6">
          <Link
            href="/#pricing"
            className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-text-tertiary">
          {SITE_CONFIG.name}
        </p>
      </nav>
    </>
  );
}
