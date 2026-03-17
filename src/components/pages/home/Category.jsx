import Container from "@/components/shared/Container";
import CategoryCard from "@/components/card/CategoryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { supabase } from "@/lib/supabase";
import logger from "@/lib/logger";

export default async function Category() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) logger.error("Category", error);

  return (
    <section className="py-10 lg:py-16">
      <Container>
        <SectionHeader
          title="Browse by Use Case"
          subtitle="Gaming, professional, ultrawide and more."
        />

        {/* Bento Grid */}
        {categories?.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={category?.id}
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
