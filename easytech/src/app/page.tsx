

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight, Code2, Smartphone, BarChart3, Layers,
  Star, CheckCircle2, Zap, Globe, Shield, TrendingUp,
} from "lucide-react";
import HomeHero from "@/components/home/HomeHero";
import HomeTrustedClient from "@/components/home/HomeTrustedClient";
import HomeServices from "@/components/home/HomeServices";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeResearch from "@/components/home/HomeResearch";
import HomePricing from "@/components/home/HomePricing";
import HomeShapment from "@/components/home/HomeShapment";
import HomeProject from "@/components/home/HomeProject";
import HomeClientSay from "@/components/home/HomeClientSay";
import HomeTopClientSlider from "@/components/home/HomeTopClientSlider";
import HomeBrand from "@/components/home/HomeBrand";
import { WorldMapDemo } from "@/components/world-map-demo";
import HomeServiceCards from "@/components/home/HomeServicecards";
import HomeOwner from "@/components/home/HomeOwner";
import HomeExpertise from "@/components/home/HomeExpertise";
import HomeVideoSection from "@/components/home/HomeVideoSection";
import HomeServicesHub from "@/components/home/Homeserviceshub";
export const metadata: Metadata = { title: "Home" };



export default function HomePage() {
  return (
    <>


      <HomeHero/>

      <HomeBrand/>

      <HomeServiceCards/>

      <HomeExpertise/>

      <HomeVideoSection/>

      <HomeOwner/>


      <HomeServicesHub/>

      {/* <WorldMapDemo/> */}

      <HomeTrustedClient/>

      <HomeServices/>

      <HomeSolutions/>

      <HomeResearch/>

      <HomePricing/>

      <HomeShapment/>

      <HomeProject/>

      <HomeClientSay/>

      <HomeTopClientSlider/>

      

    </>
  );
}
