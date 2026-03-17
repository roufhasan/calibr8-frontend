import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const getGridClasses = (index) => {
  if (index === 0 || index === 1) {
    return "md:col-span-2 md:row-span-4";
  } else if (index === 2) {
    return "md:col-span-2 md:row-span-2";
  } else {
    return "md:col-span-1 md:row-span-2";
  }
};

const getLayoutClasses = (index) => {
  if (index === 0 || index === 1) {
    return {
      titleSize: "text-xl",
      descSize: "text-base",
      padding: "p-8",
    };
  } else {
    return {
      titleSize: "text-lg",
      descSize: "text-sm",
      padding: "p-6",
    };
  }
};

export default function CategoryCard({ category, index }) {
  const { name, slug, image_url, description } = category;

  const layout = getLayoutClasses(index);
  const gridClass = getGridClasses(index);

  return (
    <Link
      href={`/categories/${slug}`}
      className={cn(
        "group relative overflow-hidden rounded",
        layout.padding,
        gridClass,
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src={image_url}
          alt={name}
          sizes="(max-width: 768px) 100vw, 20vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/30" />
      </div>
      <div className="flex h-full flex-col justify-end">
        <div className="space-y-1">
          <h3
            className={cn(
              "translate-y-2 font-semibold text-white opacity-100 drop-shadow-lg transition-all duration-300 ease-out group-hover:translate-y-0",
              layout.titleSize,
            )}
          >
            {name}
          </h3>
          <p
            className={cn(
              "translate-y-4 text-white/90 opacity-0 transition-all delay-75 duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100",
              layout.descSize,
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
