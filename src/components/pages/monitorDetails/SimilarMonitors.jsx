import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";
import { getMonitors } from "@/lib/monitors";

export default async function SimilarMonitors() {
  const { data: monitors, error } = await getMonitors();

  if (error) logger.error("Monitors", error);

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Similar Monitors" />

        <div className="flex items-center gap-4 overflow-x-scroll">
          {monitors.map((monitor) => (
            <MonitorCard
              key={monitor.id}
              className="min-w-xs"
              monitor={monitor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
