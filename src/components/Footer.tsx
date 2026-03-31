export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-0)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-[var(--color-text-muted)]">
        <span className="font-mono font-medium">
          <span className="text-[var(--color-accent)]">Own</span>
          <span className="text-[var(--color-text-secondary)]">Term</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/forty4420/ownterm"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[var(--color-text-secondary)]"
          >
            GitHub
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
