import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import { monitors } from "@/utils/constants";
import SectionHeader from "@/components/shared/SectionHeader";

export default function MonitorListings() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="Top Rated Color Accurate Monitors"
          subtitle="Professionally tested with Portrait Displays Calman software."
          label="Browse all"
          href="/"
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
