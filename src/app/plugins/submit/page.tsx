import Link from "next/link";

export const metadata = {
  title: "Submit a Plugin — OwnTerm",
  description: "Submit your OwnTerm plugin for review and inclusion in the plugin directory.",
};

const SUBMIT_URL =
  "https://github.com/forty4420/ownterm-site/issues/new?template=plugin-submission.yml";

export default function SubmitPluginPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-mono text-3xl font-bold">Submit Your Plugin</h1>
      <p className="mt-3 text-zinc-400">
        Built something for OwnTerm? Get it listed in the plugin directory.
      </p>

      {/* Steps */}
      <div className="mt-12 space-y-8">
        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-sm font-bold">
            1
          </div>
          <div>
            <h3 className="font-mono text-lg font-semibold text-zinc-100">
              Build your plugin
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Follow the{" "}
              <Link
                href="/docs/authoring"
                className="text-blue-400 hover:text-blue-300"
              >
                plugin authoring guide
              </Link>{" "}
              to create a plugin with a valid <code className="font-mono text-zinc-300">manifest.json</code>.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-sm font-bold">
            2
          </div>
          <div>
            <h3 className="font-mono text-lg font-semibold text-zinc-100">
              Host it on GitHub
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Push your plugin to a public GitHub repository. Make sure the{" "}
              <code className="font-mono text-zinc-300">manifest.json</code> is at the
              root of the repo.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-sm font-bold">
            3
          </div>
          <div>
            <h3 className="font-mono text-lg font-semibold text-zinc-100">
              Submit for review
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Click the button below to open a GitHub issue. We&apos;ll review your
              plugin and add it to the directory.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="font-mono text-lg font-semibold text-zinc-100">
          Requirements
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-blue-400">&#10003;</span>
            Public GitHub repository
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-blue-400">&#10003;</span>
            Valid <code className="font-mono text-zinc-300">manifest.json</code> at the repo root
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-blue-400">&#10003;</span>
            Tested with the latest OwnTerm release
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-blue-400">&#10003;</span>
            Follows plugin authoring conventions (ports, IDs, security)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-blue-400">&#10003;</span>
            Includes a <code className="font-mono text-zinc-300">howToUse</code> description
            in the submission &mdash; a plain-English guide for users
          </li>
        </ul>
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center">
        <a
          href={SUBMIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3.5 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          Submit for Review
        </a>
        <p className="mt-3 text-xs text-zinc-500">
          Opens a pre-filled GitHub issue on the ownterm-site repository.
        </p>
      </div>
    </div>
  );
}
