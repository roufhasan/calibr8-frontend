import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/utils/constants/sortOptions";
import { LayoutGrid, List } from "lucide-react";

export default function MonitorToolbar({ total = 0 }) {
  return (
    <div className="flex items-end justify-between pb-4">
      <p className="text-muted-foreground flex-1 text-sm">
        Showing <span className="text-foreground font-medium">{total}</span>{" "}
        monitors
      </p>

      <div className="flex items-center gap-4">
        <Select defaultValue="price-asc">
          <SelectTrigger className="w-45 text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div>
          <Button size="icon-sm" className="rounded-l-0! rounded">
            <LayoutGrid />
          </Button>

          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-r-0! rounded"
          >
            <List />
          </Button>
        </div>
      </div>
    </div>
  );
}
