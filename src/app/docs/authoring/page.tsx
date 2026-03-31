export const metadata = {
  title: "Plugin Authoring Guide — OwnTerm",
  description: "How to build plugins for OwnTerm. Architecture, file structure, conventions, and examples.",
};

export default function AuthoringPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="animate-fade-up font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        Plugin Authoring Guide
      </h1>
      <p className="animate-fade-up delay-1 mt-4 text-[var(--color-text-secondary)]">
        Everything you need to build an OwnTerm plugin.
      </p>

      {/* Architecture */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          Architecture Overview
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          OwnTerm plugins live on disk as a directory with a{" "}
          <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code> file.
          Each plugin registers itself into one or more registries via the
          manifest. The four registries are:
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Registry</th>
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-5 py-3 font-mono text-[var(--color-accent)]">Server</td>
                <td className="px-5 py-3">Python servers (STT, TTS)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-5 py-3 font-mono text-[var(--color-accent)]">TTS Provider</td>
                <td className="px-5 py-3">Custom voice backends</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-5 py-3 font-mono text-[var(--color-accent)]">Provider</td>
                <td className="px-5 py-3">Non-server LLM providers</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-mono text-[var(--color-accent)]">Plugin Component</td>
                <td className="px-5 py-3">Lazy-loaded React settings tabs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          A single plugin can register into multiple registries (e.g., KokoClone
          registers a server, a TTS provider, and a UI component).
        </p>
      </section>

      {/* Plugin Types */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          Plugin Types
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
              Server-based (STT/TTS)
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Spawns a local Python Flask server. Examples: whisper-stt,
              kokoro-tts, kokoclone.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] p-5 font-mono text-sm text-[var(--color-text-secondary)]">
{`~/.ownterm/plugins/my-stt/
  manifest.json        # metadata + settings + server config
  my_stt_server.py     # Python server script`}
            </pre>
          </div>

          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
              Provider (no server)
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Wraps an external binary or API. Example: claude-cli.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] p-5 font-mono text-sm text-[var(--color-text-secondary)]">
{`~/.ownterm/plugins/my-provider/
  manifest.json        # metadata + provider config`}
            </pre>
          </div>

          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
              Tool Plugin (JavaScript handler)
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Exposes tools the AI can call during conversations. Tools are defined
              in the manifest and executed by a handler file. Example: browser-bridge,
              goal-tools, web-tools.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] p-5 font-mono text-sm text-[var(--color-text-secondary)]">
{`~/.ownterm/plugins/my-tools/
  manifest.json        # metadata + tools array + toolConfig
  handler.js           # exports execute(toolName, args)`}
            </pre>
          </div>
        </div>
      </section>

      {/* Manifest */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          manifest.json
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          Every plugin requires a <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code> at
          its root:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] p-5 font-mono text-sm text-[var(--color-text-secondary)]">
{`{
  "id": "my-plugin",
  "name": "My Plugin",
  "version": "1.0.0",
  "description": "What it does.",
  "author": "Your Name",
  "type": "stt",
  "icon": "\u2699",
  "settings": [ ... ],
  "server": { ... },

  // Tool plugins: define tools and a handler
  "tools": [
    {
      "name": "my_tool",
      "description": "What this tool does",
      "parameters": {
        "type": "object",
        "properties": {
          "query": { "type": "string", "description": "Search query" }
        },
        "required": ["query"]
      },
      "tags": ["search"],
      "permissions": ["network"],
      "timeout": 10000
    }
  ],
  "toolHandler": "handler.js",
  "toolConfig": { "handlerType": "javascript" },

  // Optional: contribute data to the Morning Briefing
  "briefingSources": [
    {
      "name": "My Notifications",
      "tool": "my_tool",
      "args": { "query": "notifications" },
      "priority": 5
    }
  ]
}`}
        </pre>
      </section>

      {/* Server Config */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          Server Configuration
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Field</th>
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Type</th>
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Req</th>
                <th className="px-5 py-3 text-left font-mono font-semibold text-[var(--color-text-primary)]">Notes</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              {[
                ["type", "string", "yes", "Unique server type identifier"],
                ["port", "number", "yes", "Must not conflict with existing plugins"],
                ["label", "string", "yes", "Display name"],
                ["runtime", "string", "no", "'python' | 'binary' | 'node'"],
                ["packages", "string[]", "no", "Pip packages, always pin versions"],
                ["scriptName", "string", "no", "Filename for the server script"],
                ["healthCheck", "string", "no", "Health endpoint path (default: /)"],
              ].map(([field, type, req, notes]) => (
                <tr key={field} className="border-b border-[var(--color-border)]">
                  <td className="px-5 py-3 font-mono text-[var(--color-accent)]">{field}</td>
                  <td className="px-5 py-3 font-mono">{type}</td>
                  <td className="px-5 py-3">{req}</td>
                  <td className="px-5 py-3">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conventions */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          Conventions
        </h2>
        <div className="mt-6 space-y-6 text-sm text-[var(--color-text-secondary)]">
          {[
            {
              title: "Ports",
              content: "Pick a unique port that doesn't conflict. Current allocations: 3000 (Next.js), 8880 (Kokoro TTS), 8891 (KokoClone), 9000 (Whisper STT).",
            },
            {
              title: "IDs",
              content: "Always kebab-case. Plugin ID, server type, and directory name should be consistent.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="mt-1">{item.content}</p>
            </div>
          ))}

          <div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)]">
              Python Servers
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-1.5">
              <li>
                Accept port as <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">sys.argv[1]</code>
              </li>
              <li>
                Expose <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">GET /</code> health
                endpoint returning JSON
              </li>
              <li>
                Set{" "}
                <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">
                  X-OwnTerm-Server: &lt;serverType&gt;
                </code>{" "}
                response header
              </li>
              <li>
                Print startup with{" "}
                <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">[serverType]</code> prefix,{" "}
                <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">flush=True</code>
              </li>
              <li>
                Bind to <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">127.0.0.1</code> only
                (never <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">0.0.0.0</code>)
              </li>
            </ul>
          </div>

          {[
            {
              title: "Pip Packages",
              content: <>Always pin versions (e.g., <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">flask==3.1.0</code>).</>,
            },
            {
              title: "Tool Handlers",
              content: (
                <>
                  Tool plugins export an{" "}
                  <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">execute(toolName, args)</code>{" "}
                  function in their handler file. Use{" "}
                  <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">execFile</code> (not{" "}
                  <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">exec</code>) for spawning
                  external processes to prevent shell injection.
                </>
              ),
            },
            {
              title: "How to Use Description",
              content: (
                <>
                  When submitting a plugin, include a{" "}
                  <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">howToUse</code> field in your
                  submission. This is a plain-English guide shown to users on the
                  plugin directory.
                </>
              ),
            },
            {
              title: "Briefing Sources",
              content: (
                <>
                  Plugins can contribute data to the Morning Briefing by declaring a{" "}
                  <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">briefingSources</code> array
                  in their manifest. Each source specifies a tool name, arguments,
                  and a priority (lower = more important).
                </>
              ),
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="mt-1">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section className="mt-14">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
          Plugin Lifecycle
        </h2>
        <ol className="mt-5 list-inside list-decimal space-y-3 text-sm text-[var(--color-text-secondary)]">
          <li>
            OwnTerm scans{" "}
            <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">~/.ownterm/plugins/</code> for{" "}
            <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">manifest.json</code> files on
            startup
          </li>
          <li>
            Manifests are validated and registered into the appropriate
            registries
          </li>
          <li>
            When a server plugin is needed:{" "}
            <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">lifecycle.ensureServer(type)</code>{" "}
            checks if already running
          </li>
          <li>
            If not installed: creates venv, pip installs packages, writes script
            to disk
          </li>
          <li>
            Process manager spawns the server and writes PID to{" "}
            <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">~/.ownterm/pids/</code>
          </li>
          <li>Health check polls the health endpoint (60s timeout)</li>
          <li>
            Plugin state persists in{" "}
            <code className="font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded">
              ~/.ownterm/plugin-state.json
            </code>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="mt-20 card-gradient p-10 text-center">
        <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Ready to build?
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Check out the built-in plugins as reference, then submit yours to the
          directory.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)]"
          >
            View Source
          </a>
          <a
            href="/plugins/submit"
            className="glow-accent rounded-xl bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-semibold text-[var(--color-surface-0)] transition-all duration-300 hover:brightness-110"
          >
            Submit a Plugin
          </a>
        </div>
      </section>
    </div>
  );
}
