import { formatDate } from "@/utils/date";
import { getDeltaEColor } from "@/utils/getDeltaEColor";
import Image from "next/image";
import Link from "next/link";

export default function CalmanTestCard({ monitor }) {
  const { category, model, brand, image, metrics, id, testDate } = monitor;

  return (
    <div className="group bg-card overflow-hidden rounded border">
      <Link
        href={`/monitors/${id}`}
        className="relative block aspect-video overflow-hidden"
      >
        <Image
          src={image}
          alt={`${brand} ${model}`}
          fill
          className="object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
        />
      </Link>

      {/* content */}
      <div className="border-t px-4 py-3.5">
        <div className="flex items-center justify-between gap-x-2">
          <p className="text-muted-foreground w-fit rounded text-[10px] font-medium tracking-wider uppercase">
            {category}
          </p>

          <p className="text-muted-foreground mt-0.5 text-[10px] font-medium tracking-wider capitalize">
            {formatDate(testDate)}
          </p>
        </div>

        <Link
          href={`/monitors/${id}`}
          className="text-foreground mt-3 inline-block text-base leading-snug font-semibold hover:underline"
        >
          {`${brand} ${model}`}
        </Link>

        <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-[13px]">
          <p className={`font-semibold ${getDeltaEColor(metrics.deltaE)}`}>
            ΔE <span>{metrics.deltaE}</span>
          </p>
          <div class="bg-border inline-block h-3.5 w-px"></div>
          <p>sRGB {metrics.sRGB}%</p>
        </div>
      </div>
    </div>
  );
}
