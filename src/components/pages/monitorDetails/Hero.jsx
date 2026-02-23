"use client";
import Image from "next/image";
import { useState } from "react";
import { GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { certificationLogos } from "@/utils/certificationLogos";
import Container from "@/components/shared/Container";

export default function Hero({ monitor }) {
  const { brand, certification, name, panel, price, colorMetrics, images } =
    monitor;

  const [previewThumb, setPreviewThumb] = useState(images[0]);

  return (
    <section className="py-12">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
        {/* Gallery — fixed width */}
        <div className="flex w-full shrink-0 flex-col gap-3 md:max-w-sm">
          <div className="bg-muted relative aspect-square w-full overflow-hidden rounded">
            <Image
              src={previewThumb}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            {images.map((image, i) => (
              <div
                key={`${image}_${i}`}
                className="bg-muted relative aspect-square w-full overflow-hidden rounded"
              >
                <Image
                  src={image}
                  alt={`${name} view ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details — takes remaining space */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground rounded border px-1.5 py-0.5 text-xs font-medium tracking-wider uppercase">
              {brand}
            </span>
            {certification && (
              <div className="inline-flex items-center gap-1">
                <Image
                  src={certificationLogos[certification]}
                  alt={certification}
                  width={14}
                  height={14}
                />
                <p className="text-muted-foreground text-xs font-medium tracking-wide capitalize">
                  {certification} verified
                </p>
              </div>
            )}
          </div>

          <h1 className="text-2xl leading-tight font-bold">{name}</h1>

          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Size
              </span>
              <span className="text-sm font-medium">{panel.size}&quot;</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Resolution
              </span>
              <span className="text-sm font-medium">{panel.resolution}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Panel
              </span>
              <span className="text-sm font-medium">{panel.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Refresh
              </span>
              <span className="text-sm font-medium">{panel.refreshRate}Hz</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Response
              </span>
              <span className="text-sm font-medium">{panel.responseTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                HDR
              </span>
              <span className="text-sm font-medium">{panel.hdrSupport}</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold">${price}</h2>

          <div>
            <Button
              size="sm"
              variant="outline"
              className="text-muted-foreground rounded"
            >
              <GitCompare /> Add to Compare
            </Button>
          </div>

          <Separator />

          <div className="flex h-4 items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-emerald-700">
                ΔE {colorMetrics.deltaE}
              </p>
              <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[11px] leading-none font-semibold text-white uppercase">
                Excellent
              </span>
            </div>
            <Separator orientation="vertical" className="h-full" />
            <p className="text-muted-foreground text-sm">
              sRGB {colorMetrics.srgb}%
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
