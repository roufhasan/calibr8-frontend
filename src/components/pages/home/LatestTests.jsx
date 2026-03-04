import Container from "@/components/shared/Container";
import LatestTestCard from "@/components/card/LatestTestCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { calmanTests } from "@/utils/constants";

export default function LatestTests() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="Latest Verified Tests"
          label="View all"
          href="/monitors?sort=latest"
        />

        {/* Monitor Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calmanTests.map((monitor) => (
            <LatestTestCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
