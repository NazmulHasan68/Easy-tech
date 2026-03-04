
import AboutSidebar from "./AboutSidebar";
import ServiceErpDemo from "@/components/Serives/sofware/ServiceErpDemo";
import ServiceErpIntro from "@/components/Serives/sofware/ServiceErpIntro";
import ServiceErpBanner from "@/components/Serives/sofware/ServiceErpBanner";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/web/ServiceWebChallenges";
import ServiceErpQuestion from "@/components/Serives/sofware/ServiceErpQustion";
import ServiceErpProject from "@/components/Serives/sofware/ServiceErpProject";

export default function ServiceErp() {
  return (
    <>
      <ServiceErpBanner />
      <ServiceErpProject/>
      <section className="max-w-7xl mx-auto px-0 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-8">
            <ServiceErpIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            <ServiceErpQuestion />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="flex flex-col gap-2">
              <AboutSidebar />
              <ServiceErpDemo/>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
