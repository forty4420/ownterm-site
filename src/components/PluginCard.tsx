interface Plugin {
  id: string;
  name: string;
  version: string;
  type: string;
  icon: string;
  author: string;
  description: string;
  repo: string | null;
}

const TYPE_COLORS: Record<string, string> = {
  stt: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  tts: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  provider: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  middleware: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  tool: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  theme: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
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
  const badgeClass =
    TYPE_COLORS[plugin.type] ||
    "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
  const typeLabel = TYPE_LABELS[plugin.type] || plugin.type;

  return (
    <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
      <div className="mb-3 flex items-start justify-between">
        <span className="text-3xl">{plugin.icon}</span>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          {typeLabel}
        </span>
      </div>

      <h3 className="mb-1 font-mono text-lg font-semibold text-zinc-100">
        {plugin.name}
      </h3>

      <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
        <span>v{plugin.version}</span>
        <span>&middot;</span>
        <span>{plugin.author}</span>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
        {plugin.description}
      </p>

      {plugin.repo && (
        <a
          href={plugin.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-blue-400 transition-colors hover:text-blue-300"
        >
          View Source &rarr;
        </a>
      )}
    </div>
  );
}
