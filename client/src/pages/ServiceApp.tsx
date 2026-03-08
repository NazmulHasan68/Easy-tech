import AboutSidebar from "./AboutSidebar";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/web/ServiceWebChallenges";
import ServiceAppBanner from "@/components/Serives/app/ServiceAppBanner";
import ServiceAppProject from "@/components/Serives/app/ServiceAppProject";
import ServiceAppIntro from "@/components/Serives/app/ServiceAppIntro";
import ServiceAppDemo from "@/components/Serives/app/ServiceAppDemo";
import MobileServiceAppQuestion from "@/components/Serives/app/ServiceAppQustion";

export default function ServiceApp() {
  return (
    <>
      <ServiceAppBanner />
      <ServiceAppProject/>
      <section className="max-w-7xl mx-auto px-0 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-8">
            <ServiceAppIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            <MobileServiceAppQuestion />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="flex flex-col gap-2">
              <AboutSidebar />
              {/* <ServiceAppDemo/> */}
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
