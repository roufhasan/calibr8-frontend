import FeatureCard from "@/components/card/FeatureCard";
import Container from "@/components/shared/Container";
import { methodologies } from "@/utils/constants";

export default function Methodology() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        {/* section header */}
        <div className="text-muted-foreground text-[9px] tracking-[0.16em] uppercase">
          Our methodology
        </div>

        <h2 className="my-1.5 text-[26px] leading-tight font-extrabold tracking-[-0.5px] md:text-[28px]">
          The data is real.
          <br />
          The structure is ours.
        </h2>

        <p className="text-muted-foreground w-full max-w-xl text-[11px] leading-relaxed">
          We built the infrastructure to aggregate, attribute and surface
          measurement data from trusted display reviewers, so the work they put
          into testing is actually findable.
        </p>

        {/* card grid container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3">
          {methodologies.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
