import { Button } from "@/components/ui/button";
import FilterSection from "./FilterSection";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { filterConfig } from "@/utils/constants/filterConfig";
import { SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function FilterSidebar({ isOpen = false, onClose, params }) {
  useBodyScrollLock(isOpen);
  const router = useRouter();
  const pathname = usePathname();

  const hasActiveFilters = Object.keys(params).length > 0;

  const handleResetAll = () => {
    router.push(pathname);
  };

  return (
    <>
      {/* dark overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`bg-background fixed top-13 right-0 z-50 h-fit w-full max-w-65 shrink-0 transition-transform duration-300 ease-linear lg:sticky lg:top-24 lg:max-w-65 lg:translate-x-0 lg:self-start ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-3 py-4 lg:items-end lg:pt-0">
          <h4 className="text-sm font-medium tracking-wider uppercase">
            Filters
          </h4>

          {/* desktop filter url reset btn */}
          <Button
            onClick={handleResetAll}
            disabled={!hasActiveFilters}
            variant="link"
            className="hover:text-foreground text-muted-foreground hidden h-fit p-0 font-normal lg:inline-flex"
          >
            Reset all
          </Button>

          {/* mobile filter bar close btn */}
          <Button
            onClick={onClose}
            aria-label="Closer filters"
            className="h-fit p-0 lg:hidden"
            variant="icon"
          >
            <X />
          </Button>
        </div>

        {/* scrollable section */}
        <div className="max-h-[calc(100dvh-143px)] divide-y overflow-y-auto lg:max-h-[calc(100dvh-133px)]">
          {filterConfig.map((filter) => (
            <FilterSection key={filter.id} filter={filter} />
          ))}
        </div>

        <div className="border-t lg:hidden">
          <Button disabled={!hasActiveFilters} className="w-full rounded-none">
            Reset all filters
          </Button>
        </div>
      </aside>
    </>
  );
}
