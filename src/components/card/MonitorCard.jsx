import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certificationLogos } from "@/utils/certificationLogos";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import { Scale } from "lucide-react";
import CldImage from "@/components/ui/CldImage";
import Image from "next/image";
import Link from "next/link";
import { formatBDT } from "@/utils/formatBDT";

export default function MonitorCard({ monitor, className = "" }) {
  const {
    slug,
    model,
    brand,
    thumbnail_url,
    size,
    panel,
    refresh_rate,
    delta_e_avg,
    srgb,
    price,
    data_source,
  } = monitor;

  const details_url = `/monitors/${brand?.toLowerCase()}/${slug}`;

  return (
    <div
      className={cn("group bg-card overflow-hidden rounded border", className)}
    >
      <div className="bg-white p-2">
        <Link
          href={details_url}
          className="relative block h-70 overflow-hidden"
        >
          <CldImage
            src={thumbnail_url}
            alt={model}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain transition-transform duration-300 ease-linear group-hover:scale-105"
          />
        </Link>
      </div>

      {/* content */}
      <div className="border-t px-4 py-3.5">
        {/* brand + certification */}
        <div className="mb-2 flex items-center justify-between gap-x-2">
          <p className="text-muted-foreground w-fit rounded border px-1 py-0.5 text-[10px] font-medium tracking-wider uppercase">
            {brand}
          </p>
          {data_source && (
            <div className="inline-flex items-center gap-1">
              <Image
                src={certificationLogos[data_source]}
                alt={data_source}
                width={12}
                height={12}
              />
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider capitalize">
                {data_source} verified
              </p>
            </div>
          )}
        </div>

        {/* model */}
        <Link
          href={details_url}
          className="text-foreground mt-1 block text-[15px] leading-snug font-semibold hover:underline"
        >
          {model}
        </Link>

        {/* specs — one clean line */}
        <p className="text-muted-foreground mt-1.5 text-[12px]">
          {size}&quot; • {panel} • QHD • {refresh_rate}Hz
        </p>

        {/* accuracy row */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground text-[11px]">ΔE</span>
            <span
              className={`text-[13px] font-bold ${getDeltaEColor(delta_e_avg)}`}
            >
              {delta_e_avg ?? "—"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground text-[11px]">sRGB</span>
            <span className="text-foreground text-[13px] font-semibold">
              {srgb ? `${srgb}%` : "—"}
            </span>
          </div>
        </div>

        {/* price + compare */}
        <div className="mt-3.5 flex items-center justify-between border-t pt-3.5">
          <p className="text-lg font-bold">{formatBDT(price)}</p>
          <Button size="sm" variant="outline">
            <Scale className="h-3.5 w-3.5" />
            <span>Compare</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
