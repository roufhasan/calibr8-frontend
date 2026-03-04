import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { monitors } from "@/utils/constants/monitors";

export default function MonitorListings() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="Top Rated Color Accurate Monitors"
          subtitle="Professionally tested with Calman & Spyder. Real measurements, not manufacturer claims."
          label="Browse all"
          href="/monitors"
        />

        {/* Monitor Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {monitors.slice(0, 4).map((monitor) => (
            <MonitorCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
