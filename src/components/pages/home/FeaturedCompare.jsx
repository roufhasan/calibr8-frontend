import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    name: "Dell U2723QE",
    de: "1.57",
    srgb: "97.6%",
    price: "$819",
  },
  {
    name: "LG 27GP950-B",
    de: "0.83",
    srgb: "99.9%",
    price: "$799",
  },
];

export default function FeaturedCompare() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
          {/* Image */}
          <div className="relative h-full min-h-80 overflow-hidden rounded">
            <Image
              fill
              src="https://images.unsplash.com/photo-1635684543899-ebd8d7e77825?q=80&w=1528&auto=format&fit=crop"
              alt="monitor"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-0 md:p-10">
            <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.15em] uppercase">
              Comparison
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Dell U2723QE vs LG 27GP950-B: Which Pro Monitor is Worth Your
              Money?
            </h2>

            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Both monitors claim professional-grade color accuracy, but our
              Calman testing reveals one clear winner for color-critical work.
              We break down the $50 price difference and whether the specs
              actually matter.
            </p>

            {/* Monitor Stats */}
            <div className="mt-6 space-y-3 border-t pt-5">
              {stats.map((monitor) => (
                <div key={monitor.name} className="flex items-center gap-8">
                  <span className="w-32 shrink-0 text-xs font-semibold">
                    {monitor.name}
                  </span>
                  <div className="text-muted-foreground flex items-center gap-2 text-xs">
                    <span className="font-semibold text-emerald-700">
                      ΔE {monitor.de}
                    </span>
                    <span className="bg-border inline-block h-3 w-px" />
                    <span>sRGB {monitor.srgb}</span>
                    <span className="bg-border inline-block h-3 w-px" />
                    <span className="font-medium">{monitor.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-6 w-fit capitalize">
              <Link href="/compare?monitors=dell-u2723qe,lg-27gp950-b">
                See full comparison <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
