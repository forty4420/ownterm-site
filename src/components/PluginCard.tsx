"use client";

import { useState } from "react";

interface Plugin {
  id: string;
  name: string;
  version: string;
  type: string;
  icon: string;
  author: string;
  description: string;
  repo: string | null;
  howToUse?: string;
}

const TYPE_COLORS: Record<string, string> = {
  stt: "bg-sky-500/15 text-sky-400 border-sky-500/25",
  tts: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  provider: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  middleware: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  tool: "bg-rose-500/15 text-rose-400 border-rose-500/25",
  theme: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
};

const TYPE_LABELS: Record<string, string> = {
  stt: "Speech-to-Text",
  tts: "Text-to-Speech",
  provider: "Provider",
  middleware: "Middleware",
  tool: "Tool",
  theme: "Theme",
};

export function PluginCard({ plugin }: { plugin: Plugin }) {
  const [showHowTo, setShowHowTo] = useState(false);
  const badgeClass =
    TYPE_COLORS[plugin.type] ||
    "bg-zinc-500/15 text-[var(--color-text-muted)] border-zinc-500/25";
  const typeLabel = TYPE_LABELS[plugin.type] || plugin.type;

  return (
    <div className="card-gradient flex flex-col p-6">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-2xl">
          {plugin.icon}
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          {typeLabel}
        </span>
      </div>

      <h3 className="mb-1 font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
        {plugin.name}
      </h3>

      <div className="mb-3 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
        <span className="font-mono">v{plugin.version}</span>
        <span>&middot;</span>
        <span>{plugin.author}</span>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {plugin.description}
      </p>

      {/* How to Use */}
      {plugin.howToUse && (
        <div className="mb-4">
          <button
            onClick={() => setShowHowTo(!showHowTo)}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-hover)]"
          >
            <span className={`inline-block transition-transform duration-200 ${showHowTo ? "rotate-90" : ""}`}>
              &#9654;
            </span>
            How to Use
          </button>
          {showHowTo && (
            <p className="mt-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-0)] p-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {plugin.howToUse}
            </p>
          )}
        </div>
      )}

      {plugin.repo ? (
        <a
          href={plugin.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-hover)]"
        >
          View Source &rarr;
        </a>
      ) : (
        <span className="mt-auto text-xs text-[var(--color-text-muted)]">
          Included with OwnTerm &mdash; enable in Settings &gt; Plugins
        </span>
      )}
    </div>
  );
}
