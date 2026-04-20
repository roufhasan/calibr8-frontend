import Container from "@/components/shared/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Gallery from "./Gallery";
import Details from "./Details";

export default function Hero({ monitor }) {
  const { brand, model } = monitor;

  return (
    <section className="py-10">
      <Container>
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/monitors">Monitors</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/monitors?brand=${brand.toLowerCase()}`}>
                {brand}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{model}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* details container */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <Gallery monitor={monitor} />
          <Details monitor={monitor} />
        </div>
      </Container>
    </section>
  );
}
