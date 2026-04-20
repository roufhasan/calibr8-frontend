import { Scale } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { formatPortList } from "@/utils/formatPortList";

export default function Details({ monitor }) {
  const {
    size,
    resolution_w,
    resolution_h,
    price,
    model,
    panel,
    refresh_rate,
    response_time,
    hdr_supported,
    hdr_certification,
    resolution_label,
    ports,
  } = monitor;

  const connectivity = formatPortList(ports);

  const specs = [
    { label: "Size", value: `${size}"` },
    {
      label: "Resolution",
      value: `${resolution_w}×${resolution_h} (${resolution_label})`,
    },
    { label: "Panel", value: panel },
    { label: "Refresh", value: `${refresh_rate}Hz` },
    { label: "Response", value: `${response_time}ms (GtG)` },
    hdr_supported
      ? { label: "HDR", value: hdr_certification ?? "Supported" }
      : null,
  ].filter((item) => item?.label);

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="mb-1 font-sans text-3xl leading-tight font-bold">
        {model}
      </h1>

      <p className="mb-5 text-2xl font-semibold">৳{price.toLocaleString()}</p>

      <Separator className="mb-4" />

      {/* specs grid */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-2.5">
        {specs.map(({ label, value }) => (
          <div key={label} className="flex items-baseline gap-3">
            <span className="text-muted-foreground w-20 shrink-0 text-xs">
              {label}
            </span>
            <span className="text-sm font-medium">{value}</span>
          </div>
        ))}
      </div>

      {/* ports */}
      {connectivity.length > 0 && (
        <div className="mt-2.5 flex items-start gap-3">
          <span className="text-muted-foreground mt-0.5 w-20 shrink-0 text-xs">
            Ports
          </span>
          <div className="flex flex-wrap gap-x-0 gap-y-1">
            {connectivity.map((port, i) => (
              <span key={port} className="text-sm font-medium">
                {port}
                {i < connectivity.length - 1 && (
                  <span className="text-muted-foreground mx-2">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      <Button className="mt-6 w-fit" variant="outline">
        <Scale /> Add to Compare
      </Button>
    </div>
  );
}
