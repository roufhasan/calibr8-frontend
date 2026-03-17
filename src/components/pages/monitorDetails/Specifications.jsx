import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";
import { cn } from "@/lib/utils";

export default function Specifications({ monitor }) {
  const { panel, connectivity, physical } = monitor;

  const specs = [
    { label: "Panel Type", value: panel.type },
    { label: "Screen Size", value: `${panel.size}"` },
    { label: "Resolution", value: panel.resolution },
    { label: "Refresh Rate", value: `${panel.refreshRate}Hz` },
    { label: "Response Time", value: panel.responseTime },
    { label: "HDR Support", value: panel.hdrSupport ?? null },
    { label: "Peak Brightness", value: panel.brightness ?? null },
    { label: "Contrast Ratio", value: panel.contrastRatio ?? null },
    { label: "Connectivity", value: connectivity?.join(", ") ?? null },
    { label: "VESA Mount", value: physical.vesa ?? null },
    { label: "Dimensions", value: physical.dimensions ?? null },
    { label: "Weight", value: physical.weight ?? null },
  ];

  const filteredSpecs = specs.filter((spec) => spec.value !== null);

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Full Specifications" />
        <ul>
          {filteredSpecs.map((spec, i) => (
            <li
              key={i}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 text-sm first:border-t last:border-b",
                i % 2 === 0 ? "bg-secondary/50" : "",
              )}
            >
              <span className="text-muted-foreground">{spec.label}</span>
              <span className="font-medium">{spec.value}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
