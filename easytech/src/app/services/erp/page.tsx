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
import { erpProjects } from "@/components/data/erpProjectData";

export default function page() {
  return (
    <>
      {/* <ServiceWebbanner /> */}
      <ServiceBanner
        service="ERP Solutions"
        titleTop="Smarter"
        titleBottom="ERP Systems"
        description="Unify HR, inventory, finance, and operations into one powerful dashboard — built for your business."
        pills={["Inventory", "HR & Payroll", "Finance", "CRM", "Reporting"]}
        ctaLabel="Request a Demo"
        bgImage="/services/erp/software.jpg"
        stats={[
          { icon: "Settings2",  value: "25+",       label: "ERP Deployments" },
          { icon: "TrendingUp", value: "40%",        label: "Efficiency Gain" },
          { icon: "BarChart3",  value: "Real-Time",  label: "Analytics" },
          { icon: "ShieldCheck",value: "99.9%",      label: "Uptime SLA" },
        ]}
      />

      {/* <ServiceWebProject/> */}

      <ServiceProjectGrid
        titleMain="ERP"
        titleGradient="Solutions"
        subtitle="Powerful ERP systems that unify your business operations in one platform."
        projects={erpProjects}
        basePath="/services/erp"
        cardLabel="View Solution"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="ERP Specialists"
              titleWords={["Smarter", "ERP", "Solutions"]}
              description="We design and deploy ERP systems that unify your entire business — HR, inventory, finance, sales, and operations — in one intelligent platform."
              features={[
                "HR & Payroll Management",
                "Inventory & Supply Chain",
                "Finance & Accounting Module",
                "Real-Time Reports & Dashboards",
              ]}
              image="/services/erp/erp5.jpg"
              imageAlt="ERP Solutions by Easy Tech"
              badgeTop="25+ Deployments"
              badgeBottom="ERP Excellence"
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
