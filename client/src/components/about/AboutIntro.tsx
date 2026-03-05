"use client";

import { motion } from "framer-motion";

export default function AboutIntroText() {
  return (
    <section className="relative py-28 bg-[#f7faf8] overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-[#96BA62]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D5E2E]/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="text-[#2D5E2E] font-semibold uppercase tracking-widest mb-4">
            Who We Are
          </h5>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            At <span className="text-[#96BA62]">EasyTech Solutions</span>, we empower businesses with 
            <br className="hidden md:block" /> 
            <span className="text-[#2D5E2E]">digital excellence</span> and innovative solutions.
          </h2>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            Our services include <span className="font-semibold text-[#96BA62]">Digital Marketing</span>, 
            <span className="font-semibold text-[#96BA62]"> Web Development</span>, 
            <span className="font-semibold text-[#96BA62]"> ERP / POS Solutions</span>, and more. 
            We craft tailored strategies that drive growth, enhance online presence, and streamline operations for modern businesses.
          </p>

          {/* Key Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              "5+ Years of Proven Experience",
              "Data-Driven Strategies & ROI Focused",
              "Custom Solutions for Every Business"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 justify-center">
                <div className="w-4 h-4 mt-1 bg-[#96BA62] rounded-full" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}