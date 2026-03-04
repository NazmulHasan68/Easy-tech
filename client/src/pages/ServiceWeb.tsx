import AboutSidebar from "./AboutSidebar";
import ServiceWebdemo from "@/components/Serives/web/ServiceWebdemo";
import ServiceWebIntro from "@/components/Serives/web/ServiceWebIntro";
import ServiceWebbanner from "@/components/Serives/web/ServiceWebbanner";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/web/ServiceWebChallenges";
import ServiceWebQuestion from "@/components/Serives/web/ServiceWebQustion";
import ServiceWebProject from "@/components/Serives/web/ServiceWebProject";

export default function ServiceWeb() {
  return (
    <>
      <ServiceWebbanner />
      <ServiceWebProject/>
      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceWebIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            <ServiceWebQuestion/>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="space-x-3">
              <AboutSidebar />
              <ServiceWebdemo/>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
