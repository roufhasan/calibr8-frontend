import { certificationLogos } from "@/utils/certificationLogos";
import { formatDate } from "@/utils/date";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import Image from "next/image";
import Link from "next/link";
import CldImage from "../ui/CldImage";

export default function LatestTestCard({ monitor }) {
  const {
    slug,
    model,
    thumbnail_url,
    data_source,
    delta_e_avg,
    srgb,
    created_at,
  } = monitor;

  return (
    <div className="group bg-card overflow-hidden rounded border">
      <Link
        href={`/monitors/${slug}`}
        className="bg-muted relative block aspect-video overflow-hidden"
      >
        <CldImage
          fill
          src={thumbnail_url}
          alt={model}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 ease-linear group-hover:scale-105"
        />
      </Link>

      {/* content */}
      <div className="border-t px-4 py-3.5">
        <div className="flex items-center justify-between gap-x-2">
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
          <p className="text-muted-foreground mt-0.5 text-[10px] font-medium tracking-wider capitalize">
            {formatDate(created_at)}
          </p>
        </div>

        <Link
          href={`/monitors/${slug}`}
          className="text-foreground mt-3 inline-block text-base leading-snug font-semibold hover:underline"
        >
          {model}
        </Link>

        <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-[13px]">
          <p className={`font-semibold ${getDeltaEColor(delta_e_avg)}`}>
            ΔE <span>{delta_e_avg}</span>
          </p>
          <div className="bg-border inline-block h-3.5 w-px"></div>
          <p>sRGB {srgb}%</p>
        </div>
      </div>
    </div>
  );
}
