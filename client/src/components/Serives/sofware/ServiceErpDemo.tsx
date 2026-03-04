"use client";

import { Database, Users, Building2, ArrowRight } from "lucide-react";

const demos = [
  {
    title: "Easy ERP System",
    subtitle: "Complete business & inventory management",
    icon: Database,
    url: "https://easytechsolutions.xyz/easy_data/easy_erp/",
  },
  {
    title: "Easy CRM Software",
    subtitle: "Lead, client & sales management system",
    icon: Users,
    url: "https://easytechsolutions.xyz/easy_data/easy_lead_management/login.php",
  },
  {
    title: "Easy Rental / ERM",
    subtitle: "Rental property & asset management",
    icon: Building2,
    url: "https://easytechsolutions.xyz/easy_data/easy_rental_management/login.php",
  },
];

export default function ServiceErpDemo() {
  return (
    <section className="relative py-6 mt-4 bg-[#f7faf8] rounded-3xl overflow-hidden">
      <div className="max-w-4xl mx-auto px-3">
        {/* Section Title */}
        <h3 className="text-2xl md:text-2xl font-bold mb-6 text-[#172215] ">
          Live ERP & CRM Software Demos
        </h3>

        {/* Demo Cards */}
        <div className="space-y-3">
          {demos.map((demo, i) => {
            const Icon = demo.icon;

            return (
              <a
                key={i}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between
                           overflow-hidden rounded-2xl border border-[#98BC62]/40
                           px-6 py-3 transition-all duration-500 shadow hover:shadow-xl
                           bg-white hover:bg-gradient-to-r hover:bg-[#427B43]"
              >
                {/* Left Section */}
                <div className="flex items-center gap-5 z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl
                                  bg-[#98BC62]/20 group-hover:bg-[#98BC62] transition">
                    <Icon className="text-[#232822] group-hover:text-white transition duration-300" size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-[#232822] group-hover:text-white transition">
                      {demo.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 group-hover:text-white/80 transition">
                      {demo.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-gray-400 group-hover:text-white transition duration-300 z-10" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
