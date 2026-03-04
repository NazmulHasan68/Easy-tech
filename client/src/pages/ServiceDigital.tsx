import AboutSidebar from "./AboutSidebar";
import ServiceDigitalIntro from "@/components/Serives/digital/ServiceDigitalIntro";
import SericeDigitaldemo from "@/components/Serives/digital/SericeDigitaldemo";
import ServiceDigitalBanner from "@/components/Serives/digital/ServiceDigitalbanner";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/web/ServiceWebChallenges";
import ServiceDigitalQuestion from "@/components/Serives/digital/ServiceDigitalQuestion";
import ServiceDigitalProject from "@/components/Serives/digital/ServiceDigitalProject";

export default function ServiceDigital() {
  return (
    <>
      <ServiceDigitalBanner />
      <ServiceDigitalProject />
      <section className="max-w-7xl mx-auto px-1 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 ">
            <ServiceDigitalIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            <ServiceDigitalQuestion/>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="sticky top-24">
              <AboutSidebar />
              <SericeDigitaldemo/>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
