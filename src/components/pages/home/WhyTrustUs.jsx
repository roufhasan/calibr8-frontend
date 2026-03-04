import TrustFeatureCard from "@/components/card/TrustFeatureCard";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { trustFeatures } from "@/utils/constants";

export default function WhyTrustUs() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="Why Trust Our Data?"
          subtitle="Every value you see is sourced from verified tests, not estimated."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature) => (
            <TrustFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
