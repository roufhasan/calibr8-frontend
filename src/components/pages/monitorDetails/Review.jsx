import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";

export default function Review({ monitor }) {
  const { tester } = monitor;

  if (!tester?.name || !tester?.review_url) return null;

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Review" />

        <p className="text-muted-foreground text-xs">
          Verified color accuracy test · {tester.name} ·{" "}
          <a
            href={tester.review_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline underline-offset-2 transition-colors"
          >
            Watch review →
          </a>
        </p>
      </Container>
    </section>
  );
}
