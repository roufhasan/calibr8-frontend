import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";
import { getPercentage } from "@/utils/getPercentage";

export default function ColorMetrics({ monitor }) {
  const { colorMetrics } = monitor;

  const deltaEPosition = getPercentage(colorMetrics.deltaE, 5);
  const srgbWidth = getPercentage(colorMetrics.srgb, 100);
  const dcip3Width = getPercentage(colorMetrics.dciP3, 100);
  const adobeRgbWidth = getPercentage(colorMetrics.adobeRgb, 100);
  const ntscWidth = getPercentage(colorMetrics.ntsc, 100);

  function getDeltaELabel(value) {
    if (value < 1) return "Imperceptible to the human eye";
    if (value < 2) return "Excellent — professional grade";
    if (value < 4) return "Acceptable for general use";
    return "Noticeable — not recommended for color work";
  }

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="color accuracy" />

        <div className="grid min-w-0 grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Delta E */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium">Delta E (ΔE Average)</p>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Measures color deviation from reference. &lt;1 is
                    imperceptible.
                  </p>
                </div>
                <span className="font-sans text-xl leading-none font-bold text-emerald-600">
                  {colorMetrics.deltaE}
                </span>
              </div>

              <div>
                <div className="relative h-2 w-full">
                  <div className="absolute inset-0 rounded bg-linear-to-r from-emerald-600 via-amber-500 to-red-500" />
                  <div
                    style={{ left: `${deltaEPosition}%` }}
                    className="absolute top-1/2 z-50 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-600"
                  />
                </div>
                <div className="text-muted-foreground mt-2 flex items-center justify-between text-xs">
                  <p>0 — Perfect</p>
                  <p>2 — Acceptable</p>
                  <p>5+ — Poor</p>
                </div>
              </div>

              <p className="text-xs font-medium text-emerald-600">
                {getDeltaELabel(colorMetrics.deltaE)}
              </p>
            </div>

            {/* Peak Brightness */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Peak Brightness</p>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  SDR content · Measured peak luminance
                </p>
              </div>
              <span className="font-sans leading-none font-semibold">
                250 <span className="text-sm font-normal">nits</span>
              </span>
            </div>

            {/* HDR Standard */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">HDR Standard</p>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  Minimum 400 nits peak · Local dimming: No
                </p>
              </div>
              <span className="font-sans leading-none font-semibold">
                HDR400
              </span>
            </div>
          </div>

          {/* Color Gamut */}
          <div>
            <p className="text-sm font-medium">Color Gamut Coverage</p>

            <ul className="mt-4 space-y-5">
              <li>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-medium">sRGB</span>
                  <span className="text-sm font-medium text-emerald-600">
                    {srgbWidth.toFixed(1)}%
                  </span>
                </div>
                <div className="bg-secondary relative h-1.5 w-full overflow-hidden rounded">
                  <div
                    style={{ width: `${srgbWidth}%` }}
                    className="absolute top-0 left-0 h-full bg-emerald-600"
                  />
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Standard for web & general use. 99%+ is professional grade.
                </p>
              </li>

              <li>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-medium">DCI-P3</span>
                  <span className="text-sm font-medium text-emerald-600">
                    {dcip3Width.toFixed(1)}%
                  </span>
                </div>
                <div className="bg-secondary relative h-1.5 w-full overflow-hidden rounded">
                  <div
                    style={{ width: `${dcip3Width}%` }}
                    className="absolute top-0 left-0 h-full bg-emerald-600"
                  />
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Cinema standard. 90%+ suits professional video work.
                </p>
              </li>

              <li>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-medium">Adobe RGB</span>
                  <span className="text-sm font-medium text-amber-500">
                    {adobeRgbWidth.toFixed(1)}%
                  </span>
                </div>
                <div className="bg-secondary relative h-1.5 w-full overflow-hidden rounded">
                  <div
                    style={{ width: `${adobeRgbWidth}%` }}
                    className="absolute top-0 left-0 h-full bg-amber-400"
                  />
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Used in print & photography workflows.
                </p>
              </li>

              <li>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-medium">NTSC</span>
                  <span className="text-sm font-medium text-amber-500">
                    {ntscWidth.toFixed(1)}%
                  </span>
                </div>
                <div className="bg-secondary relative h-1.5 w-full overflow-hidden rounded">
                  <div
                    style={{ width: `${ntscWidth}%` }}
                    className="absolute top-0 left-0 h-full bg-amber-400"
                  />
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Broadcast standard. Higher = wider color range.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
