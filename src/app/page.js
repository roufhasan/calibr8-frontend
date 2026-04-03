import Category from "@/components/pages/home/Category";
import FeaturedCompare from "@/components/pages/home/FeaturedCompare";
import Hero from "@/components/pages/home/Hero";
import LatestTests from "@/components/pages/home/LatestTests";
import TopRatedMonitors from "@/components/pages/home/TopRatedMonitors";
import Methodology from "@/components/pages/home/Methodology";
import Process from "@/components/pages/home/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <TopRatedMonitors />
      <LatestTests />
      <FeaturedCompare />
      <Category />
      <Methodology />
      <Process />
    </>
  );
}
