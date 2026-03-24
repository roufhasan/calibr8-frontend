"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { metric, value } = payload[0].payload;
  if (value == null) return null;

  return (
    <div className="bg-card border-border border px-2.5 py-1.5 font-mono text-xs">
      <span className="text-muted-foreground">{metric}: </span>
      <span className="text-foreground font-medium">{value}%</span>
    </div>
  );
}

export default function ColorChart({ monitor }) {
  const data = [
    { metric: "sRGB", value: monitor.srgb },
    { metric: "DCI-P3", value: monitor.dci_p3 },
    { metric: "Adobe RGB", value: monitor.adobe_rgb },
    { metric: "NTSC", value: monitor.ntsc },
  ];

  return (
    <div className="flex flex-col gap-2">
      <ResponsiveContainer width={250} height={200}>
        <RadarChart
          data={data}
          margin={{ top: 8, right: 16, bottom: 8, left: 16 }}
        >
          <PolarGrid stroke="var(--border)" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{
              fontSize: 11,
              fill: "var(--muted-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            dataKey="value"
            fill="var(--primary)"
            fillOpacity={0.15}
            stroke="var(--primary)"
            strokeWidth={1.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
