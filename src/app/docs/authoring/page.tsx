export const metadata = {
  title: "Plugin Authoring Guide — OwnTerm",
  description: "How to build plugins for OwnTerm. Architecture, file structure, conventions, and examples.",
};

export default function AuthoringPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-mono text-3xl font-bold">Plugin Authoring Guide</h1>
      <p className="mt-3 text-zinc-400">
        Everything you need to build an OwnTerm plugin.
      </p>

      {/* Architecture */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          Architecture Overview
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          OwnTerm plugins live on disk as a directory with a{" "}
          <code className="font-mono text-zinc-300">manifest.json</code> file.
          Each plugin registers itself into one or more registries via the
          manifest. The four registries are:
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-left">
                <th className="py-2 pr-4 font-mono font-semibold text-zinc-200">Registry</th>
                <th className="py-2 pr-4 font-mono font-semibold text-zinc-200">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800/50">
                <td className="py-2 pr-4 font-mono text-blue-400">Server</td>
                <td className="py-2">Python servers (STT, TTS)</td>
              </tr>
              <tr className="border-b border-zinc-800/50">
                <td className="py-2 pr-4 font-mono text-blue-400">TTS Provider</td>
                <td className="py-2">Custom voice backends</td>
              </tr>
              <tr className="border-b border-zinc-800/50">
                <td className="py-2 pr-4 font-mono text-blue-400">Provider</td>
                <td className="py-2">Non-server LLM providers</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-blue-400">Plugin Component</td>
                <td className="py-2">Lazy-loaded React settings tabs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-zinc-400">
          A single plugin can register into multiple registries (e.g., KokoClone
          registers a server, a TTS provider, and a UI component).
        </p>
      </section>

      {/* Plugin Types */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          Plugin Types
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-mono text-lg font-semibold text-zinc-200">
              Server-based (STT/TTS)
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Spawns a local Python Flask server. Examples: whisper-stt,
              kokoro-tts, kokoclone.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
{`~/.ownterm/plugins/my-stt/
  manifest.json        # metadata + settings + server config
  my_stt_server.py     # Python server script`}
            </pre>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold text-zinc-200">
              Provider (no server)
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Wraps an external binary or API. Example: claude-cli.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
{`~/.ownterm/plugins/my-provider/
  manifest.json        # metadata + provider config`}
            </pre>
          </div>
        </div>
      </section>

      {/* Manifest */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          manifest.json
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          Every plugin requires a <code className="font-mono text-zinc-300">manifest.json</code> at
          its root:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
{`{
  "id": "my-plugin",
  "name": "My Plugin",
  "version": "1.0.0",
  "description": "What it does.",
  "author": "Your Name",
  "type": "stt",
  "icon": "⚙",
  "settings": [
    {
      "key": "model",
      "type": "select",
      "label": "Model",
      "default": "base",
      "options": [
        { "value": "base", "label": "Base" },
        { "value": "large", "label": "Large" }
      ]
    }
  ],
  "server": {
    "type": "my-stt",
    "port": 9100,
    "label": "My STT",
    "runtime": "python",
    "packages": ["flask==3.1.0"],
    "scriptName": "my_stt_server.py",
    "healthCheck": "/"
  }
}`}
        </pre>
      </section>

      {/* Server Config */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          Server Configuration
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-left">
                <th className="py-2 pr-4 font-mono font-semibold text-zinc-200">Field</th>
                <th className="py-2 pr-4 font-mono font-semibold text-zinc-200">Type</th>
                <th className="py-2 pr-4 font-mono font-semibold text-zinc-200">Required</th>
                <th className="py-2 font-mono font-semibold text-zinc-200">Notes</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              {[
                ["type", "string", "yes", "Unique server type identifier"],
                ["port", "number", "yes", "Must not conflict with existing plugins"],
                ["label", "string", "yes", "Display name"],
                ["runtime", "string", "no", "'python' | 'binary' | 'node'"],
                ["packages", "string[]", "no", "Pip packages, always pin versions"],
                ["scriptName", "string", "no", "Filename for the server script"],
                ["healthCheck", "string", "no", "Health endpoint path (default: /)"],
              ].map(([field, type, req, notes]) => (
                <tr key={field} className="border-b border-zinc-800/50">
                  <td className="py-2 pr-4 font-mono text-blue-400">{field}</td>
                  <td className="py-2 pr-4 font-mono">{type}</td>
                  <td className="py-2 pr-4">{req}</td>
                  <td className="py-2">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conventions */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          Conventions
        </h2>
        <div className="mt-4 space-y-4 text-sm text-zinc-400">
          <div>
            <h3 className="font-mono font-semibold text-zinc-200">Ports</h3>
            <p>
              Pick a unique port that doesn&apos;t conflict. Current allocations:
              3000 (Next.js), 8880 (Kokoro TTS), 8891 (KokoClone), 9000
              (Whisper STT).
            </p>
          </div>
          <div>
            <h3 className="font-mono font-semibold text-zinc-200">IDs</h3>
            <p>
              Always kebab-case. Plugin ID, server type, and directory name
              should be consistent.
            </p>
          </div>
          <div>
            <h3 className="font-mono font-semibold text-zinc-200">
              Python Servers
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Accept port as <code className="font-mono text-zinc-300">sys.argv[1]</code>
              </li>
              <li>
                Expose <code className="font-mono text-zinc-300">GET /</code> health
                endpoint returning JSON
              </li>
              <li>
                Set{" "}
                <code className="font-mono text-zinc-300">
                  X-OwnTerm-Server: &lt;serverType&gt;
                </code>{" "}
                response header
              </li>
              <li>
                Print startup with{" "}
                <code className="font-mono text-zinc-300">[serverType]</code> prefix,{" "}
                <code className="font-mono text-zinc-300">flush=True</code>
              </li>
              <li>
                Bind to <code className="font-mono text-zinc-300">127.0.0.1</code> only
                (never <code className="font-mono text-zinc-300">0.0.0.0</code>)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-semibold text-zinc-200">
              Pip Packages
            </h3>
            <p>
              Always pin versions (e.g.,{" "}
              <code className="font-mono text-zinc-300">flask==3.1.0</code>).
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="mt-12">
        <h2 className="font-mono text-2xl font-semibold text-zinc-100">
          Plugin Lifecycle
        </h2>
        <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-zinc-400">
          <li>
            OwnTerm scans{" "}
            <code className="font-mono text-zinc-300">~/.ownterm/plugins/</code> for{" "}
            <code className="font-mono text-zinc-300">manifest.json</code> files on
            startup
          </li>
          <li>
            Manifests are validated and registered into the appropriate
            registries
          </li>
          <li>
            When a server plugin is needed:{" "}
            <code className="font-mono text-zinc-300">lifecycle.ensureServer(type)</code>{" "}
            checks if already running
          </li>
          <li>
            If not installed: creates venv, pip installs packages, writes script
            to disk
          </li>
          <li>
            Process manager spawns the server and writes PID to{" "}
            <code className="font-mono text-zinc-300">~/.ownterm/pids/</code>
          </li>
          <li>Health check polls the health endpoint (60s timeout)</li>
          <li>
            Plugin state persists in{" "}
            <code className="font-mono text-zinc-300">
              ~/.ownterm/plugin-state.json
            </code>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
        <h3 className="font-mono text-lg font-semibold">Ready to build?</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Check out the built-in plugins as reference, then submit yours to the
          directory.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            View Source
          </a>
          <a
            href="/plugins/submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Submit a Plugin
          </a>
        </div>
      </section>
    </div>
  );
}
