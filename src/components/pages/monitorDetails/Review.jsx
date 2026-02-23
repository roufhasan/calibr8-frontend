import Container from "@/components/shared/Container";
import SectionDivider from "@/components/shared/SectionDivider";

export default function Review({ monitor }) {
  const { name, review } = monitor;

  return (
    <section className="py-12">
      <Container>
        <SectionDivider label="Review" />

        <div className="flex flex-col gap-4">
          {/* context above video */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">
              Full Calman Calibration Review
            </p>
            <p className="text-muted-foreground text-sm">
              Specs only tell half the story - watch the full calibration review
              to see real-world performance: ghosting, backlight bleed, HDR tone
              mapping and motion handling.
            </p>
          </div>

          {/* video */}
          <div className="aspect-video w-full overflow-hidden rounded">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${review.videoId}`}
              title={`${name} — Full Calman Calibration Review`}
              allowFullScreen
            />
          </div>

          {/* source below video */}
          <p className="text-muted-foreground text-xs">
            Verified color accuracy test · By{" "}
            <a
              href={review.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-2 transition-colors"
            >
              {review.channelName}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
