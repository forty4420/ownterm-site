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
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-mono text-3xl font-bold">Plugin Directory</h1>
        <p className="mt-3 text-zinc-400">
          Browse the plugins that extend OwnTerm with new voices, speech
          engines, chat providers, and more.
        </p>
      </div>

      {/* Official Plugins */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-xl font-semibold text-zinc-200">
          Official Plugins
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {pluginData.builtin.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </div>
      </section>

      {/* Community Plugins */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-xl font-semibold text-zinc-200">
          Community Plugins
        </h2>
        {community.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 px-8 py-12 text-center">
            <p className="text-lg text-zinc-500">
              No community plugins yet. Be the first!
            </p>
            <Link
              href="/plugins/submit"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Submit Your Plugin
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {community.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        )}
      </section>

      {/* Submit CTA */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-8 text-center">
        <h3 className="font-mono text-lg font-semibold">
          Have a plugin to share?
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          Submit your plugin for review and get it listed in the directory.
        </p>
        <Link
          href="/plugins/submit"
          className="mt-4 inline-block rounded-lg border border-zinc-700 px-5 py-2.5 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          Submit for Review
        </Link>
      </section>
    </div>
  );
}
