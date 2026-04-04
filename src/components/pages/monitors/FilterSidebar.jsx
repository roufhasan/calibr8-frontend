import { X } from "lucide-react";
import FilterSection from "./FilterSection";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { filterConfig } from "@/utils/constants/filterConfig";
import { usePathname, useRouter } from "next/navigation";

export default function FilterSidebar({ isOpen = false, onClose }) {
  useBodyScrollLock(isOpen);
  const router = useRouter();
  const pathname = usePathname();

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
        className={`bg-background fixed top-13 right-0 z-50 h-fit w-full max-w-60 shrink-0 transition-transform duration-300 ease-linear lg:sticky lg:top-24 lg:max-w-65 lg:translate-x-0 lg:self-start ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-3 pt-4 pb-4 lg:pt-0">
          {/* filter close btn */}
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground -ml-0.5 rounded p-0.5 transition-colors lg:hidden"
            aria-label="Close filters"
          >
            <X className="size-4" />
          </button>

          <h4 className="text-sm font-medium tracking-wider uppercase">
            Filters
          </h4>

          <button
            onClick={handleResetAll}
            className="hover:text-foreground text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:cursor-pointer hover:underline"
          >
            Reset all
          </button>
        </div>

        <div className="max-h-[calc(100dvh-105px)] divide-y overflow-y-auto lg:max-h-[calc(100dvh-133px)]">
          {filterConfig.map((filter) => (
            <FilterSection key={filter.id} filter={filter} />
          ))}
        </div>
      </aside>
    </>
  );
}
