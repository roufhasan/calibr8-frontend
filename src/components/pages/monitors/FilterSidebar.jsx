import { filterConfig } from "@/utils/constants/filterConfig";
import FilterSection from "./FilterSection";

export default function FilterSidebar() {
  return (
    <aside className="sticky top-[73px] h-fit w-65 shrink-0">
      <div className="flex items-center justify-between border-b px-2 pb-4">
        <h4 className="text-sm font-medium tracking-wider uppercase">
          Filters
        </h4>
        <button className="hover:text-foreground text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:cursor-pointer hover:underline">
          Reset all
        </button>
      </div>

      <div className="h-[calc(100dvh-73px)] divide-y overflow-y-auto">
        {filterConfig.map((filter) => (
          <FilterSection key={filter.id} filter={filter} />
        ))}
      </div>
    </aside>
  );
}
