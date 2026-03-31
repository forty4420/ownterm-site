import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";

const FEATURES = [
  {
    icon: "🌅",
    title: "Morning Briefing",
    description:
      "Wake up to a spoken briefing. OwnTerm gathers GitHub notifications, Reddit mentions, and more overnight — then delivers a personalized summary when you open the app.",
  },
  {
    icon: "🌐",
    title: "Browser Bridge",
    description:
      "Access 55+ web platforms through your existing Chrome sessions. No API keys — if you're logged in, OwnTerm can read it. Powered by opencli-rs.",
  },
  {
    icon: "🎙️",
    title: "Voice Chat",
    description:
      "Talk to your AI with local Whisper speech-to-text and Kokoro text-to-speech. Clone any voice with KokoClone. No cloud APIs required.",
  },
  {
    icon: "🎭",
    title: "Persona System",
    description:
      "Hot-swap between AI personas with unique voices and personalities. Built-in GERTY personality or create your own.",
  },
  {
    icon: "🧩",
    title: "Plugin Architecture",
    description:
      "Install plugins from GitHub repos or local files. Dynamic loading with no rebuilds. Four registries: server, TTS, provider, and UI.",
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    description:
      "Everything runs on your machine. Your conversations, your voice data, your models — nothing leaves your network.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "oklch(0.55 0.15 195)" }}
        />
        <div
          className="absolute right-1/4 top-1/2 h-[300px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "oklch(0.60 0.12 75)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-28 sm:pt-36 text-center">
          {/* Terminal prompt badge */}
          <div className="animate-fade-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] px-4 py-2 font-mono text-sm text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-accent)]">$</span>
            <span>npx ownterm</span>
            <span
              className="inline-block h-4 w-0.5 bg-[var(--color-accent)]"
              style={{ animation: "cursor-blink 1s step-end infinite" }}
            />
          </div>

          <h1 className="animate-fade-up delay-1 font-[var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]">
            Your Terminal.{" "}
            <span className="glow-text text-[var(--color-accent)]">
              Your AI.
            </span>{" "}
            <br className="hidden sm:block" />
            Your Machine.
          </h1>

          <p className="animate-fade-up delay-2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
            A voice-first AI terminal that runs entirely on your hardware.
            Morning briefings, local speech, voice cloning, custom personas,
            and a plugin system that lets you extend everything.
          </p>

          <div className="animate-fade-up delay-3 mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/plugins"
              className="glow-accent rounded-xl bg-[var(--color-accent)] px-7 py-3.5 font-mono text-sm font-semibold text-[var(--color-surface-0)] transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Plugins
            </Link>
            <a
              href="https://github.com/forty4420/ownterm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-7 py-3.5 font-mono text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] active:scale-[0.98]"
            >
              GitHub
            </a>
          </div>

          {/* Terminal preview hint */}
          <div className="animate-fade-up delay-5 mt-16 mx-auto max-w-xl">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] p-5 font-mono text-sm text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-[var(--color-text-muted)]">ownterm</span>
              </div>
              <div className="space-y-1.5 text-[var(--color-text-secondary)]">
                <p>
                  <span className="text-[var(--color-accent)]">ownterm</span>
                  <span className="text-[var(--color-text-muted)]"> ~</span>
                  <span className="text-[var(--color-warm)]"> GERTY</span>
                </p>
                <p className="text-[var(--color-text-muted)]">
                  Good morning. You have 3 GitHub notifications and a Reddit mention.
                </p>
                <p className="text-[var(--color-text-muted)]">
                  Shall I read your briefing, or would you like to start fresh?
                </p>
                <p className="mt-2">
                  <span className="text-[var(--color-accent)]">{">"}</span>{" "}
                  <span
                    className="inline-block h-4 w-0.5 bg-[var(--color-accent)] align-middle"
                    style={{ animation: "cursor-blink 1s step-end infinite" }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-[var(--color-border)] bg-[var(--color-surface-0)]">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              What&apos;s Inside
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-lg mx-auto">
              Every feature runs locally. No subscriptions, no telemetry, no cloud dependency.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} index={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {[
              { value: "20+", label: "Built-in Plugins" },
              { value: "15+", label: "Local Voices" },
              { value: "55+", label: "Web Platforms" },
              { value: "0", label: "Cloud Dependencies" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-accent)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.55 0.15 195), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Build Your Own Plugin
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--color-text-secondary)]">
            Extend OwnTerm with custom STT engines, TTS voices, chat providers,
            tool handlers, and more. No rebuild required.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/authoring"
              className="rounded-xl border border-[var(--color-border-accent)] bg-[var(--color-surface-1)] px-7 py-3.5 font-mono text-sm font-semibold text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-surface-2)] hover:border-[var(--color-accent)] active:scale-[0.98]"
            >
              Read the Authoring Guide
            </Link>
            <Link
              href="/plugins/submit"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-7 py-3.5 font-mono text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] active:scale-[0.98]"
            >
              Submit a Plugin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
