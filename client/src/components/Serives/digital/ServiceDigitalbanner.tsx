"use client";

import { motion } from "framer-motion";
import image from "@/assets/banner/digital_icon.jpg";
import { ArrowRight } from "lucide-react";

export default function ServiceDigitalBanner() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2D5E2E]/85 via-[#2D5E2E]/85 to-[#96BA62]/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider">
            Services <ArrowRight size={14} /> Digital Marketing
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
            Powerful <br />
            <span className="text-[#96BA62]">Digital Marketing</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8">
            Grow your brand online with data-driven marketing strategies.
            We help businesses reach the right audience, increase traffic,
            and convert visitors into loyal customers.
          </p>

        </motion.div>
      </div>
    </section>
  );
}