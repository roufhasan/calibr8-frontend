"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";

export default function FilterSection({ filter }) {
  const [isOpen, setIsOpen] = useState(filter.defaultOpen);
  const [sliderValue, setSliderValue] = useState(
    Array.isArray(filter.defaultValue)
      ? filter.defaultValue
      : [filter.defaultValue],
  );

  const toggleOpen = () => setIsOpen((prev) => !prev);

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
          {filter.options.map((option) => (
            <li key={option.value}>
              <label className="hover:bg-secondary flex w-full cursor-pointer items-center justify-between gap-2.5 rounded px-2 py-1.5 text-sm transition-colors">
                <div className="flex items-center gap-2.5">
                  <Checkbox id={option.value} />
                  <span>{option.label}</span>
                </div>

                {option.hint && (
                  <span className="text-muted-foreground ml-auto text-xs">
                    {option.hint}
                  </span>
                )}

                {option.logo ? (
                  <Image
                    src={option.logo}
                    alt={option.label}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                ) : (
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: option.color }}
                  />
                )}
              </label>
            </li>
          ))}
        </ul>
      )}

      {/* range slider */}
      {isOpen && filter.type === "range" && (
        <div className="px-2 pt-1 pb-3">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            className="w-full"
          />
          <div className="mt-2 flex items-center justify-between">
            {sliderValue.length === 2 ? (
              <>
                <span className="text-muted-foreground text-xs">
                  {filter.prefix
                    ? `${filter.unit}${sliderValue[0].toLocaleString()}`
                    : `${filter.unit} ${sliderValue[0]}`}
                </span>
                <span className="text-muted-foreground text-xs">
                  {filter.prefix
                    ? `${filter.unit}${sliderValue[1].toLocaleString()}`
                    : `${filter.unit} ${sliderValue[1]}`}
                </span>
              </>
            ) : (
              <span className="text-muted-foreground text-xs">
                {filter.prefix
                  ? `${filter.unit}${sliderValue[0].toLocaleString()}`
                  : `${filter.unit} ${sliderValue[0]}`}
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
