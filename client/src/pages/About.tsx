import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import AboutFAQ from "@/components/about/AboutFAQ";
import AboutIntro from "@/components/about/AboutIntro";
import AboutSidebar from "./AboutSidebar";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/web/ServiceWebChallenges";

export default function About() {
  return (
    <>
      <AboutBreadcrumb />

      <section className="max-w-7xl mx-auto px-1 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-8">
            <AboutIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            <AboutFAQ />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="sticky top-24">
              <AboutSidebar />
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
