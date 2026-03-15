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
import { appProjects } from "@/components/data/appProjectData";

export default function page() {
  return (
    <>
      {/* <ServiceWebbanner /> */}
     <ServiceBanner
        service="App Development"
        titleTop="Powerful"
        titleBottom="Mobile Applications"
        description="We build cross-platform iOS & Android apps that users love — fast, secure, and beautifully designed."
        pills={["React Native", "Flutter", "iOS", "Android", "Firebase"]}
        ctaLabel="Build Your App"
        bgImage="/services/app/app_banner.jpg"
        stats={[
          { icon: "Smartphone",  value: "30+",   label: "Apps Launched" },
          { icon: "Star",        value: "4.9★",  label: "Avg. App Rating" },
          { icon: "Users",       value: "100K+", label: "Active Users" },
          { icon: "ShieldCheck", value: "99%",   label: "Crash-Free Rate" },
        ]}
      />

      {/* <ServiceWebProject/> */}
      <ServiceProjectGrid
        titleMain="App Development"
        titleGradient="Projects"
        subtitle="Cross-platform iOS & Android apps built for performance and user delight."
        projects={appProjects}
        basePath="/services/app"
        cardLabel="Project Details"
      />

      <section className="max-w-7xl mx-auto px-1 md:px-4 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-16">
            <ServiceIntro
              label="App Developers"
              titleWords={["Mobile", "App", "Development"]}
              description="We build cross-platform iOS & Android applications that deliver exceptional user experiences. From concept to launch, we handle everything — UI/UX, backend, testing, and deployment."
              features={[
                "Cross-Platform iOS & Android",
                "Beautiful UI/UX Design",
                "Secure API & Backend Integration",
                "Ongoing Support & Maintenance",
              ]}
              image="/services/app/app_s1.jpg"
              imageAlt="App Development by Easy Tech"
              badgeTop="5+ Years Experience"
              badgeBottom="App Excellence"
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
