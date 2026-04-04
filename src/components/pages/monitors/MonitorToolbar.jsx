import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/utils/constants/sortOptions";
import { LayoutGrid, List, ListFilter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MonitorToolbar({
  isListView,
  onOpenFilter,
  toggleView,
  total = 0,
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSort = searchParams.get("sort") ?? "latest";

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-10 flex items-end justify-between">
      <Button onClick={onOpenFilter} className="lg:hidden">
        <ListFilter className="size-3.5" /> Filter
      </Button>

      {/* desktop search monitors monitor quantity */}
      <p className="text-muted-foreground hidden flex-1 text-xs lg:block">
        Showing <span className="font-medium">{total}</span> monitors
      </p>

      <div className="flex items-center gap-4">
        <Select value={currentSort} onValueChange={handleSortChange}>
          <SelectTrigger className="w-44 text-xs">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent position="popper" side="bottom" align="start">
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-xs"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="hidden items-center justify-center gap-2 lg:flex">
          <Button
            onClick={toggleView}
            size="icon-sm"
            variant={isListView ? "outline" : "default"}
          >
            <LayoutGrid />
          </Button>

          <Button
            onClick={toggleView}
            size="icon-sm"
            variant={!isListView ? "outline" : "default"}
          >
            <List />
          </Button>
        </div>
      </div>
    </div>
  );
}
