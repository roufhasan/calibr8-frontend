import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { certificationLogos } from "@/utils/certificationLogos";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const monitors = [
  {
    slug: "eizo-coloredge-cg2700x",
    brand: "EIZO",
    name: "ColorEdge CG2700X",
    specs: '27" · IPS · 4K · 60Hz',
    price: 2699,
    accuracyTier: "calman",
    deltaEAverage: 0.5,
    deltaEMax: 1.2,
    srgbCoverage: 100,
    dciP3Coverage: 98,
    adobeRgbCoverage: 87,
    ntscCoverage: 81,
    panelType: "IPS",
    screenSize: 27,
    resolution: "3840 × 2160",
    refreshRate: 60,
    responseTime: 5,
    peakBrightness: 250,
    hdrStandard: "HDR400",
    localDimming: "No",
    price_per_inch: 99,
    imageUrl:
      "https://images.unsplash.com/photo-1763905180930-892ee8d37ea6?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewUrl: "https://youtu.be/xxxxx",
  },
  {
    slug: "samsung-viewfinity-s8-s80ua",
    brand: "SAMSUNG",
    name: "ViewFinity S8 S80UA",
    specs: '32" · IPS · 4K · 60Hz',
    price: 549,
    accuracyTier: "spyder",
    deltaEAverage: 2.5,
    deltaEMax: 5.2,
    srgbCoverage: 97,
    dciP3Coverage: 90,
    adobeRgbCoverage: 92,
    ntscCoverage: 85,
    panelType: "IPS",
    screenSize: 32,
    resolution: "3840 × 2160",
    refreshRate: 60,
    responseTime: 5,
    peakBrightness: 300,
    hdrStandard: "HDR400",
    localDimming: "No",
    price_per_inch: 24,
    imageUrl:
      "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewUrl: "https://youtu.be/xxxxx",
  },
];

const rowConfig = [
  { type: "section", label: "Color Accuracy" },
  {
    type: "row",
    label: "Delta E Average",
    key: "deltaEAverage",
    highlight: true,
  },
  { type: "row", label: "Delta E Max", key: "deltaEMax" },
  {
    type: "row",
    label: "sRGB Coverage",
    key: "srgbCoverage",
    suffix: "%",
    bar: true,
  },
  {
    type: "row",
    label: "DCI-P3 Coverage",
    key: "dciP3Coverage",
    suffix: "%",
    bar: true,
  },
  {
    type: "row",
    label: "Adobe RGB",
    key: "adobeRgbCoverage",
    suffix: "%",
    bar: true,
  },
  { type: "row", label: "NTSC", key: "ntscCoverage", suffix: "%", bar: true },
  { type: "row", label: "Accuracy Tier", key: "accuracyTier", badge: true },

  { type: "section", label: "Panel Specs" },
  { type: "row", label: "Panel Type", key: "panelType" },
  { type: "row", label: "Screen Size", key: "screenSize", suffix: '"' },
  { type: "row", label: "Resolution", key: "resolution" },
  { type: "row", label: "Refresh Rate", key: "refreshRate", suffix: "Hz" },
  { type: "row", label: "Response Time", key: "responseTime", suffix: "ms" },

  { type: "section", label: "HDR & Brightness" },
  {
    type: "row",
    label: "Peak Brightness",
    key: "peakBrightness",
    suffix: " nits",
  },
  { type: "row", label: "HDR Standard", key: "hdrStandard" },
  { type: "row", label: "Local Dimming", key: "localDimming" },

  { type: "section", label: "Price & Value" },
  { type: "row", label: "Price", key: "price", prefix: "$" },
  {
    type: "row",
    label: "Price per Inch",
    key: "price_per_inch",
    prefix: "$",
    suffix: "/in",
  },

  { type: "section", label: "Review & Sources" },
  { type: "review", label: "Full Review" },
];

