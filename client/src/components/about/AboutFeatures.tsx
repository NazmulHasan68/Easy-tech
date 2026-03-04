"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Megaphone,
  Lightbulb,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    title: "Process Development",
    text: "We design scalable workflows that ensure consistency, quality, and long-term growth.",
    icon: Settings,
  },
  {
    title: "Digital Marketing",
    text: "SEO-focused development and marketing strategies built directly into your product.",
    icon: Megaphone,
  },
  {
    title: "Business Strategy",
    text: "We align design and technology with your business objectives before development begins.",
    icon: Lightbulb,
  },
  {
    title: "Website Design",
    text: "Modern, responsive, and user-centric interfaces across all devices.",
    icon: MonitorSmartphone,
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative py-20 bg-[#f7faf8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-green-300/30 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h5 className="text-[#2E602F] font-semibold uppercase tracking-widest mb-3">
            Our Strength
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Makes Us Different
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#98BC62]/0 to-[#98BC62]/30 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-[#2E602F] group-hover:scale-110 transition">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {f.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
