import FilterSidebar from "@/components/pages/monitors/FilterSidebar";
import MonitorGrid from "@/components/pages/monitors/MonitorGrid";
import MonitorToolbar from "@/components/pages/monitors/MonitorToolbar";
import PaginationSection from "@/components/pages/monitors/Pagination";
import Container from "@/components/shared/Container";
import logger from "@/lib/logger";
import { getMonitors } from "@/lib/monitors";

export default async function Monitors() {
  const { data: monitors, error } = await getMonitors();

  if (error) logger.error("Monitors", error);

  return (
    <>
      <Container className="flex gap-8 py-12">
        <FilterSidebar />
        <section className="flex-1">
          <MonitorToolbar />
          <MonitorGrid monitors={monitors} />
          <PaginationSection />
        </section>
      </Container>
    </>
  );
}