export default function CompareTable() {
  return (
    <section className="my-8 border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {/* left label header */}
            <TableHead className="w-52 border-r bg-transparent pb-6 pl-6 align-bottom" />

            {monitors.map((monitor) => (
              <TableHead
                key={monitor.slug}
                className="min-w-64 border-r p-0 last:border-r-0"
              >
                <div className="relative flex flex-col items-center gap-0 px-8 pt-8 pb-6">
                  <button className="text-muted-foreground hover:text-foreground absolute top-4 right-4 transition-colors hover:cursor-pointer">
                    <X className="size-3.5" />
                  </button>
                  <Link
                    href={`/monitors/${monitor.brand}/${monitor.slug}`}
                    className="bg-muted/30 group relative size-28 overflow-hidden rounded border"
                  >
                    <Image
                      src={monitor.imageUrl}
                      alt={monitor.name}
                      fill
                      className="object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
                    />
                  </Link>

                  <span className="text-muted-foreground mt-5 text-xs font-semibold tracking-widest uppercase">
                    {monitor.brand}
                  </span>

                  <Link
                    href={`/monitors/${monitor.brand}/${monitor.slug}`}
                    className="mt-1.5 text-center text-base leading-snug font-semibold hover:underline"
                  >
                    {monitor.name}
                  </Link>

                  <span className="text-muted-foreground mt-1 text-xs leading-none">
                    {monitor.specs}
                  </span>

                  <p className="text-foreground mt-4 text-xl font-bold tracking-tight">
                    ${monitor.price}
                  </p>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rowConfig.map((row) => {
            if (row.type === "section") {
              return (
                <TableRow key={row.label}>
                  <TableCell
                    colSpan={monitors.length + 1}
                    className="bg-muted/40 py-2.5 pl-6 align-top"
                  >
                    <span className="text-muted-foreground font-sans text-xs font-semibold tracking-widest uppercase">
                      {row.label}
                    </span>
                  </TableCell>
                </TableRow>
              );
            }

            if (row.type === "review") {
              return (
                <TableRow key="review">
                  <TableCell className="border-r py-5 pl-6 align-top">
                    <span className="text-muted-foreground text-sm">
                      {row.label}
                    </span>
                  </TableCell>
                  {monitors.map((monitor) => (
                    <TableCell
                      key={monitor.slug}
                      className="border-r py-6 text-center last:border-r-0"
                    >
                      <Link
                        href={monitor.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center gap-2"
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Image
                            src="https://img.icons8.com/?size=100&id=19318&format=png&color=FF0000"
                            alt="YouTube"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <span className="text-sm font-medium">
                            Watch Full Review ↗
                          </span>
                        </span>

                        <span className="text-muted-foreground/60 text-xs leading-snug">
                          Bleed, ghosting & real-life tests.
                          <br />
                          Support the creator too.
                        </span>
                      </Link>
                    </TableCell>
                  ))}
                </TableRow>
              );
            }

            return (
              <TableRow key={row.key}>
                <TableCell className="w-52 border-r py-3.5 pl-6">
                  <span className="text-muted-foreground text-sm">
                    {row.label}
                  </span>
                </TableCell>

                {monitors.map((monitor) => (
                  <TableCell
                    key={monitor.slug}
                    className="border-r py-3.5 text-center last:border-r-0"
                  >
                    {row.badge ? (
                      <div className="inline-flex items-center gap-1.5">
                        <div className="relative size-4 shrink-0 overflow-hidden rounded">
                          <Image
                            src={certificationLogos[monitor[row.key]]}
                            alt={monitor[row.key]}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm capitalize">
                          {monitor[row.key]} verified
                        </p>
                      </div>
                    ) : row.bar ? (
                      <div className="flex flex-col items-center gap-1.5 px-4">
                        <span className="text-foreground text-sm tabular-nums">
                          {monitor[row.key]}
                          {row.suffix}
                        </span>
                        <div className="bg-secondary relative h-1 w-full overflow-hidden rounded-full">
                          <div
                            style={{ width: `${monitor[row.key]}%` }}
                            className="bg-primary absolute top-0 left-0 h-full"
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="text-foreground text-sm tabular-nums">
                        {row?.prefix}
                        {monitor[row.key]}
                        {row?.suffix}
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
