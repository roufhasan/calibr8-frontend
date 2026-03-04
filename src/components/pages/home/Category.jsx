import { categories } from "@/utils/constants";
import Container from "@/components/shared/Container";
import CategoryCard from "@/components/card/CategoryCard";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Category() {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="Browse by Use Case"
          subtitle="Gaming, professional, ultrawide and more."
        />

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
