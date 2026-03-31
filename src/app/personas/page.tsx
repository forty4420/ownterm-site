"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PersonaCard } from "@/components/PersonaCard";

interface GalleryPersona {
  id: string;
  name: string;
  description: string;
  avatar: string;
  author: string;
  tags: string[];
  downloadUrl: string;
  featured?: boolean;
}

const GALLERY_URL = "/persona-gallery/index.json";

export default function PersonasPage() {
  const [personas, setPersonas] = useState<GalleryPersona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GALLERY_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load gallery (${res.status})`);
        return res.json();
      })
      .then((data) => {
        const sorted = (data.personas as GalleryPersona[]).sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
        setPersonas(sorted);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14">
        <h1 className="animate-fade-up font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Persona Gallery
        </h1>
        <p className="animate-fade-up delay-1 mt-4 max-w-xl text-[var(--color-text-secondary)]">
          Browse community personas for OwnTerm. Download a{" "}
          <code className="rounded bg-[var(--color-surface-2)] px-1.5 py-0.5 text-sm text-[var(--color-text-primary)]">
            .persona.json
          </code>{" "}
          file and import it into the Persona Manager plugin.
        </p>
      </div>

      {/* Gallery */}
      <section className="mb-20">
        <h2 className="mb-6 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          Available Personas
        </h2>

        {loading && (
          <div className="card-gradient px-8 py-14 text-center">
            <div className="mx-auto h-6 w-6 rounded-full border-2 border-[var(--color-accent)] border-t-transparent animate-spin" />
            <p className="mt-4 text-[var(--color-text-muted)]">Loading gallery...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/25 bg-red-500/10 px-8 py-14 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && personas.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--color-border-hover)] bg-[var(--color-surface-1)] px-8 py-14 text-center">
            <p className="text-lg text-[var(--color-text-muted)]">
              No personas yet. Be the first to submit one!
            </p>
          </div>
        )}

        {!loading && !error && personas.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            {personas.map((persona) => (
              <PersonaCard key={persona.id} persona={persona} />
            ))}
          </div>
        )}
      </section>

      {/* Submit CTA */}
      <section className="card-gradient px-8 py-10 text-center">
        <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Submit Your Persona
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Create a persona in OwnTerm, export it, and submit a PR to get it
          listed here.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/forty4420/ownterm-site/blob/main/public/persona-gallery/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent rounded-xl bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-surface-0)] transition-all duration-300 hover:brightness-110"
          >
            Contributing Guide
          </a>
          <Link
            href="/docs/authoring"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)]"
          >
            Plugin Docs
          </Link>
        </div>
      </section>
    </div>
  );
}
