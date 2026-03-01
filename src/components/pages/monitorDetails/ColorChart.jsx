"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function ColorChart({ colorMetrics }) {
  const data = [
    { metric: "sRGB", value: colorMetrics.srgb },
    { metric: "DCI-P3", value: colorMetrics.dciP3 },
    { metric: "Adobe RGB", value: colorMetrics.adobeRgb },
    { metric: "NTSC", value: colorMetrics.ntsc },
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
