

import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import AboutIntroText from "@/components/about/AboutIntro";
import AboutSidebar from "@/components/about/AboutSidebar";
import ServiceChallenges from "@/components/about/ServiceChallenges";
import ServiceFAQ from "@/components/about/ServiceFAQ";
import WhatWeProvide from "@/components/about/WhatWeProvide";

export default function page() {
  return (
    <>
      <AboutBreadcrumb/>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 space-y-8">
            <AboutIntroText />
            <WhatWeProvide />
            <ServiceChallenges />
            <ServiceFAQ />
{/* 
            <ServiceFAQ defaultTab="web" />
<ServiceFAQ defaultTab="app" />
<ServiceFAQ defaultTab="erp" />
<ServiceFAQ defaultTab="digital" /> */}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2">
            <div className="sticky top-24">
              <AboutSidebar />
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}