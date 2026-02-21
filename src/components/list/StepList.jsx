import { ChevronDown } from "lucide-react";

export default function StepList({ step, index, selectedStep, handleStep }) {
  return (
    <li className="text-muted-foreground group border-b last:border-b-0">
      <button
        onClick={() => handleStep(step)}
        className={`flex w-full items-center justify-between gap-4 py-5 ${step.id === selectedStep.id && "text-foreground"}`}
      >
        <span className="flex items-center gap-3">
          <span className="text-primary w-6 shrink-0 text-sm tabular-nums">
            0{index + 1}
          </span>
          <span className="text-base leading-snug font-medium">
            {step.title}
          </span>
        </span>

        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${
            selectedStep.id === step.id ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden opacity-100 transition-all duration-250 ease-linear ${step.id === selectedStep.id ? "grid-rows-[1fr] pb-5 pl-9" : "grid-rows-[0fr]"}`}
      >
        <p className="overflow-hidden text-sm leading-relaxed">{step.desc}</p>
      </div>
    </li>
  );
}
