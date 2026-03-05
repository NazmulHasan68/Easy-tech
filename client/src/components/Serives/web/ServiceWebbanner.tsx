"use client";

import { motion } from "framer-motion";
import image from "@/assets/banner/web.jpg";
import { ArrowRight } from "lucide-react";

export default function ServiceWebbanner() {
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
      <div className="absolute inset-0 bg-linear-to-t from-[#2D5E2E]/95 via-[#2D5E2E]/55 to-[#96BA62]/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider">
            Services <ArrowRight size={14} /> Web Application
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
            Modern <br />
            <span className="text-[#96BA62]">Web Development</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8">
            We build high-performance, scalable, and secure web applications
            tailored to your business needs. From modern UI design to powerful
            backend systems, we deliver solutions that help your business grow
            online.
          </p>


        </motion.div>
      </div>
    </section>
  );
}