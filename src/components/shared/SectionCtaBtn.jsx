import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SectionCtaBtn({ href, linkLabel, className = "" }) {
  return (
    <Link
      href={href}
      className={cn(
        "group text-muted-foreground hover:text-foreground inline-flex w-fit shrink-0 items-center gap-1 p-1.5 text-[10px] tracking-[0.08em] uppercase transition-colors",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1">
        {linkLabel || "See all"}
        <ArrowUpRight
          size={14}
          className="transition-transform duration-200 ease-linear group-hover:rotate-45"
        />
      </span>
    </Link>
  );
}
