import Link from "next/link";
import { Triangle } from "lucide-react";

export default function Logo({ varinat = "light" }) {
  const isDark = varinat === "dark";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-0.5 px-3 py-1 font-sans font-bold select-none"
    >
      <span className={`text-2xl ${isDark ? "text-white" : "text-foreground"}`}>
        C
      </span>
      <Triangle
        className="text-primary pointer-events-none size-5"
        strokeWidth={2}
        fill="currentColor"
      />
      <span
        className={`text-2xl tracking-[0.08em] ${isDark ? "text-white" : "text-foreground"}`}
      >
        LIBR8
      </span>
    </Link>
  );
}
