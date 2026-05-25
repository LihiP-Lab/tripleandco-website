interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="group rounded-2xl border border-border bg-background p-6 hover:border-brand/30 transition-all">
      <span className="text-4xl font-bold text-brand/20 group-hover:text-brand/40 transition-colors">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
