import MonitorCard from "@/components/card/MonitorCard";
import MonitorListCard from "@/components/card/MonitorListCard";

export default function MonitorGrid({ monitors, isListView = false }) {
  return (
    <div
      className={`mb-12 gap-4 ${
        isListView
          ? "flex flex-col"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      }`}
    >
      {monitors?.map((monitor) =>
        isListView ? (
          <MonitorListCard key={monitor.id} monitor={monitor} />
        ) : (
          <MonitorCard key={monitor.id} monitor={monitor} />
        ),
      )}
    </div>
  );
}
