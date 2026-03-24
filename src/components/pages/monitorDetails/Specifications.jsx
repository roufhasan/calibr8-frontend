import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";
import { cn } from "@/lib/utils";

export default function Specifications({ monitor }) {
  const {
    panel,
    size,
    resolution_w,
    resolution_h,
    resolution_label,
    refresh_rate,
    response_time,
    hdr_supported,
    hdr_certification,
    brightness,
    contrast_ratio,
    ports,
    ergonomics,
    aspect_ratio,
    curvature,
    bit_depth,
    surface,
    freesync,
    freesync_tier,
    gsync,
  } = monitor;

  const connectivity = [
    ports?.hdmi ? `HDMI ${ports.hdmi.version} ×${ports.hdmi.count}` : null,
    ports?.displayport
      ? `DisplayPort ${ports.displayport.version} ×${ports.displayport.count}`
      : null,
    ports?.audio ? `Audio Out ×${ports.audio.count}` : null,
  ].filter(Boolean);

  const groups = [
    {
      heading: "Display",
      specs: [
        { label: "Panel Type", value: panel },
        { label: "Screen Size", value: `${size}"` },
        { label: "Aspect Ratio", value: aspect_ratio },
        {
          label: "Resolution",
          value: `${resolution_w}x${resolution_h} (${resolution_label})`,
        },
        { label: "Bit Depth", value: bit_depth },
        { label: "Surface", value: surface },
        { label: "Curvature", value: curvature },
      ],
    },
    {
      heading: "Performance",
      specs: [
        { label: "Refresh Rate", value: `${refresh_rate}Hz` },
        { label: "Response Time", value: `${response_time}ms` },
        {
          label: "FreeSync",
          value: freesync ? (freesync_tier ?? "Supported") : null,
        },
        { label: "G-Sync", value: gsync ?? null },
      ],
    },
    {
      heading: "HDR & Brightness",
      specs: [
        {
          label: "HDR",
          value: hdr_supported ? (hdr_certification ?? "Supported") : null,
        },
        {
          label: "Peak Brightness",
          value: brightness ? `${brightness} nits` : null,
        },
        {
          label: "Contrast Ratio",
          value: contrast_ratio ? `${contrast_ratio}:1` : null,
        },
      ],
    },
    {
      heading: "Physical & Connectivity",
      specs: [
        {
          label: "Connectivity",
          value: connectivity.length ? connectivity.join(" · ") : null,
        },
        { label: "VESA Mount", value: ergonomics?.vesa ?? null },
        {
          label: "Weight",
          value: ergonomics?.weight_kg ? `${ergonomics.weight_kg} kg` : null,
        },
      ],
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Full Specifications" />
        <div className="flex flex-col gap-8">
          {groups.map((group) => {
            const filtered = group.specs.filter((s) => s.value !== null);
            if (!filtered.length) return null;

            return (
              <div key={group.heading}>
                <p className="text-foreground/50 mb-2 text-xs font-medium tracking-widest uppercase">
                  {group.heading}
                </p>
                <ul>
                  {filtered.map((spec, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 text-sm first:border-t last:border-b",
                        i % 2 === 0 ? "bg-secondary/50" : "",
                      )}
                    >
                      <span className="text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="font-medium">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
