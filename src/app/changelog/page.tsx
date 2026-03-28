import changelog from "@/data/changelog.json";

export const metadata = {
  title: "Changelog — OwnTerm",
  description:
    "Version history, release notes, and development milestones for OwnTerm.",
};

const TYPE_BADGE: Record<string, { label: string; className: string }> = {
  feat: {
    label: "Feature",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  fix: {
    label: "Fix",
    className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  refactor: {
    label: "Refactor",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  chore: {
    label: "Chore",
    className: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  },
  docs: {
    label: "Docs",
    className: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-mono text-3xl font-bold">Changelog</h1>
      <p className="mt-3 text-zinc-400">
        Version history and development milestones for OwnTerm.
      </p>

      <div className="mt-12 space-y-12">
        {changelog.map((release) => (
          <section
            key={release.version}
            id={`v${release.version}`}
            className="scroll-mt-20"
          >
            {/* Version header */}
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-mono text-2xl font-bold text-zinc-100">
                v{release.version}
              </h2>
              <span className="rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400">
                {release.date}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-semibold text-zinc-200">
              {release.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{release.description}</p>

            {/* Changes list */}
            <ul className="mt-4 space-y-2">
              {release.changes.map((change, i) => {
                const badge = TYPE_BADGE[change.type] || TYPE_BADGE.chore;
                return (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                    <span className="text-zinc-300">{change.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <div className="mt-8 border-t border-zinc-800/50" />
          </section>
        ))}
      </div>

      {/* Anchor links */}
      <div className="mt-16 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="font-mono text-sm font-semibold text-zinc-300">
          Quick Links
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {changelog.map((release) => (
            <a
              key={release.version}
              href={`#v${release.version}`}
              className="rounded-lg border border-zinc-700 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              v{release.version}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
