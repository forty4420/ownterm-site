import Link from "next/link";

export const metadata = {
  title: "Submit a Plugin — OwnTerm",
  description: "Submit your OwnTerm plugin for review and inclusion in the plugin directory.",
};

const SUBMIT_URL =
  "https://github.com/forty4420/ownterm-site/issues/new?template=plugin-submission.yml";

export default function SubmitPluginPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="animate-fade-up font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        Submit Your Plugin
      </h1>
      <p className="animate-fade-up delay-1 mt-4 text-[var(--color-text-secondary)]">
        Built something for OwnTerm? Get it listed in the plugin directory.
      </p>

      {/* Steps */}
      <div className="mt-14 space-y-10">
        {[
          {
            step: 1,
            title: "Build your plugin",
            content: (
              <>
                Follow the{" "}
                <Link
                  href="/docs/authoring"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  plugin authoring guide
                </Link>{" "}
                to create a plugin with a valid <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code>.
              </>
            ),
          },
          {
            step: 2,
            title: "Host it on GitHub",
            content: (
              <>
                Push your plugin to a public GitHub repository. Make sure the{" "}
                <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code> is at the
                root of the repo.
              </>
            ),
          },
          {
            step: 3,
            title: "Submit for review",
            content:
              "Click the button below to open a GitHub issue. We'll review your plugin and add it to the directory.",
          },
        ].map((item) => (
          <div key={item.step} className="animate-fade-up flex gap-5" style={{ animationDelay: `${item.step * 100}ms` }}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] font-mono text-sm font-bold text-[var(--color-surface-0)]">
              {item.step}
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Requirements */}
      <div className="mt-14 card-gradient p-7">
        <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Requirements
        </h3>
        <ul className="mt-5 space-y-3 text-sm text-[var(--color-text-secondary)]">
          {[
            "Public GitHub repository",
            <>Valid <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code> at the repo root</>,
            "Tested with the latest OwnTerm release",
            "Follows plugin authoring conventions (ports, IDs, security)",
            <>Includes a <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">howToUse</code> description in the submission</>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 text-[var(--color-accent)]">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <div className="mt-12 text-center">
        <a
          href={SUBMIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-accent inline-block rounded-xl bg-[var(--color-accent)] px-8 py-3.5 font-mono text-sm font-semibold text-[var(--color-surface-0)] transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
        >
          Submit for Review
        </a>
        <p className="mt-3 text-xs text-[var(--color-text-muted)]">
          Opens a pre-filled GitHub issue on the ownterm-site repository.
        </p>
      </div>
    </div>
  );
}
