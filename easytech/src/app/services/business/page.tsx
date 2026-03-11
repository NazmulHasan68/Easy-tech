import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";
// import ServiceWebbanner from "./components/ServiceWebbanner";
// import ServiceWebProject from "./components/ServiceWebProject";
// import ServiceWebIntro from "./components/Servicewebintro";
import ServiceBanner from "@/components/about/Servicebanner";
import ServiceIntro from "@/components/about/Serviceintro";
import ServiceProjectGrid from "@/components/about/Serviceprojectgrid";
import { businessProjects } from "@/components/data/businessProjectData";

export default function page() {
  return (
    <>
      {/* <ServiceWebbanner /> */}
      <ServiceBanner
        service="Business Consultancy"
        titleTop="Strategic"
        titleBottom="Business Consultancy"
        description="We help startups and established businesses unlock growth through data-driven strategy, process optimization, and digital transformation roadmaps tailored to your goals."
        pills={["Growth Strategy", "Digital Transformation", "Market Research", "Process Optimization", "ROI Planning"]}
        ctaLabel="Book a Consultation"
        ctaHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="#overview"
        bgImage="/services/business/business.jpg"
        stats={[
          { icon: "TrendingUp",  value: "120+", label: "Businesses Scaled" },
          { icon: "BarChart3",   value: "3×",   label: "Avg. Revenue Growth" },
          { icon: "Users",       value: "98%",  label: "Client Satisfaction" },
          { icon: "Briefcase",   value: "5+",   label: "Years Experience" },
        ]}
      />

      {/* <ServiceWebProject/> */}
      <ServiceProjectGrid
        titleMain="Consultancy"
        titleGradient="Case Studies"
        projects={businessProjects}
        basePath="/services/business"
        cardLabel="Read Case Study"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
                label="Business Consultants"
                titleWords={["Strategic", "Business", "Consultancy"]}
                description="We help startups and established businesses unlock growth through data-driven strategy, process optimization, and digital transformation roadmaps tailored to your unique goals."
                description2="Whether you're launching a new venture or scaling an existing one, our consultants provide actionable insights that turn challenges into competitive advantages."
                features={[
                  "Growth Strategy & Roadmapping",
                  "Digital Transformation Planning",
                  "Market Research & Analysis",
                  "Process Optimization & Efficiency",
                ]}
                image="/services/business/business_1.png"
                imageAlt="Business Consultancy by Easy Tech"
                badgeTop="120+ Businesses Scaled"
                badgeBottom="Consultancy Excellence"
              />
            <WhatWeProvide/>
            <ServiceChallenges service = "web" />
            <ServiceFAQ defaultTab = "web"/>
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
