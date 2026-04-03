import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionCtaBtn from "@/components/shared/SectionCtaBtn";
import Link from "next/link";

const monitorA = {
  name: "Dell U2723QE",
  de: "1.57",
  srgb: "97.6%",
  price: "$819",
};

const monitorB = {
  name: "LG 27GP950-B",
  de: "0.83",
  srgb: "99.9%",
  price: "$799",
  winner: true,
};

export default function FeaturedCompare() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        {/* section heading */}
        <div>
          <div className="text-muted-foreground text-[9px] tracking-[0.16em] uppercase">
            Featured Comparison
          </div>

          <h2 className="my-1.5 font-sans text-[26px] leading-[1.1] font-extrabold tracking-[-0.5px] md:text-[28px]">
            Heade-to-head. <span className="text-primary">Data decides.</span>
          </h2>
        </div>

        {/* grid container */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded md:grid-cols-2">
          {/* left side image */}
          <div className="relative min-h-72">
            <Image
              fill
              src="https://images.unsplash.com/photo-1635684543899-ebd8d7e77825?q=80&w=1528&auto=format&fit=crop"
              alt="Dell U2723QE vs LG 27GP950-B"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="bg-foreground text-primary-foreground border-border/20 z-10 flex size-9 items-center justify-center border font-sans text-xs font-extrabold">
                VS
              </div>
              <div className="bg-border/20 absolute top-0 bottom-0 left-1/2 w-0.5" />
            </div>
          </div>

          {/* right side content */}
          <div className="bg-foreground border-l-primary relative flex flex-col justify-between gap-8 overflow-hidden p-7 md:border-l-2">
            <span
              className="text-primary-foreground pointer-events-none absolute -right-2 -bottom-4 font-sans text-[80px] leading-none font-extrabold tracking-[-3px] opacity-[0.1] select-none"
              aria-hidden="true"
            >
              VS
            </span>

            <div className="relative z-10">
              <div className="text-primary text-[9px] font-medium tracking-[0.16em] uppercase">
                Head-to-head · Pro monitors
              </div>

              <Link
                href="/compare?monitors=dell-u2723qe,lg-27gp950-b"
                className="text-primary-foreground mt-2.5 inline-block font-sans text-[20px] leading-tight font-extrabold tracking-[-0.4px] hover:underline"
              >
                Dell U2723QE vs
                <br />
                LG 27GP950-B
              </Link>

              {/* monitor rows */}
              <div className="mt-5 flex flex-col gap-1.5 border-t border-[#3A3228] pt-3">
                {[monitorA, monitorB].map((monitor) => (
                  <div
                    key={monitor.name}
                    className={`grid grid-cols-[1fr_auto] items-center gap-3 p-2 ${
                      monitor.winner
                        ? "border-primary border-l-2 bg-[#2E2418]"
                        : ""
                    }`}
                  >
                    <span className="text-primary-foreground text-[11px] font-medium">
                      {monitor.name}
                    </span>
                    <div className="space-x-3">
                      <span
                        className={`text-[10px] font-medium ${
                          monitor.winner
                            ? "text-primary-foreground/75"
                            : "text-primary-foreground/45"
                        }`}
                      >
                        ΔE {monitor.de}
                      </span>
                      <span
                        className={`text-[10px] font-medium ${
                          monitor.winner
                            ? "text-primary-foreground/75"
                            : "text-primary-foreground/45"
                        }`}
                      >
                        {monitor.srgb}
                      </span>
                      <span
                        className={`text-[11px] font-medium ${
                          monitor.winner
                            ? "text-primary-foreground/75"
                            : "text-primary-foreground/45"
                        }`}
                      >
                        {monitor.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* cta */}
            <div className="relative z-10 flex flex-col gap-3 border-t border-[#3A3228] pt-4">
              <p className="text-primary-foreground/45 text-[10px] leading-relaxed">
                Better accuracy at a lower price — the data makes the case.
              </p>

              <SectionCtaBtn
                href="/compare?monitors=dell-u2723qe,lg-27gp950-b"
                linkLabel="See why lg wins"
                className="text-primary-foreground/45 md:hover:text-primary-foreground"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
