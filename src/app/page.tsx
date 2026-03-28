import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";

const FEATURES = [
  {
    icon: "\ud83c\udf99\ufe0f",
    title: "Voice Chat",
    description:
      "Talk to your AI with local Whisper speech-to-text and Kokoro text-to-speech. No API keys needed for fully local operation.",
  },
  {
    icon: "\ud83c\udfad",
    title: "Persona System",
    description:
      "Hot-swap between AI personas with unique voices and personalities. Built-in GERTY personality or create your own.",
  },
  {
    icon: "\ud83e\udde9",
    title: "Plugin Architecture",
    description:
      "Install plugins from GitHub repos or local files. Dynamic loading with no rebuilds. Four registries: server, TTS, provider, and UI.",
  },
  {
    icon: "\ud83d\udd12",
    title: "Privacy-First",
    description:
      "Everything runs on your machine. Your conversations, your voice data, your models \u2014 nothing leaves your network.",
  },
  {
    icon: "\u2728",
    title: "Claude CLI",
    description:
      "Use Claude Code as a chat provider directly inside OwnTerm. Full streaming support with model selection.",
  },
  {
    icon: "\ud83e\uddec",
    title: "Voice Cloning",
    description:
      "Clone any voice from short audio samples with KokoClone. Assign cloned voices to personas for a fully custom experience.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Terminal.{" "}
          <span className="text-blue-400">Your AI.</span>{" "}
          Your Machine.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          A voice-first AI terminal that runs entirely on your machine. Local
          speech-to-text, text-to-speech, voice cloning, custom personas, and a
          plugin system that lets you extend everything.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/plugins"
            className="rounded-lg bg-blue-600 px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            View Plugins
          </Link>
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-12 text-center font-mono text-2xl font-bold">
          What&apos;s Inside
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-mono text-2xl font-bold">
            Build Your Own Plugin
          </h2>
          <p className="mt-3 text-zinc-400">
            Extend OwnTerm with custom STT engines, TTS voices, chat providers,
            and more.
          </p>
          <Link
            href="/docs/authoring"
            className="mt-6 inline-block rounded-lg border border-zinc-700 px-6 py-3 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Read the Authoring Guide
          </Link>
        </div>
      </section>
    </div>
  );
}
