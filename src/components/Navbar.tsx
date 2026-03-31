"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/plugins", label: "Plugins" },
  { href: "/personas", label: "Personas" },
  { href: "/plugins/submit", label: "Submit Plugin" },
  { href: "/changelog", label: "Changelog" },
  { href: "/docs/authoring", label: "Docs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface-0)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tight transition-colors duration-200"
        >
          <span className="text-[var(--color-accent)]">Own</span>
          <span className="text-[var(--color-text-primary)]">Term</span>
        </Link>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex items-center">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[var(--color-text-secondary)] md:hidden p-1"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 pb-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
