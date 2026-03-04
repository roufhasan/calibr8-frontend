import { Search, BarChart2, ArrowLeftRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Container from "@/components/shared/Container";
import StepCard from "@/components/card/StepCard";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search & Browse",
    description: "Find monitors by model, brand, use case or budget range.",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "View Verified Data",
    description:
      "See real Delta-E, sRGB, DCI-P3 and gamma values from Calman and Spyder tests. Not just spec sheet numbers.",
  },
  {
    number: "03",
    icon: ArrowLeftRight,
    title: "Compare Side-by-Side",
    description:
      "Add monitors to the comparison table and evaluate color accuracy and specs together.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="From search to the perfect display in three steps."
        />

        <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dashed connector line */}
          <div className="border-border absolute top-8 right-[calc(11%+2rem)] left-[calc(11%+2rem)] hidden h-px border-t border-dashed lg:block" />

          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
