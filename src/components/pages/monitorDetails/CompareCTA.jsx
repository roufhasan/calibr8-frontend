import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { GitCompare } from "lucide-react";

export default function CompareCTA({ monitor }) {
  const { name } = monitor;

  return (
    <section className="py-12">
      <Container>
        <div className="bg-secondary flex items-center justify-between gap-4 rounded px-6 py-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium">Compare this monitor</h2>
            <p className="text-muted-foreground text-sm">
              Add {name} to the comparison table and see how it stacks up.
            </p>
          </div>

          <Button variant="outline" size="sm" className="shrink-0 rounded">
            <GitCompare /> Add to Compare
          </Button>
        </div>
      </Container>
    </section>
  );
}
