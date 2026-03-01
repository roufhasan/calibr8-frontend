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
    <div className={cn("flex items-end justify-between", className)}>
      <div className="space-y-1.5">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        )}
      </div>
      {label && (
        <Link
          href={href}
          className="text-muted-foreground hover:text-foreground mb-1 flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors duration-150"
        >
          {label}
          <ChevronRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
}
