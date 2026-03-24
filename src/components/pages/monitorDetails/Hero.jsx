import Image from "next/image";
import { GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { certificationLogos } from "@/utils/certificationLogos";
import Container from "@/components/shared/Container";
import ColorChart from "./ColorChart";
import CldImage from "@/components/ui/CldImage";

export default function Hero({ monitor }) {
  const {
    brand,
    data_source,
    size,
    resolution_w,
    resolution_h,
    price,
    thumbnail_url,
    gallery_urls,
    model,
    panel,
    refresh_rate,
    response_time,
    delta_e_avg,
    srgb,
    hdr_supported,
    hdr_certification,
    resolution_label,
  } = monitor;

  return (
    <section className="py-12">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
        <div className="flex w-full shrink-0 flex-col gap-3 md:max-w-sm">
          <div className="bg-muted relative aspect-square w-full overflow-hidden rounded">
            <CldImage
              src={thumbnail_url}
              alt={model}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            {gallery_urls?.map((url) => (
              <div
                key={url}
                className="bg-muted relative aspect-square w-full overflow-hidden rounded"
              >
                <CldImage
                  src={url}
                  alt={model}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground rounded border px-1.5 py-0.5 text-xs font-medium tracking-wider">
              {brand}
            </span>
            {data_source && (
              <div className="inline-flex items-center gap-1">
                <Image
                  src={certificationLogos[data_source]}
                  alt={data_source}
                  width={14}
                  height={14}
                />
                <p className="text-muted-foreground text-xs font-medium tracking-wide capitalize">
                  {data_source} verified
                </p>
              </div>
            )}
          </div>

          <h1 className="text-2xl leading-tight font-bold">{model}</h1>

          <h2 className="text-xl font-semibold">৳{price}</h2>

          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit rounded"
          >
            <GitCompare /> Add to Compare
          </Button>

          <div className="mt-2 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Size
              </span>
              <span className="text-sm font-medium">{size}&quot;</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Resolution
              </span>
              <span className="text-sm font-medium">
                {resolution_w}x{resolution_h} ({resolution_label})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Panel
              </span>
              <span className="text-sm font-medium">{panel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Refresh
              </span>
              <span className="text-sm font-medium">{refresh_rate}Hz</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-16 shrink-0 text-xs">
                Response
              </span>
              <span className="text-sm font-medium">{response_time}</span>
            </div>
            {hdr_supported && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-16 shrink-0 text-xs">
                  HDR
                </span>
                <span className="text-sm font-medium">
                  {hdr_certification ?? "Supported"}
                </span>
              </div>
            )}
          </div>

          <ColorChart monitor={monitor} />

          <Separator className="my-1" />

          <div className="flex h-4 items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-emerald-700">
                ΔE {delta_e_avg}
              </p>
              <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[11px] leading-none font-semibold text-white uppercase">
                Excellent
              </span>
            </div>
            <Separator orientation="vertical" className="h-full" />
            <p className="text-muted-foreground text-sm">sRGB {srgb}%</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
