import MonitorPage from "@/components/pages/monitors/MonitorPage";
import Container from "@/components/shared/Container";
import logger from "@/lib/logger";
import { getMonitors } from "@/lib/monitors";

export default async function Monitors({ searchParams }) {
  const params = await searchParams;

  const { data: monitors, error } = await getMonitors(params);

  if (error) logger.error("Monitors", error);

  return (
    <Container className="relative flex gap-8 py-12">
      <MonitorPage monitors={monitors} params={params} />
    </Container>
  );
}
