import Hero from "@/components/pages/monitorDetails/hero/Hero";
import TestResult from "@/components/pages/monitorDetails/testresult/TestResult";
import Specifications from "@/components/pages/monitorDetails/Specifications";
import SimilarMonitors from "@/components/pages/monitorDetails/SimilarMonitors";
import { getMonitorBySlug } from "@/lib/monitors";
import logger from "@/lib/logger";

export default async function MonitorDetails({ params }) {
  const { slug } = await params;
  const { data: monitor, error } = await getMonitorBySlug(slug);

  if (error) logger.error("Monitor Details", error);

  return (
    <>
      <Hero monitor={monitor} />
      <TestResult monitor={monitor} />
      <Specifications monitor={monitor} />
      <SimilarMonitors monitor={monitor} />
    </>
  );
}
