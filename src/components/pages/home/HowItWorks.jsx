import { Search, BarChart2, ArrowLeftRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Container from "@/components/shared/Container";
import WorkDescribeCard from "@/components/card/WorkDescribeCard";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search & Browse",
    description: "Search by monitor model, brand, use case, or budget.",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "View Verified Data",
    description:
      "See real Calman-measured Delta E, color gamut, and gamma data.",
  },
  {
    number: "03",
    icon: ArrowLeftRight,
    title: "Compare Side-by-Side",
    description:
      "Add monitors to the comparison table and evaluate specs and accuracy together.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Get AI Recommendation",
    description:
      "Tell us your use case and budget — our AI cross-references Calman data to recommend the best-matched display.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="From search to the perfect display in four steps."
        />

        <div className="relative mt-14 grid grid-cols-4">
          {/* Dashed connector line */}
          <div className="border-border absolute top-8 right-[calc(12.5%+2rem)] left-[calc(12.5%+2rem)] h-px border-t border-dashed" />

          {steps.map((step) => (
            <WorkDescribeCard key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
