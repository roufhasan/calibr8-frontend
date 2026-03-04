import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  className,
  title,
  subtitle,
  label,
  href,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {label && (
        <Link
          href={href}
          className="text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors duration-150 sm:mb-1"
        >
          {label}
          <ChevronRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
}
