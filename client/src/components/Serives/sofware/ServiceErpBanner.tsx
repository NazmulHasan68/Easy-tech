"use client";

import { motion } from "framer-motion";
import image from "@/assets/banner/software.jpg";
import { ArrowRight } from "lucide-react";

export default function ServiceErpBanner() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2D5E2E]/75 via-[#2D5E2E]/85 to-[#96BA62]/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider">
            Services <ArrowRight size={14} /> ERP / CRM Solutions
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text4xl lg:text-5xl font-bold leading-tight mb-3">
            Smart <br />
            <span className="text-[#96BA62]">ERP / CRM Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8">
            Streamline your business operations with powerful ERP and CRM
            systems designed to automate workflows, manage customer
            relationships, and boost productivity across your organization.
          </p>

        </motion.div>
      </div>
    </section>
  );
}