import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import { Button } from "../ui/button";
import CldImage from "../ui/CldImage";
import { cn } from "@/lib/utils";
import { certificationLogos } from "@/utils/certificationLogos";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import { formatBDT } from "@/utils/formatBDT";

export default function MonitorListCard({ monitor, className = "" }) {
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

  const details_url = `/monitors/${brand?.toLowerCase()}/${slug}`;

  return (
    <div
      className={cn(
        "group bg-card flex items-center rounded border",
        className,
      )}
    >
      {/* thumbnail */}
      <Link
        href={details_url}
        className="bg-muted relative h-22 w-33 shrink-0 overflow-hidden border-r"
      >
        <CldImage
          src={thumbnail_url}
          alt={model}
          fill
          sizes="132px"
          className="object-contain p-2 transition-transform duration-300 ease-linear group-hover:scale-105"
        />
      </Link>

      {/* model info */}
      <div className="flex flex-1 items-center gap-6 px-4 py-3">
        {/* name & brand */}
        <div className="flex-2">
          <div className="mb-1 flex items-center gap-2">
            <p className="text-muted-foreground rounded border px-1 py-0.5 text-[10px] font-medium tracking-wider uppercase">
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
                <p className="text-muted-foreground text-[10px] tracking-wider capitalize">
                  {data_source} verified
                </p>
              </div>
            )}
          </div>
          <Link
            href={details_url}
            className="inline-block w-fit truncate text-sm leading-snug font-semibold hover:underline"
          >
            {model}
          </Link>
        </div>

        {/* panel */}
        <div className="text-muted-foreground hidden flex-1 text-xs md:block">
          <p className="font-medium">
            {size}&quot; • {panel}
          </p>
          <p className="mt-0.5">
            {resolution_w}×{resolution_h}
          </p>
        </div>

        {/* refresh rate */}
        <div className="text-muted-foreground hidden text-center text-xs lg:block">
          <p className="text-sm font-semibold">{refresh_rate}Hz</p>
          <p className="mt-0.5">Refresh</p>
        </div>

        {/* delta e */}
        <div className="hidden text-center text-xs lg:block">
          <p className={`text-sm font-semibold ${getDeltaEColor(delta_e_avg)}`}>
            {delta_e_avg ?? "—"}
          </p>
          <p className="text-muted-foreground mt-0.5">Avg ΔE</p>
        </div>

        {/* srgb */}
        <div className="hidden text-center text-xs xl:block">
          <p className="text-sm font-semibold">{srgb ? `${srgb}%` : "—"}</p>
          <p className="text-muted-foreground mt-0.5">sRGB</p>
        </div>

        {/* price & cta */}
        <div className="ml-auto flex shrink-0 items-center gap-3 pl-4">
          <p className="font-bold">{formatBDT(price)}</p>
          <Button size="sm" variant="outline" className="shrink-0">
            <Scale /> <span>Compare</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
