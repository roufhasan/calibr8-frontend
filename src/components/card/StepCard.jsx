export default function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-start sm:items-center sm:px-6 sm:text-center">
      <div className="relative z-10 mb-5 flex size-16 items-center justify-center rounded-full bg-[#EDEFFD]">
        <Icon className="text-primary size-5" />
      </div>

      <span className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
        Step {step.number}
      </span>

      <h3 className="mb-2 text-base font-semibold">{step.title}</h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
