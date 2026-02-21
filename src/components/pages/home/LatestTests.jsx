import Container from "@/components/shared/Container";
import CalmanTestCard from "@/components/card/CalmanTestCard";
import { calmanTests } from "@/utils/constants";
import SectionHeader from "@/components/shared/SectionHeader";

export default function LatestTests() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader title="Latest Calman Tests" label="View all" href="/" />

        {/* Monitor Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calmanTests.map((monitor) => (
            <CalmanTestCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
