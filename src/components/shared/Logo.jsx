import Link from "next/link";
import { Triangle } from "lucide-react";

// TODO: fix this component
export default function Logo({ varinat = "light" }) {
  const isDark = varinat === "dark";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-0.5 px-3 font-sans text-lg font-bold select-none"
    >
      <span className={`${isDark ? "text-white" : "text-foreground"}`}>C</span>
      {/* <Triangle
        className="text-primary pointer-events-none size-4"
        strokeWidth={2}
        fill="currentColor"
      /> */}
      <span className="text-primary text-xl">Δ</span>
      <span
        className={`text-lg tracking-[0.08em] ${isDark ? "text-white" : "text-foreground"}`}
      >
        LIBR8
      </span>
    </Link>
  );
}
