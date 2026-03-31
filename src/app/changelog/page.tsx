import changelog from "@/data/changelog.json";

export const metadata = {
  title: "Changelog — OwnTerm",
  description:
    "Version history, release notes, and development milestones for OwnTerm.",
};

const TYPE_BADGE: Record<string, { label: string; className: string }> = {
  feat: {
    label: "Feature",
    className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  },
  fix: {
    label: "Fix",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  },
  refactor: {
    label: "Refactor",
    className: "bg-sky-500/15 text-sky-400 border-sky-500/25",
  },
  chore: {
    label: "Chore",
    className: "bg-zinc-500/15 text-[var(--color-text-muted)] border-zinc-500/25",
  },
  docs: {
    label: "Docs",
    className: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  },
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="animate-fade-up font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        Changelog
      </h1>
      <p className="animate-fade-up delay-1 mt-4 text-[var(--color-text-secondary)]">
        Version history and development milestones for OwnTerm.
      </p>

      <div className="mt-14 space-y-14">
        {changelog.map((release, ri) => (
          <section
            key={release.version}
            id={`v${release.version}`}
            className="animate-fade-up scroll-mt-20"
            style={{ animationDelay: `${Math.min(ri * 50, 300)}ms` }}
          >
            {/* Version header */}
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)]">
                v{release.version}
              </h2>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3 py-0.5 font-mono text-xs text-[var(--color-text-muted)]">
                {release.date}
              </span>
            </div>

            <h3 className="mt-2 font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
              {release.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{release.description}</p>

            {/* Changes list */}
            <ul className="mt-5 space-y-2.5">
              {release.changes.map((change, i) => {
                const badge = TYPE_BADGE[change.type] || TYPE_BADGE.chore;
                return (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                    <span className="text-[var(--color-text-secondary)]">{change.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <div className="mt-10 border-t border-[var(--color-border)]" />
          </section>
        ))}
      </div>

      {/* Anchor links */}
      <div className="mt-20 card-gradient p-7">
        <h3 className="font-mono text-sm font-semibold text-[var(--color-text-secondary)]">
          Quick Links
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {changelog.map((release) => (
            <a
              key={release.version}
              href={`#v${release.version}`}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-all duration-200 hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)]"
            >
              v{release.version}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
