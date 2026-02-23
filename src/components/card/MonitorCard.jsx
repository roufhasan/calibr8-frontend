import { Button } from "@/components/ui/button";
import { certificationLogos } from "@/utils/certificationLogos";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import { Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MonitorCard({ monitor }) {
  const {
    brand,
    name,
    price,
    imageUrl,
    screenSize,
    resolution,
    refreshRate,
    panelType,
    certification,
    slug,
    deltaE,
    srgb,
  } = monitor;

  return (
    <div className="group bg-card min-w-xs overflow-hidden rounded border">
      <Link
        href={`/monitors/${brand}/${slug}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
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

          {certification && (
            <div className="inline-flex items-center gap-1 rounded">
              <Image
                src={certificationLogos[certification]}
                alt={certification}
                width={14}
                height={14}
              />
              <p className="text-muted-foreground text-[11px] font-medium tracking-wider capitalize">
                {certification} verified
              </p>
            </div>
          )}
        </div>

        <Link
          href={`/monitors/${brand}/${slug}`}
          className="text-foreground mt-1 block text-base leading-snug font-semibold hover:underline"
        >
          {name}
        </Link>

        <div className="text-muted-foreground mt-3 space-y-2 text-[13px]">
          <div className="flex items-center justify-between">
            <span>
              {screenSize}&quot; • {panelType}
            </span>
            <span>{resolution}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>{refreshRate}Hz</span>
            <div className="flex items-center gap-2">
              <span className={`font-semibold ${getDeltaEColor(deltaE)}`}>
                ΔE {deltaE}
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
