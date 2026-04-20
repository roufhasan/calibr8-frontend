import GamutRow from "./GamutRow";

export default function GamutBars({ monitor }) {
  const { srgb, adobe_rgb, dci_p3, ntsc } = monitor;

  const metrics = [
    {
      key: "srgb",
      value: srgb,
      ceiling: 100,
      excellent: 95,
      good: 85,
      label: "sRGB",
      description:
        "Standard for web, apps, and all consumer content. 95%+ means colors render as intended across every screen and browser.",
      context: "Most IPS monitors hit 95%+. Below 90% is a real deficiency.",
    },
    {
      key: "dci_p3",
      value: dci_p3,
      ceiling: 100,
      excellent: 80,
      good: 65,
      label: "DCI-P3",
      description:
        "Cinema and HDR wide-gamut standard. Most consumer monitors score 65-78%. 80%+ requires wide-gamut backlighting (QLED, Mini-LED).",
      context:
        "Amber here is normal for mid-range monitors. 90%+ is professional grade.",
    },
    {
      key: "adobe_rgb",
      value: adobe_rgb,
      ceiling: 99,
      excellent: 80,
      good: 65,
      label: "Adobe RGB",
      description:
        "Print and photography gamut. Rarely hit by consumer displays — most score 65-75%. Needed only for print production workflows.",
      context: "80%+ is near-exclusive to professional monitors ($500+).",
    },
    {
      key: "ntsc",
      value: ntsc,
      ceiling: 85,
      excellent: 72,
      good: 60,
      label: "NTSC",
      description:
        "Older broadcast reference used as a wide-gamut proxy. Consumer monitors typically score 60-72%. Higher means broader overall color range.",
      context:
        "72%+ requires QLED or wide-gamut backlight. Standard IPS lands 60-68%.",
    },
  ];

  return (
    <div className="divide-y">
      {metrics.map((metric) => (
        <GamutRow key={metric.key} metric={metric} />
      ))}
    </div>
  );
}
