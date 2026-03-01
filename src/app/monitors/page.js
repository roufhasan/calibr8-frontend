import FilterSidebar from "@/components/pages/monitors/FilterSidebar";
import MonitorGrid from "@/components/pages/monitors/MonitorGrid";
import MonitorToolbar from "@/components/pages/monitors/MonitorToolbar";
import PaginationSection from "@/components/pages/monitors/Pagination";
import Container from "@/components/shared/Container";

export default function Monitors() {
  return (
    <>
      <Container className="flex gap-8 py-12">
        <FilterSidebar />
        <section className="flex-1">
          <MonitorToolbar />
          <MonitorGrid />
          <PaginationSection />
        </section>
      </Container>
    </>
  );
}
