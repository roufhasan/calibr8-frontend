import Container from "@/components/shared/Container";
import CategoryCard from "@/components/card/CategoryCard";
import SectionHeader from "@/components/shared/SectionHeader";

const categories = [
  {
    name: "Gaming",
    slug: "/gaming",
    img_url: "/images/home/gaming.png",
    tags: ["144Hz+", "<1ms"],
    count: 43,
  },
  {
    name: "Professional",
    slug: "/professional",
    img_url: "/images/home/professional.png",
    tags: ["144Hz+", "<1ms"],
    count: 43,
  },
  {
    name: "Ultrawide",
    slug: "/ultrawide",
    img_url: "/images/home/ultrawide.png",
    tags: ["144Hz+", "<1ms"],
    count: 43,
  },
  {
    name: "Laptops",
    slug: "/laptops",
    img_url: "/images/home/laptop.png",
    tags: ["144Hz+", "<1ms"],
    count: 43,
  },
  {
    name: "TVs",
    slug: "/tv",
    img_url: "/images/home/tv.png",
    tags: ["144Hz+", "<1ms"],
    count: 43,
  },
];

export default async function Category() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          label="Not all monitors are equal"
          title="Browse by Use Case"
        />

        {categories?.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[140px_140px]">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                index={index}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
