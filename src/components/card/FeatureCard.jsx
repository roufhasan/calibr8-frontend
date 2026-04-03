import { cn } from "@/lib/utils";

export default function FeatureCard({ feature, variant = "methodology" }) {
  const { label, title, description, step } = feature;

  const isProcess = variant === "process";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-t py-6 lg:border-l lg:p-8 lg:first:border-l-0 lg:first:pl-0",
        isProcess && "border-t-0 lg:border-l-0",
      )}
    >
      {isProcess && step && (
        <span
          className="pointer-events-none absolute top-0 right-0 font-sans text-[100px] leading-none font-bold opacity-[0.04] select-none"
          aria-hidden="true"
        >
          {step}
        </span>
      )}

      <p
        className={cn(
          "text-primary text-[9px] tracking-[0.14em] uppercase",
          isProcess &&
            "after:bg-primary/25 flex items-center gap-2 after:h-px after:flex-1 after:content-['']",
        )}
      >
        {label}
      </p>

      <h3 className="mt-3 w-full leading-snug font-semibold">{title}</h3>

      <p className="text-muted-foreground mt-2.5 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
