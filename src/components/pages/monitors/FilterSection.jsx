"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterSection({ filter }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getSliderValue = () => {
    const param = searchParams?.get(filter.id);
    if (!param) {
      return Array.isArray(filter.defaultValue)
        ? filter.defaultValue
        : [filter.defaultValue];
    }
    return param.split(",").map(Number);
  };

  const [isOpen, setIsOpen] = useState(filter.defaultOpen);
  const [localSlider, setLocalSlider] = useState(getSliderValue);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const getSelected = () => {
    return searchParams?.get(filter.id)?.split(",").filter(Boolean) ?? [];
  };

  const toggleCheckbox = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = getSelected();

    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    next.length === 0
      ? params.delete(filter.id)
      : params.set(filter.id, next.join(","));

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const commitSlider = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(filter.id, value.join(","));
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="hover:bg-secondary text-muted-foreground flex w-full items-center justify-between rounded px-2 py-2.5 text-xs font-medium tracking-wider uppercase transition-all hover:cursor-pointer"
      >
        <span>{filter.label}</span>
        <ChevronRight
          className={cn(
            "size-3.5 transition-transform duration-200 ease-linear",
            isOpen && "rotate-90",
          )}
        />
      </button>

      {isOpen && filter.type === "checkbox" && filter.options?.length > 0 && (
        <ul className="mb-2 space-y-0.5">
          {filter.options.map((option) => {
            const isChecked = getSelected().includes(option.value);

            return (
              <li key={option.value}>
                <label className="hover:bg-secondary flex w-full cursor-pointer items-center justify-between gap-2.5 rounded px-2 py-1.5 text-sm transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Checkbox
                      id={option.value}
                      checked={isChecked}
                      onCheckedChange={() => toggleCheckbox(option.value)}
                    />
                    <span>{option.label}</span>
                  </div>

                  {option.hint && (
                    <span className="text-muted-foreground ml-auto text-xs">
                      {option.hint}
                    </span>
                  )}

                  {option.logo && (
                    <Image
                      src={option.logo}
                      alt={option.label}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  )}
                </label>
              </li>
            );
          })}
        </ul>
      )}

      {/* range slider */}
      {isOpen && filter.type === "range" && (
        <div className="px-2 pt-1 pb-3">
          <Slider
            value={localSlider}
            onValueChange={setLocalSlider}
            onValueCommit={commitSlider}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            className="w-full"
          />
          <div className="mt-2 flex items-center justify-between">
            {localSlider.length === 2 ? (
              <>
                <span className="text-muted-foreground text-xs">
                  {filter.prefix
                    ? `${filter.unit}${localSlider[0].toLocaleString()}`
                    : `${filter.unit} ${localSlider[0]}`}
                </span>
                <span className="text-muted-foreground text-xs">
                  {filter.prefix
                    ? `${filter.unit}${localSlider[1].toLocaleString()}`
                    : `${filter.unit} ${localSlider[1]}`}
                </span>
              </>
            ) : (
              <span className="text-muted-foreground text-xs">
                {filter.prefix
                  ? `${filter.unit}${localSlider[0].toLocaleString()}`
                  : `${filter.unit} ${localSlider[0]}`}
              </span>
            )}
          </div>
          {filter.hint && (
            <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed">
              {filter.hint}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
