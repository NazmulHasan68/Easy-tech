import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";
// import ServiceWebbanner from "./components/ServiceWebbanner";
// import ServiceWebProject from "./components/ServiceWebProject";
// import ServiceWebIntro from "./components/Servicewebintro";
import ServiceBanner from "@/components/about/Servicebanner";
import ServiceIntro from "@/components/about/Serviceintro";

export default function page() {
  return (
    <>
      {/* <ServiceWebbanner /> */}
     <ServiceBanner
        service="Domain & Hosting"
        titleTop="Fast & Reliable"
        titleBottom="Web Hosting"
        description="99.9% uptime, free SSL, blazing fast NVMe servers, and expert 24/7 support — everything your website needs."
        pills={["NVMe SSD", "Free SSL", "cPanel", "Daily Backups", "CDN"]}
        ctaLabel="Get Hosting"
        bgImage="/services/domain/domain_1.jpg"
        stats={[
          { icon: "Zap",         value: "99.9%", label: "Uptime SLA" },
          { icon: "ShieldCheck", value: "Free",  label: "SSL Included" },
          { icon: "Server",      value: "24/7",  label: "Support" },
          { icon: "Globe",       value: "500+",  label: "Sites Hosted" },
        ]}
      />

      {/* <ServiceWebProject/> */}
      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="Hosting Experts"
              titleWords={["Fast", "&", "Reliable", "Hosting"]}
              description="We provide blazing-fast NVMe SSD hosting with 99.9% uptime SLA, free SSL, daily backups, and 24/7 expert support — everything your website needs to perform at its best."
              features={[
                "99.9% Uptime SLA",
                "Free SSL Certificate",
                "Daily Automated Backups",
                "24/7 Expert Support",
              ]}
              image="/services/domain/domain_1.png"
              imageAlt="Domain & Hosting by Easy Tech"
              badgeTop="500+ Sites Hosted"
              badgeBottom="Hosting Excellence"
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
