import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

export default function Review({ monitor }) {
  const { tester } = monitor;
  if (!tester?.name || !tester?.review_url) return null;

  return (
    <div className="mt-10 flex items-center justify-between border-t pt-6">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-xs">
          Verified color accuracy test
        </span>
        <span className="text-muted-foreground/40 text-xs">·</span>
        <span className="text-muted-foreground text-xs">{tester.name}</span>
      </div>
      <Button size="sm" variant="ghost" asChild>
        <Link
          href={tester.review_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Film />
          Watch full review
        </Link>
      </Button>
    </div>
  );
}
