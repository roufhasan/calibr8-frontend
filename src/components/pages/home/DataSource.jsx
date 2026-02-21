import Image from "next/image";
import Link from "next/link";
import { MonitorCheck, Wrench, Calendar, ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const stats = [
  {
    icon: MonitorCheck,
    label: "850+ Monitors Tested",
  },
  {
    icon: Wrench,
    label: "Portrait Displays Calman Software",
  },
  {
    icon: Calendar,
    label: "Testing Since 2018",
  },
];

export default function DataSourceSection() {
  return (
    <section className="py-16">
      <Container>
        {/* Section Header */}
        <SectionHeader
          title="Where Our Data Comes From"
          subtitle="Every ΔE value, sRGB coverage & color accuracy score on this site comes from a single independent source & used with their explicit permission."
        />

        {/* Card */}
        <div className="mt-10 rounded border">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
            {/* Left — Channel Identity */}
            <div className="flex flex-col justify-between gap-6 border-b p-6 md:border-r md:border-b-0 md:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-muted size-14 shrink-0 overflow-hidden rounded">
                  <Image
                    src="https://yt3.googleusercontent.com/ytc/AIdro_nXbuocFI9aQP3LrygYeWOsTdr39DyoFfIzZOAq6ta-PYU=s160-c-k-c0x00ffffff-no-rj"
                    alt="PC Builder Bangladesh"
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <h3 className="text-base leading-tight font-semibold">
                    PC Builder Bangladesh
                  </h3>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Independent Tech Reviewer · YouTube
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2.5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-muted-foreground flex items-center gap-2 text-xs"
                  >
                    <stat.icon className="size-3.5 shrink-0" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://www.youtube.com/@PCBuilderBangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary flex w-fit items-center gap-1.5 text-sm font-medium underline-offset-4 transition-colors hover:underline"
              >
                View Their Channel <ChevronRight className="size-3.5" />
              </Link>
            </div>

            {/* Right — Context */}
            <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
              <p className="text-sm leading-relaxed">
                PC Builder Bangladesh is an independent tech reviewer who has
                been measuring monitor color accuracy using Portrait Displays
                Calman — the same software trusted by Hollywood studios and
                broadcast facilities. Their test results cover Delta E, sRGB and
                DCI-P3 gamut coverage, gamma accuracy, white point consistency,
                and more.
              </p>
              <p className="text-sm leading-relaxed">
                We aggregate their published test data with full permission and
                present it in a structured, comparable format. No data is
                estimated or manufacturer-provided. What you see is what the
                colorimeter measured.
              </p>

              {/* Permission notice */}
              <div className="bg-muted mt-2 rounded p-4">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  All calibration data is used with explicit permission from PC
                  Builder Bangladesh. Test results are independently produced
                  and regularly updated after firmware changes that affect image
                  processing.{" "}
                  <Link
                    href="/methodology"
                    className="text-foreground inline-flex items-center font-medium underline underline-offset-4"
                  >
                    Read our full testing methodology{" "}
                    <ChevronRight className="size-3.5" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
