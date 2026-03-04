"use client";

import { motion } from "framer-motion";
import aboutImg from "@/assets/img/web site.jpg";

export default function AboutIntro() {
  return (
    <section className="relative py-28 bg-[#f7faf8] overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-1 gap-20 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[350px]"
        >
          <img loading="lazy"
            src={aboutImg}
            alt="About EasyTech Solutions"
            className="rounded-3xl shadow-2xl w-full h-full object-cover"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-6 py-4">
            <p className="text-[#2E602F] font-semibold text-sm">5+ Years Experience</p>
            <h4 className="text-xl font-bold">Digital Excellence</h4>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="text-[#2E602F] font-semibold uppercase tracking-widest mb-4">
            Who We Are
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Powerful Digital Solutions That Help Businesses Grow
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            At EasyTech Solutions, we transform ideas into impactful digital experiences.
            From sleek business websites to feature-rich eCommerce platforms, we build
            modern, responsive, and performance-driven solutions that elevate brands
            in the digital space.
          </p>

          {/* Feature points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Modern UI with React & Tailwind",
              "SEO Friendly & High Performance",
              "Custom Features for Your Business",
              "Secure Backend with PHP & Laravel",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 bg-green-500 rounded-full" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
