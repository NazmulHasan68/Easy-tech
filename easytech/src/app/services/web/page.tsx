import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";
// import ServiceWebbanner from "./components/ServiceWebbanner";
import ServiceWebProject from "./components/ServiceWebProject";
import ServiceWebIntro from "./components/Servicewebintro";
import ServiceBanner from "@/components/about/Servicebanner";
import { Globe, Zap, ShieldCheck, TrendingUp,} from "lucide-react";
import ServiceIntro from "@/components/about/Serviceintro";
import ServiceProjectGrid from "@/components/about/Serviceprojectgrid";
import { webProjects } from "@/components/data/webProjectData";

export default function ServiceWeb() {
  return (
    <>
      {/* <ServiceWebbanner /> */}
      <ServiceBanner
        service="Web Application"
        titleTop="Modern"
        titleBottom="Web Development"
        description="We build high-performance, scalable, and secure web applications tailored to your business needs."
        pills={["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"]}
        ctaLabel="Start Your Project"
        bgImage="/services/web/web.jpg"
        stats={[
          { icon: "Globe",       value: "48+",   label: "Web Projects" },
          { icon: "Zap",         value: "2×",    label: "Faster Load Time" },
          { icon: "ShieldCheck", value: "99.9%", label: "Uptime SLA" },
          { icon: "TrendingUp",  value: "3×",    label: "Avg. Conversion Lift" },
        ]}
      />

      {/* <ServiceWebProject/> */}
      <ServiceProjectGrid
        titleMain="Development"
        titleGradient="Projects"
        subtitle="We craft scalable, high-performance web solutions that help businesses grow."
        projects={webProjects}
        basePath="/services/web"
        cardLabel="Project Details"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="Who We Are"
              titleWords={["Web", "Application", "Development"]}
              description="At Easy Tech Solutions, we transform your ideas into scalable, high-performing digital products. From modern websites to enterprise-grade applications, our solutions are secure, responsive, and SEO-optimized for real business growth."
              features={[
                "Modern UI with React & Tailwind",
                "SEO Friendly & High Performance",
                "Custom Features for Your Business",
                "Secure Backend with Node.js & Next.js",
              ]}
              image="/services/web/website_page.jpg"
              imageAlt="Web Development by Easy Tech"
              badgeTop="5+ Years Experience"
              badgeBottom="Web Excellence"
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
