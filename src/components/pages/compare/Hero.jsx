import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex items-end justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Compare Monitors</h1>
        <p className="text-muted-foreground text-sm">
          Side-by-side color accuracy and spec comparison. Up to 4 monitors.
        </p>
      </div>

      <Button variant="outline" size="sm">
        <Plus /> Add Monitor
      </Button>
    </section>
  );
}
