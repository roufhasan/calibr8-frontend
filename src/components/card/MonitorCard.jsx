import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certificationLogos } from "@/utils/certificationLogos";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import { Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MonitorCard({ monitor, className = "" }) {
  const {
    slug,
    model,
    brand,
    thumbnail_url,
    size,
    panel,
    resolution_w,
    resolution_h,
    refresh_rate,
    delta_e_avg,
    srgb,
    price,
    data_source,
  } = monitor;

  return (
    <div
      className={cn("group bg-card overflow-hidden rounded border", className)}
    >
      <Link
        href={`/monitors/${brand}/${slug}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          fill
          src={thumbnail_url}
          alt={model}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
        />
      </Link>

      {/* content */}
      <div className="border-t px-4 py-3.5">
        {/* brand + certification row */}
        <div className="mb-2 flex items-center justify-between gap-x-2">
          <p className="text-muted-foreground w-fit rounded border px-1 py-0.5 text-[10px] font-medium tracking-wider uppercase">
            {brand}
          </p>

          {data_source && (
            <div className="inline-flex items-center gap-1 rounded">
              <Image
                src={certificationLogos[data_source]}
                alt={data_source}
                width={14}
                height={14}
              />
              <p className="text-muted-foreground text-[11px] font-medium tracking-wider capitalize">
                {data_source} verified
              </p>
            </div>
          )}
        </div>

        <Link
          href={`/monitors/${brand}/${slug}`}
          className="text-foreground mt-1 block text-base leading-snug font-semibold hover:underline"
        >
          {model}
        </Link>

        <div className="text-muted-foreground mt-3 space-y-2 text-[13px]">
          <div className="flex items-center justify-between">
            <span>
              {size}&quot; • {panel}
            </span>
            <span>{`${resolution_w}x${resolution_h}`}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>{refresh_rate}Hz</span>
            <div className="flex items-center gap-2">
              <span className={`font-semibold ${getDeltaEColor(delta_e_avg)}`}>
                ΔE {delta_e_avg}
              </span>
              <div className="bg-border inline-block h-3 w-px shrink-0" />
              <span>sRGB {srgb}%</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <p className="text-lg font-bold">${price}</p>
          <Button size="sm" variant="secondary" className="rounded text-xs">
            <Scale /> <span>Compare</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
