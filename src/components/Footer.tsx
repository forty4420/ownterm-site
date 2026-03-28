export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
        <span className="font-mono">
          <span className="text-blue-400">Own</span>Term
        </span>
        <div className="flex gap-4">
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
