import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import DetailSectionHeading from "@/components/shared/DetailSectionHeading";
import logger from "@/lib/logger";
import { getSimilarMonitors } from "@/lib/monitors";

export default async function SimilarMonitors({ monitor }) {
  const { data: monitors, error } = await getSimilarMonitors(monitor);

  if (error) logger.error("SimilarMonitors", error);
  if (!monitors?.length) return null;

  return (
    <section className="py-12">
      <Container>
        <DetailSectionHeading label="Discover" title="Similar monitors." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {monitors.map((m) => (
            <MonitorCard key={m.id} monitor={m} />
          ))}
        </div>
      </Container>
    </section>
  );
}
