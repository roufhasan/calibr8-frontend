import Hero from "@/components/pages/monitorDetails/Hero";
import ColorMetrics from "@/components/pages/monitorDetails/ColorMetrics";
import Review from "@/components/pages/monitorDetails/Review";
import Specifications from "@/components/pages/monitorDetails/Specifications";
import SimilarMonitors from "@/components/pages/monitorDetails/SimilarMonitors";
import CompareCTA from "@/components/pages/monitorDetails/CompareCTA";
import { getMonitorBySlug } from "@/lib/monitors";
import logger from "@/lib/logger";

export default async function MonitorDetails({ params }) {
  const { slug } = await params;
  const { data: monitor, error } = await getMonitorBySlug(slug);

  if (error) logger.error("Monitor Details", error);

  return (
    <>
      <Hero monitor={monitor} />
      <ColorMetrics monitor={monitor} />
      <Review monitor={monitor} />
      <Specifications monitor={monitor} />
      <SimilarMonitors monitor={monitor} />
      <CompareCTA monitor={monitor} />
    </>
  );
}
