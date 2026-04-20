import Container from "@/components/shared/Container";
import DetailSectionHeading from "@/components/shared/DetailSectionHeading";
import SpecTable from "./SpecTable";
import { formatPortList } from "@/utils/formatPortList";

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

  const connectivity = formatPortList(ports, true);

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
        <DetailSectionHeading title="Full specifications." />

        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <SpecTable key={group.heading} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
