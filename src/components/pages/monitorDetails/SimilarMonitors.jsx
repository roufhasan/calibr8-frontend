import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";
import { monitors } from "@/utils/constants";

export default function SimilarMonitors({ monitor }) {
  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Similar Monitors" />

        <div className="flex items-center gap-4 overflow-x-scroll">
          {monitors.map((monitor) => (
            <MonitorCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
