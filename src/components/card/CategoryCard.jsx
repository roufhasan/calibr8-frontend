import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const getGridClasses = (index) => {
  if (index <= 2) return "md:col-span-2 md:row-span-1";
  return "md:col-span-3 md:row-span-1";
};

export default function CategoryCard({ category, index }) {
  const { name, slug, img_url, count, tags } = category;

  return (
    <Link
      href={`/categories/${slug}`}
      className={cn(
        "group bg-card relative min-h-40 overflow-hidden rounded border p-4 md:min-h-0 md:p-5",
        "hover:border-border transition-colors duration-150",
        getGridClasses(index),
      )}
    >
      {/* watermark — keep it, it's fine */}
      <div className="pointer-events-none absolute -right-3 -bottom-3 size-24 opacity-[0.05] transition-all duration-300 select-none group-hover:scale-[1.06] group-hover:opacity-[0.10] md:size-28">
        <Image
          src={img_url}
          alt=""
          fill
          className="object-contain"
          aria-hidden
        />
      </div>

      <div className="relative flex h-full flex-col justify-end gap-2">
        <div>
          <h3 className="text-primary text-base font-bold tracking-tight">
            {name}
          </h3>
          {/* count directly under name, not floated right */}
          {count != null && (
            <p className="text-muted-foreground/60 mt-0.5 text-[10px]">
              {count}{" "}
              {name === "Laptops"
                ? "laptops"
                : name === "TVs"
                  ? "TVs"
                  : "monitors"}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
