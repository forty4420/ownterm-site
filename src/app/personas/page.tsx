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
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-mono text-3xl font-bold">Persona Gallery</h1>
        <p className="mt-3 text-zinc-400">
          Browse community personas for OwnTerm. Download a{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-zinc-300">
            .persona.json
          </code>{" "}
          file and import it into the Persona Manager plugin.
        </p>
      </div>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-xl font-semibold text-zinc-200">
          Available Personas
        </h2>

        {loading && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-8 py-12 text-center">
            <p className="text-zinc-500">Loading gallery...</p>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-8 py-12 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && personas.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 px-8 py-12 text-center">
            <p className="text-lg text-zinc-500">
              No personas yet. Be the first to submit one!
            </p>
          </div>
        )}

        {!loading && !error && personas.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {personas.map((persona) => (
              <PersonaCard key={persona.id} persona={persona} />
            ))}
          </div>
        )}
      </section>

      {/* Submit CTA */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-8 text-center">
        <h3 className="font-mono text-lg font-semibold">
          Submit Your Persona
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          Create a persona in OwnTerm, export it, and submit a PR to get it
          listed here.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/forty4420/ownterm-site/blob/main/public/persona-gallery/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Contributing Guide
          </a>
          <Link
            href="/docs/authoring"
            className="inline-block rounded-lg border border-zinc-700 px-5 py-2.5 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Plugin Docs
          </Link>
        </div>
      </section>
    </div>
  );
}
