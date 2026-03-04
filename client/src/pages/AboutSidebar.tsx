"use client";

import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Digital Marketing", href: "/services/marketing" },
  { name: "Web Development", href: "/services/web" },
  { name: "CRM / ERP Solutions", href: "/services/erp" },
];

export default function AboutSidebar() {
  const location = useLocation();

  return (
    <aside
      className="md:mt-20 rounded-3xl bg-white/90 backdrop-blur-xl
      md:p-8 p-4 border border-[#2E602F]/10
      shadow-[0_40px_120px_rgba(46,96,47,0.18)]"
    >
      {/* Title */}
      <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#2E602F]" />
        Services Category
      </h4>

      {/* Services */}
      <ul className="space-y-1">
        {services.map((service, i) => {
          const isActive = location.pathname === service.href;

          return (
            <li key={i}>
              <Link
                to={service.href}
                className={`group relative flex items-center justify-between
                rounded-xl px-5 py-3 transition-all duration-500
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#2E602F] to-[#4d8b4f] text-white shadow-lg"
                    : "bg-gray-50 hover:bg-transparent border border-gray-200"
                }`}
              >
                {/* Hover gradient */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-xl opacity-0
                    bg-gradient-to-r from-[#2E602F] to-[#4d8b4f]
                    group-hover:opacity-100 transition duration-500 -z-10"
                  />
                )}

                {/* Text */}
                <span
                  className={`font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-800 group-hover:text-white"
                  }`}
                >
                  {service.name}
                </span>

                {/* Icon */}
                <ArrowRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[#2E602F] group-hover:text-white group-hover:translate-x-1"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Divider */}
      <div className="my-3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* CTA */}
      <Link
        to="/contact"
        className="block text-center py-3 rounded-full font-semibold
        bg-gradient-to-r from-[#2E602F] to-[#4d8b4f]
        text-white shadow-lg hover:shadow-2xl
        hover:scale-[1.03] transition-all duration-300"
      >
        Contact Us
      </Link>
    </aside>
  );
}
