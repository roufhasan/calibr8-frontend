import { cn } from "@/lib/utils";

export default function Container({ className, children }) {
  return (
    <div
      className={cn("container mx-auto px-[clamp(1rem,5vw,4rem)]", className)}
    >
      {children}
    </div>
  );
}
