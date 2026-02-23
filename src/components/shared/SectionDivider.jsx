import { Separator } from "../ui/separator";

export default function SectionDivider({ label }) {
  return (
    <div className="mb-10 flex w-full items-center gap-4">
      <h2 className="text-muted-foreground shrink-0 text-xs font-medium tracking-widest uppercase">
        {label}
      </h2>
      <Separator className="w-full shrink" />
    </div>
  );
}
