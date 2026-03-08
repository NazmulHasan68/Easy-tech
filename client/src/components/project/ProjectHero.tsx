"use client";

import banner from "@/assets/banner/software.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden text-white">
      
      {/* Background Image */}
      <img
        src={banner}
        alt="Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2D5E2E]/75 via-[#2D5E2E]/80 to-[#96BA62]/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          
          {/* Breadcrumb */}
          <div  onClick={() => window.scrollBy({ top: 450, behavior: 'smooth' })}  className="cursor-pointer inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider">
            Home <ArrowRight size={14} /> Projects
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
            Our Latest <br />
            <span className="text-[#96BA62]">Projects</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg leading-relaxed">
            Explore our portfolio of innovative digital solutions, where we
            transform ideas into impactful products. Our projects showcase our
            expertise in design, development, and technology.
          </p>


        </motion.div>
      </div>
    </section>
  );
}