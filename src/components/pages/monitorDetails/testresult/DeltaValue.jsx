import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getPercentage } from "@/utils/getPercentage";

const getDeltaEColor = (value) => {
  if (value < 2) return "text-emerald-600";
  if (value < 4) return "text-amber-500";
  return "text-red-500";
};

const getDeltaELabel = (value) => {
  if (value < 1) return "Imperceptible to the human eye";
  if (value < 2) return "Excellent professional grade";
  if (value < 4) return "Acceptable for general use";
  return "Noticeable not recommended for color work";
};

const hdrTooltipContent = {
  null: "Accepts HDR signal - no VESA certification",
  HDR400: "Minimum 400 nits peak",
  HDR600: "Minimum 600 nits peak",
  HDR1000: "Minimum 1000 nits peak",
  "DisplayHDR True Black": "Minimum 0.0005 nits black level · OLED/QD-OLED",
};

export default function DeltaValue({ monitor }) {
  const {
    delta_e_avg,
    delta_e_max,
    brightness,
    hdr_supported,
    hdr_certification,
  } = monitor;

  const deltaEPosition = getPercentage(delta_e_avg, 10);

  return (
    <div className="flex flex-col divide-y">
      {/* Delta E Average */}
      <div className="pb-4">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <p className="text-xs font-medium tracking-widest uppercase">
            Delta E Average (ΔE)
          </p>
          <span
            className={`shrink-0 text-xl font-semibold tabular-nums ${getDeltaEColor(delta_e_avg)}`}
          >
            {delta_e_avg}
          </span>
        </div>
        <div className="relative h-1.5 w-full">
          <div className="absolute inset-0 rounded bg-linear-to-r from-emerald-600 via-amber-500 to-red-500" />
          <div
            style={{ left: `${deltaEPosition}%` }}
            className={`border-background absolute top-1/2 z-50 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${getDeltaEColor(delta_e_avg)}`}
          />
        </div>
        <div className="text-muted-foreground/60 mt-1.5 flex items-center justify-between text-[11px] tracking-wide uppercase">
          <span>0 Perfect</span>
          <span>4 Acceptable</span>
          <span>10 Poor</span>
        </div>
        <p
          className={`mt-2 text-[11px] font-medium tracking-wider uppercase ${getDeltaEColor(delta_e_avg)}`}
        >
          {getDeltaELabel(delta_e_avg)}
        </p>
      </div>

      {/* Delta E Max */}
      {delta_e_max && (
        <div className="flex items-baseline justify-between gap-4 py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="w-fit cursor-default text-xs font-medium tracking-widest uppercase underline decoration-dotted underline-offset-2">
                Delta E Max
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Worst case deviation</p>
            </TooltipContent>
          </Tooltip>
          <span
            className={`shrink-0 text-sm font-semibold tabular-nums ${getDeltaEColor(delta_e_max)}`}
          >
            {delta_e_max}
          </span>
        </div>
      )}

      {/* Peak Brightness */}
      <div className="flex items-baseline justify-between gap-4 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="w-fit cursor-default text-xs font-medium tracking-widest uppercase underline decoration-dotted underline-offset-2">
              Peak Brightness
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>SDR content · Measured peak luminance</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex shrink-0 items-baseline gap-1">
          <span className="text-sm font-semibold tabular-nums">
            {brightness}
          </span>
          <span className="text-muted-foreground ml-1 text-[10px] tracking-widest uppercase">
            nits
          </span>
        </div>
      </div>

      {/* HDR */}
      {hdr_supported && (
        <div className="flex items-baseline justify-between gap-4 py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="w-fit cursor-default text-xs font-medium tracking-widest uppercase underline decoration-dotted underline-offset-2">
                HDR
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {hdrTooltipContent[hdr_certification] ?? "DisplayHDR certified"}
              </p>
            </TooltipContent>
          </Tooltip>
          <span className="shrink-0 rounded border px-2 py-0.5 text-[10px] font-semibold tracking-widest uppercase">
            {hdr_certification ?? "Supported"}
          </span>
        </div>
      )}
    </div>
  );
}
