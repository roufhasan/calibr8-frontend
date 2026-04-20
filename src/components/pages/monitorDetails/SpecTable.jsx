import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function SpecTable({ group }) {
  const filteredSpecs = group.specs.filter(
    (s) => s.value !== null && s.value !== undefined,
  );

  if (filteredSpecs.length === 0) return null;

  return (
    <div>
      <p className="text-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
        {group.heading}
      </p>
      <Table>
        <TableBody>
          {filteredSpecs.map((spec, i) => (
            <TableRow
              key={i}
              className={cn(
                "border-b-secondary",
                i % 2 === 0 ? "bg-secondary/40" : "bg-transparent",
              )}
            >
              <TableCell className="text-muted-foreground w-1/3">
                {spec.label}
              </TableCell>
              <TableCell className="text-right font-medium">
                {spec.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
