import Category from "@/components/pages/home/Category";
import FeaturedCompare from "@/components/pages/home/FeaturedCompare";
import HowItWorks from "@/components/pages/home/HowItWorks";
import Hero from "@/components/pages/home/Hero";
import LatestTests from "@/components/pages/home/LatestTests";
import MonitorListings from "@/components/pages/home/MonitorListings";
import WhyTrustUs from "@/components/pages/home/WhyTrustUs";

export default function Home() {
  return (
    <>
      <Hero />
      <MonitorListings />
      <LatestTests />
      <FeaturedCompare />
      <Category />
      <WhyTrustUs />
      <HowItWorks />
    </>
  );
}
