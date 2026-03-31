interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <div
      className={`card-gradient animate-fade-up p-6 sm:p-7`}
      style={{ animationDelay: `${(index + 1) * 80}ms` }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-xl">
        {icon}
      </div>
      <h3 className="mb-2 font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}
