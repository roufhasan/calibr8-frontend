import Hero from "@/components/pages/monitorDetails/Hero";
import ColorMetrics from "@/components/pages/monitorDetails/ColorMetrics";
import Review from "@/components/pages/monitorDetails/Review";
import Specifications from "@/components/pages/monitorDetails/Specifications";
import SimilarMonitors from "@/components/pages/monitorDetails/SimilarMonitors";
import CompareCTA from "@/components/pages/monitorDetails/CompareCTA";

const monitor = {
  brand: "LG",
  name: "LG 27GN950-B",
  slug: "lg-27gn950-b",
  certification: "calman",
  price: 799,

  panel: {
    size: 27,
    type: "Nano IPS",
    resolution: "3840x2160",
    refreshRate: 144,
    responseTime: "1ms",
    brightness: "600 nits",
    contrastRatio: "1000:1",
    hdrSupport: "VESA DisplayHDR 600",
  },

  colorMetrics: {
    deltaE: 0.86,
    srgb: 99.3,
    adobeRgb: 87.6,
    ntsc: 81.2,
    dciP3: 95.1,
  },

  physical: {
    dimensions: "614.4 x 533.0 x 292.7mm",
    weight: "6.8kg",
    vesa: "100x100mm",
  },

  connectivity: ["2x HDMI 2.1", "1x DisplayPort 1.4", "3x USB-A", "1x USB-C"],
  images: [
    "https://images.unsplash.com/photo-1577375870519-0a9fdb747f51?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577375729078-820d5283031c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577375774296-1480089cb555?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  review: {
    videoId: "lYnlHtyMkZM",
    channelName: "PC Builder Bangladesh",
    channelUrl: "https://www.youtube.com/@PCBuilderBangladesh",
  },
};

export default function MonitorDetails() {
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
