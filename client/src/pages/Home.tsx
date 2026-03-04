import HomeClientSay from "@/components/home/HomeClientSay";
import HomeHero from "@/components/home/HomeHero";
import HomePricing from "@/components/home/HomePricing";
import HomeProject from "@/components/home/HomeProject";
import HomeResearch from "@/components/home/HomeResearch";
import HomeServices from "@/components/home/HomeSerivces";
import HomeShapment from "@/components/home/HomeShapment";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeTopClientSlider from "@/components/home/HomeTopClientSlider";
import HomeTrustedClient from "@/components/home/HomeTrustedCline";

export default function Home() {
  return <div >
    <HomeHero/>
    <HomeTrustedClient/>
    <HomeServices/>
    <HomeSolutions/>
    <HomeResearch/>
    <HomePricing/>
    <HomeShapment/>
    <HomeProject/>
    <HomeClientSay/>
    <HomeTopClientSlider/>
    {/* <HomeTopClient/> */}
  </div>;
}
