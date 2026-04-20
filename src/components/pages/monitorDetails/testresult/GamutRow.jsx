import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function getRatingStyles(value, metric) {
  if (value >= metric.excellent) return "var(--success)";
  if (value >= metric.good) return "var(--success-muted)";
  return "var(--destructive)";
}

export default function GamutRow({ metric }) {
  const { ceiling, context, description, excellent, good, label, value } =
    metric;

  const barWidth = Math.min((value / ceiling) * 100, 100);
  const rangeMinGood = (good / ceiling) * 100;
  const rangeMaxExcellent = (excellent / ceiling) * 100;

  const color = getRatingStyles(value, metric);

  return (
    <div className="py-3 first:pt-0 last:pb-0">
      {/* value & tooltip */}
      <div className="mb-2 flex items-center justify-between gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="w-fit cursor-default text-xs font-medium tracking-widest uppercase underline decoration-dotted underline-offset-2">
              {label}
            </p>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-60 space-y-2 p-3">
            <p className="text-xs font-medium">{label}</p>
            <p className="text-card-foreground/80 text-xs leading-relaxed">
              {description}
            </p>
            <p className="text-card-foreground/50 border-border mt-1 border-t pt-2 text-[10px] leading-relaxed">
              {context}
            </p>
            <p className="text-card-foreground/40 text-[10px]">
              Good ≥<span className="text-primary">{good}%</span>
              {" · "}
              Excellent ≥<span className="text-primary">{excellent}%</span>
              {ceiling < 100 && (
                <>
                  {" · "}
                  max ~<span className="text-primary">{ceiling}%</span>
                </>
              )}
            </p>
          </TooltipContent>
        </Tooltip>

        <span
          className="shrink-0 text-sm font-semibold tabular-nums"
          style={{ color: color }}
        >
          {value.toFixed(1)}%
        </span>
      </div>

      {/* line bar */}
      <div className="bg-border relative h-1 w-full">
        <div
          className="absolute top-0 left-0 h-full rounded"
          style={{ width: `${barWidth}%`, background: color }}
        />
        {/* vertical min range line */}
        <div
          className="bg-muted-foreground/40 absolute top-1/2 h-2.5 w-px -translate-y-1/2"
          style={{ left: `${rangeMinGood}%` }}
        />
        {/* vertical max range line */}
        <div
          className="bg-muted-foreground/70 absolute top-1/2 h-2.5 w-px -translate-y-1/2"
          style={{ left: `${rangeMaxExcellent}%` }}
        />
      </div>

      <div className="relative mt-0.5 h-3.5">
        <span
          className="text-muted-foreground/60 absolute -translate-x-1/2 text-[9px] leading-none"
          style={{ left: `${rangeMinGood}%` }}
        >
          {good}
        </span>
        <span
          className="text-muted-foreground absolute -translate-x-1/2 text-[9px] leading-none"
          style={{ left: `${rangeMaxExcellent}%` }}
        >
          {excellent}
        </span>
      </div>
    </div>
  );
}
