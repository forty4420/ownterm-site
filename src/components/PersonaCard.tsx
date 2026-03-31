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

export function PersonaCard({ persona }: { persona: GalleryPersona }) {
  return (
    <div className="card-gradient flex flex-col p-6">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-2xl">
          {persona.avatar}
        </div>
        {persona.featured && (
          <span className="rounded-full border border-[var(--color-warm-dim)] bg-[var(--color-warm)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--color-warm)]">
            Featured
          </span>
        )}
      </div>

      <h3 className="mb-1 font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
        {persona.name}
      </h3>

      <div className="mb-3 text-xs text-[var(--color-text-muted)]">
        by {persona.author}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {persona.description}
      </p>

      {persona.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {persona.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={persona.downloadUrl}
        download={`${persona.id}.persona.json`}
        className="mt-auto inline-flex items-center gap-2 text-sm text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-hover)]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
          />
        </svg>
        Download .persona.json
      </a>
    </div>
  );
}
