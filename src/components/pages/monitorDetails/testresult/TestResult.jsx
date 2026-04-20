import Container from "@/components/shared/Container";
import DetailSectionHeading from "@/components/shared/DetailSectionHeading";
import DeltaValue from "./DeltaValue";
import GamutBars from "./GamutBars";
import Review from "./Review";

export default function TestResult({ monitor }) {
  const { data_source } = monitor;

  const label =
    data_source === "calman" ? "Calman verified" : "Spyder verified";

  return (
    <section className="py-12">
      <Container>
        <DetailSectionHeading
          label={label}
          title="Color accuracy."
          accent="Data over claims."
        />
        <div className="grid min-w-0 grid-cols-1 gap-12 md:grid-cols-2">
          <DeltaValue monitor={monitor} />
          <GamutBars monitor={monitor} />
        </div>
        <Review monitor={monitor} />
      </Container>
    </section>
  );
}
