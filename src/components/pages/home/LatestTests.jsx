import Container from "@/components/shared/Container";
import LatestTestCard from "@/components/card/LatestTestCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { supabase } from "@/lib/supabase";
import logger from "@/lib/logger";

const latestCardFields = `
    id, 
    slug, 
    model, 
    brand,
    thumbnail_url, 
    data_source, 
    delta_e_avg, 
    srgb, 
    created_at`;

export default async function LatestTests() {
  const { data: monitors, error } = await supabase
    .from("monitors")
    .select(latestCardFields)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) logger.error("Latest Tests", error);

  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          label="Recently added"
          title="Latest Verified Tests"
          href="/monitors"
          linkLabel="View all tests"
        />

        {/* Monitor Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {monitors?.map((monitor) => (
            <LatestTestCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
