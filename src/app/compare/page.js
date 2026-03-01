import CompareTable from "@/components/pages/compare/CompareTable";
import Hero from "@/components/pages/compare/Hero";
import Container from "@/components/shared/Container";

export default function Compare() {
  return (
    <Container className="py-12">
      <Hero />
      <CompareTable />
    </Container>
  );
}
