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
    <section className="py-8 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT — content */}
          <div className="flex flex-col">
            {/* title */}
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Most monitors have a{" "}
              <span className="text-primary relative inline-block">
                story
                <span className="absolute -bottom-1 left-0 w-full">
                  <Image
                    src="/images/icons/underline.svg"
                    alt=""
                    width={300}
                    height={12}
                    className="h-auto w-full"
                    aria-hidden="true"
                  />
                </span>
              </span>{" "}
              the spec sheet doesn&apos;t tell
            </h1>

            {/* mobile image */}
            <div className="mt-10 lg:hidden">
              <Image
                src="/images/home/hero.png"
                alt="Monitor displaying CIE 1931 colour gamut chart"
                width={1920}
                height={1113}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* description */}
            <p className="text-muted-foreground mt-8 leading-relaxed text-balance lg:mt-6">
              Color accuracy data from verified tests, all in one place. Because
              monitors are rarely as accurate as the box suggests.
            </p>

            {/* search field */}
            <div className="mt-6 w-full max-w-xl">
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
              <div className="mt-3 hidden flex-wrap items-center gap-2 sm:flex">
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

            {/* stats */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-foreground text-sm font-semibold">
                  200+
                </span>
                <span className="text-muted-foreground text-xs">Monitors</span>
              </div>

              <div className="bg-border h-6 w-px shrink-0" />

              <div className="flex flex-col gap-0.5">
                <span className="text-foreground text-sm font-semibold">
                  Calman & Spyder
                </span>
                <span className="text-muted-foreground text-xs">Verified</span>
              </div>

              <div className="bg-border h-6 w-px shrink-0" />

              <div className="flex flex-col gap-0.5">
                <span className="text-foreground text-sm font-semibold">
                  Real Data
                </span>
                <span className="text-muted-foreground text-xs">
                  Measurement
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — monitor mockup */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/home/hero.png"
              alt="Monitor displaying CIE 1931 colour gamut chart"
              width={1920}
              height={1113}
              priority
              className="hidden h-auto w-full lg:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
