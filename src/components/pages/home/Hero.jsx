import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { quickSearchLinks } from "@/utils/constants";

export default function Hero() {
  return (
    <section className="grid min-h-85 grid-cols-1 border-b lg:grid-cols-[1fr_300px]">
      {/* left side content */}
      <div className="px-[clamp(1rem,5vw,4rem)] py-10 lg:py-16 xl:pl-[max(clamp(1rem,5vw,4rem),calc((100vw-80rem)/2+clamp(1rem,5vw,4rem)))] 2xl:pl-[max(clamp(1rem,5vw,4rem),calc((100vw-96rem)/2+clamp(1rem,5vw,4rem)))]">
        <h1 className="max-w-125 font-sans text-[40px] leading-[1.2] font-extrabold tracking-[-1px] md:text-[48px]">
          Spec sheets lie. <br />
          <span className="text-primary">Measurements</span> don&apos;t.
        </h1>

        <p className="text-muted-foreground mt-4 max-w-125 text-xs leading-[1.7]">
          Every Delta E, sRGB and DCI-P3 value is pulled from{" "}
          <span className="text-foreground font-medium">
            verified reviewer tests
          </span>{" "}
          - not manufacturer claims. We aggregate, attribute and surface the
          data so you don&apos;t have to dig.
        </p>

        {/* search field */}
        <div className="mt-7 w-full max-w-110">
          <div className="flex w-full rounded-sm border">
            <Input
              type="text"
              placeholder={`Try "BenQ MOBIUZ" or "27" IPS 4K"...`}
              className="flex-1 rounded-none rounded-l-sm border-0 px-3 text-xs md:text-xs"
            />
            <Button className="h-full shrink-0 rounded-sm rounded-l-none text-xs tracking-wider">
              Search
            </Button>
          </div>

          {/* quick links */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {quickSearchLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:border-primary/60 hover:text-foreground rounded-sm border px-2.5 py-1 text-[10px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* right side content */}
      <div className="bg-card relative flex flex-col justify-between gap-4 overflow-hidden border-l px-[clamp(1rem,5vw,4rem)] py-9 lg:px-7">
        {/* total monitor quantity watermark */}
        <span
          className="pointer-events-none absolute -top-4 -right-3 font-sans text-[130px] leading-none font-extrabold tracking-[-4px] opacity-[0.04] select-none"
          aria-hidden="true"
        >
          200
        </span>

        {/* stat 1 */}
        <div className="relative z-10">
          <div className="text-muted-foreground text-[9px] tracking-[0.13em] uppercase">
            Monitors in database
          </div>
          <div className="my-1 font-sans text-[34px] leading-none font-extrabold tracking-[-1px]">
            200+
          </div>
          <div className="text-muted-foreground text-[10px]">
            Public verified tests
          </div>
        </div>

        <div className="bg-border h-px w-full" />

        {/* stat 2 */}
        <div className="relative z-10">
          <div className="text-muted-foreground text-[9px] tracking-[0.13em] uppercase">
            Avg ΔE2000 (top tier)
          </div>
          <div className="my-1 font-sans text-[34px] leading-none font-extrabold tracking-[-1px]">
            0.71
          </div>
          <div className="text-muted-foreground text-[10px]">
            ColorChecker average
          </div>
        </div>

        <div className="bg-border h-px w-full" />

        {/* stat 3 */}
        <div className="relative z-10">
          <div className="text-muted-foreground text-[9px] tracking-[0.13em] uppercase">
            Top Performer
          </div>
          <div className="text-primary mt-1.5 font-sans text-sm leading-snug font-bold">
            ASUS ProArt PA279CRV
          </div>
          <div className="text-muted-foreground mt-1 text-[10px] leading-relaxed">
            27&quot; · IPS · 4K · ΔE 0.43 · sRGB 99.5%
          </div>
          <div className="bg-secondary mt-2 inline-flex items-center gap-1.5 rounded-sm px-2 py-1">
            <div className="size-1.5 rounded-full bg-emerald-400"></div>
            <span className="text-muted-foreground mt-0.5 text-[9px] leading-none tracking-wide">
              Calman Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
