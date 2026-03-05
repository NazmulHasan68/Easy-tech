"use client";

import { motion } from "framer-motion";
import image from "@/assets/banner/about.jpg";
import { ArrowRight } from "lucide-react";

export default function AboutBreadcrumb() {
  return (
    <section
      className="relative h-[40vh] md:h-[85vh] min-h-150 flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
      >
        <div className="max-w-xl">

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-[#2d5f2e] px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-2 md:mb-4">
            Services <ArrowRight size={14} /> About Us
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 md:mb-4">
            Learn More About <br />
            <span className="text-[#98bc62]">Our Company</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            We are dedicated to delivering high-quality solutions and services
            that help businesses grow. Our team focuses on innovation,
            reliability, and building long-term relationships with our clients.
          </p>


        </div>
      </motion.div>
    </section>
  );
}