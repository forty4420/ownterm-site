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
    <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
      <div className="mb-3 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-2xl">
          {persona.avatar}
        </span>
        {persona.featured && (
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
            Featured
          </span>
        )}
      </div>

      <h3 className="mb-1 font-mono text-lg font-semibold text-zinc-100">
        {persona.name}
      </h3>

      <div className="mb-3 text-xs text-zinc-500">
        by {persona.author}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
        {persona.description}
      </p>

      {persona.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {persona.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={persona.downloadUrl}
        download={`${persona.id}.persona.json`}
        className="mt-auto inline-flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
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
