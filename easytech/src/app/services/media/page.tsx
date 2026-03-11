import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";
// import ServiceDigitalBanner from "./components/ServiceDigitalbanner";

import ServiceBanner from "@/components/about/Servicebanner";
import ServiceIntro from "@/components/about/Serviceintro";
import ServiceProjectGrid from "@/components/about/Serviceprojectgrid";
import { mediaProjects } from "@/components/data/mediaProjectData";


export default function page() {
  return (
    <>
      {/* <ServiceDigitalBanner /> */}

      <ServiceBanner
        service="Media Buying"
        titleTop="Maximize Your"
        titleBottom="Ad Spend ROI"
        description="We plan, buy, and optimize ad placements across Meta, Google, TikTok & more to maximize every taka of your budget."
        pills={["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Programmatic"]}
        ctaLabel="Boost My Ads"
        bgImage="/services/media/media.jpg"
        stats={[
          { icon: "TrendingUp",  value: "5×",    label: "Avg. ROAS" },
          { icon: "Target",      value: "200+",  label: "Campaigns Managed" },
          { icon: "DollarSign",  value: "৳50M+", label: "Ad Spend Managed" },
          { icon: "BarChart3",   value: "98%",   label: "Client Retention" },
        ]}
      />

      {/* <ServiceDigitalProject/> */}
      <ServiceProjectGrid
        titleMain="Media Buying"
        titleGradient="Campaigns"
        subtitle="We maximize your ad spend ROI across Meta, Google, TikTok & more."
        projects={mediaProjects}
        basePath="/services/media"
        cardLabel="View Campaign"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="Media Buying Experts"
              titleWords={["Maximize", "Your", "Ad", "Spend"]}
              description="We plan, buy, and optimize ad placements across Meta, Google, TikTok, and LinkedIn to ensure every taka of your ad budget delivers maximum return."
              description2="Our media buying team uses advanced targeting, A/B testing, and real-time analytics to reduce your cost-per-acquisition while scaling your reach."
              features={[
                "Meta & Google Ads Management",
                "TikTok & LinkedIn Campaigns",
                "Retargeting & Remarketing",
                "Budget Optimization & ROI Tracking",
              ]}
              image="/services/media/media_1.png"
              imageAlt="Media Buying by Easy Tech"
              badgeTop="৳50M+ Ad Spend"
              badgeBottom="Media Excellence"
            />

            <WhatWeProvide/>
            <ServiceChallenges service = "digital" />
            <ServiceFAQ defaultTab = "digital"/>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="space-x-3">
              <AboutSidebar />
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
