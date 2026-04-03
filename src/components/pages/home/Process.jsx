import { Fragment } from "react";
import FeatureCard from "@/components/card/FeatureCard";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { processSteps } from "@/utils/constants";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section className="bg-card py-10 lg:py-16">
      <Container>
        <SectionHeader
          label="The process"
          title="The research ends here."
          sub="From your first search to a side-by-side decision — backed by measured data, not spec sheet claims."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {processSteps.map((process, i) => (
            <Fragment key={i}>
              <FeatureCard feature={process} variant="process" />
              {i < processSteps.length - 1 && (
                <div className="hidden items-start px-4 pt-[32px] lg:flex">
                  <ArrowRight
                    strokeWidth={1}
                    className="text-primary size-3.5 shrink-0"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
