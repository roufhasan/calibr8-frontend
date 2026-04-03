import MonitorCard from "@/components/card/MonitorCard";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { supabase } from "@/lib/supabase";
import { monitorCardFields } from "@/lib/monitors";
import logger from "@/lib/logger";

export default async function TopRatedMonitors() {
  const { data: monitors, error } = await supabase
    .from("monitors")
    .select(monitorCardFields)
    .limit(20);

  if (error) logger.error("Monitors", error);

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionHeader
          label="Ranked by ΔE accuracy"
          title="Top Rated by Color Accuracy"
          href="/monitors"
          linkLabel="View full rankings"
        />

        {/* Monitor Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {monitors?.map((monitor) => (
            <MonitorCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
