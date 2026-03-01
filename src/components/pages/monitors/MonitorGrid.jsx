import MonitorCard from "@/components/card/MonitorCard";
import { monitors } from "@/utils/constants/monitors";

export default function MonitorGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {monitors.map((monitor) => (
        <MonitorCard key={monitor.id} monitor={monitor} />
      ))}
    </div>
  );
}
