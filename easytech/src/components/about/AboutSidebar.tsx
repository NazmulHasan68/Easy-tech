"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Digital Marketing",       href: "/services/marketing" },
  { name: "Web Development",         href: "/services/web" },
  { name: "CRM / ERP Solutions",     href: "/services/erp" },
  { name: "Mobile App Development",  href: "/services/app" },
];

export default function AboutSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="md:mt-20 rounded-3xl backdrop-blur-xl md:p-8 p-4"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 40px 120px rgba(94,76,220,0.12)",
      }}
    >
      {/* Title */}
      <h4
        className="text-lg font-bold mb-6 flex items-center gap-3"
        style={{ color: "var(--foreground)" }}
      >
        <span
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ background: "var(--primary)" }}
        />
        Services Category
      </h4>

      {/* Services */}
      <ul className="space-y-1">
        {services.map((service) => {
          const isActive = pathname === service.href;

          return (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group relative flex items-center justify-between rounded-xl px-5 py-3 transition-all duration-500 overflow-hidden"
                style={{
                  background: isActive ? "var(--primary)" : "var(--background)",
                  border: `1px solid ${isActive ? "var(--primary)" : "var(--border-color)"}`,
                  boxShadow: isActive ? "0 4px 20px rgba(94,76,220,0.3)" : "none",
                }}
              >
                {/* Hover gradient overlay */}
                {!isActive && (
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ background: "linear-gradient(135deg, #5e4cdc, #a78bfa)" }}
                  />
                )}

                {/* Text */}
                <span
                  className="font-medium transition-colors duration-300 relative z-10"
                  style={{ color: isActive ? "#ffffff" : "var(--foreground)" }}
                >
                  {service.name}
                </span>

                {/* Icon */}
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: isActive ? "#ffffff" : "var(--primary)" }}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Divider */}
      <div
        className="my-4 h-px"
        style={{ background: "var(--border-color)" }}
      />

      {/* CTA */}
      <Link
        href="/contact"
        className="block text-center py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #5e4cdc, #a78bfa)",
          boxShadow: "0 4px 20px rgba(94,76,220,0.3)",
        }}
      >
        Contact Us
      </Link>
    </aside>
  );
}