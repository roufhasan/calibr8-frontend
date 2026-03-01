import Container from "@/components/shared/Container";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { quickSearchLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT — content */}
          <div className="flex flex-col gap-7">
            {/* badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-black px-3 py-1.5 text-white">
                <Image
                  src="/images/logo/calman.png"
                  alt="calman logo"
                  width={18}
                  height={18}
                />
                <span className="text-xs font-medium">
                  Is your monitor color accurate?
                </span>
              </div>
            </div>

            {/* title */}
            <h1 className="text-5xl font-semibold md:text-6xl">
              Find your perfect monitor with verified{" "}
              <span className="from-primary to-chart-2 bg-linear-to-r bg-clip-text text-transparent">
                color accuracy
              </span>
            </h1>

            {/* description */}
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Professional Calman color data to help you choose the most
              accurate monitor for your creative needs.
            </p>

            {/* search field */}
            <div className="w-full max-w-md">
              <InputGroup className="h-10 overflow-hidden rounded border-0">
                <InputGroupInput
                  className="border-input h-full rounded! rounded-r-none! border"
                  placeholder="Search by monitor model or brand..."
                />
                <InputGroupAddon
                  align="inline-end"
                  className="h-full rounded! py-0 pr-1.5"
                >
                  <InputGroupButton
                    size="lg"
                    variant="default"
                    className="h-full rounded! rounded-l-none!"
                  >
                    Search
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>

              {/* quick links */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {quickSearchLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:border-primary rounded border px-3 py-1 text-xs font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* data credit */}
            <p className="text-muted-foreground text-sm">
              Calibration data provided by{" "}
              <Link
                href="https://www.youtube.com"
                target="_blank"
                className="hover:text-primary transition-colors hover:underline"
              >
                PC Builder Bangladesh
              </Link>
            </p>
          </div>

          {/* RIGHT — monitor mockup */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/home/hero.png"
              alt="Monitor displaying CIE 1931 colour gamut chart"
              width={1920}
              height={1113}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
