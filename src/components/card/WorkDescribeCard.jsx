export default function WorkDescribeCard({ step }) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-start sm:items-center sm:px-6 sm:text-center">
      {/* Icon circle */}
      <div className="bg-background border-border relative z-10 mb-5 flex size-16 items-center justify-center rounded-full border">
        <Icon className="text-primary size-5" />
      </div>

      {/* Step number */}
      <span className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
        Step {step.number}
      </span>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold">{step.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
