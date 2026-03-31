import Link from "next/link";
import { PluginCard } from "@/components/PluginCard";
import pluginData from "@/data/plugins.json";

type Plugin = {
  id: string;
  name: string;
  version: string;
  type: string;
  icon: string;
  author: string;
  description: string;
  repo: string | null;
};

const community = pluginData.community as Plugin[];

export const metadata = {
  title: "Plugin Directory — OwnTerm",
  description: "Browse official and community plugins for OwnTerm.",
};

export default function PluginsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14">
        <h1 className="animate-fade-up font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Plugin Directory
        </h1>
        <p className="animate-fade-up delay-1 mt-4 max-w-xl text-[var(--color-text-secondary)]">
          Browse the plugins that extend OwnTerm with new voices, speech
          engines, chat providers, and more.
        </p>
      </div>

      {/* Official Plugins */}
      <section className="mb-20">
        <h2 className="mb-6 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          Official Plugins
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {pluginData.builtin.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </div>
      </section>

      {/* Community Plugins */}
      <section className="mb-20">
        <h2 className="mb-6 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          Community Plugins
        </h2>
        {community.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--color-border-hover)] bg-[var(--color-surface-1)] px-8 py-14 text-center">
            <p className="text-lg text-[var(--color-text-muted)]">
              No community plugins yet. Be the first!
            </p>
            <Link
              href="/plugins/submit"
              className="glow-accent mt-5 inline-block rounded-xl bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-surface-0)] transition-all duration-300 hover:brightness-110"
            >
              Submit Your Plugin
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {community.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        )}
      </section>

      {/* Submit CTA */}
      <section className="card-gradient px-8 py-10 text-center">
        <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Have a plugin to share?
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Submit your plugin for review and get it listed in the directory.
        </p>
        <Link
          href="/plugins/submit"
          className="mt-5 inline-block rounded-xl border border-[var(--color-border-accent)] bg-[var(--color-surface-1)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-surface-2)] hover:border-[var(--color-accent)] active:scale-[0.98]"
        >
          Submit for Review
        </Link>
      </section>
    </div>
  );
}
