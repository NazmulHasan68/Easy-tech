import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";
// import ServiceDigitalBanner from "./components/ServiceDigitalbanner";
import ServiceDigitalIntro from "./components/ServiceDigitalIntro";

import ServiceBanner from "@/components/about/Servicebanner";
import ServiceIntro from "@/components/about/Serviceintro";
import ServiceProjectGrid from "@/components/about/Serviceprojectgrid";
import { digitalServices } from "@/components/data/digitalProjectData";

export default function page() {
  return (
    <>
      {/* <ServiceDigitalBanner /> */}

      <ServiceBanner
        service="Digital Marketing"
        titleTop="Powerful"
        titleBottom="Digital Marketing"
        description="Grow your brand online with data-driven marketing strategies. Reach the right audience and convert visitors into loyal customers."
        pills={["Google Ads", "Meta Ads", "TikTok Ads", "SEO", "Email Marketing"]}
        ctaLabel="Start a Campaign"
        bgImage="/services/digital/digital_icon.jpg"
        stats={[
          { icon: "TrendingUp", value: "3×",   label: "Avg. ROAS" },
          { icon: "Users",      value: "50K+", label: "Leads Generated" },
          { icon: "BarChart3",  value: "120+", label: "Campaigns Run" },
          { icon: "Target",     value: "98%",  label: "Client Retention" },
        ]}
      />

      {/* <ServiceDigitalProject/> */}
      <ServiceProjectGrid
        titleMain="Our Digital Marketing"
        titleGradient="Services"
        subtitle="We deliver result-driven digital marketing solutions to help brands grow online."
        projects={digitalServices}
        basePath="/services/marketing"
        cardLabel="View Details"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="Digital Marketing Experts"
              titleWords={["Grow", "Your", "Business", "With", "Smart", "Marketing"]}
              description="In today's competitive online marketplace, having a website is not enough — you need strategic digital marketing to reach the right audience, build trust, and drive sales."
              description2="We combine data-driven strategies with creative execution to ensure your business doesn't just exist online but thrives in the digital ecosystem."
              features={[
                "SEO & Search Ranking Optimization",
                "Social Media Marketing & Branding",
                "Google & Facebook Paid Ads",
                "Content Strategy & Lead Generation",
              ]}
              image="/services/digital/digital_marketing_page.jpg"
              imageAlt="Digital Marketing by Easy Tech"
              badgeTop="5+ Years Experience"
              badgeBottom="Marketing Excellence"
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
