"use client";

import { motion } from "framer-motion";
import {
  Search,
  Code2,
  Server,
  Gauge,
  Puzzle,
  LifeBuoy,
} from "lucide-react";

const challenges = [
  {
    title: "Discovery & Strategy",
    text: "We begin by understanding your business goals, audience, and competition to craft a strategy that aligns perfectly with your vision.",
    icon: Search,
  },
  {
    title: "Modern Frontend Development",
    text: "Using React, Tailwind, and Bootstrap, we create responsive, fast, and visually engaging interfaces for seamless user experiences across all devices.",
    icon: Code2,
  },
  {
    title: "Robust Backend Solutions",
    text: "With Laravel and PHP, we build secure, scalable backends capable of handling dynamic features and complex eCommerce systems.",
    icon: Server,
  },
  {
    title: "SEO & Performance Optimization",
    text: "Every website is structured with SEO-friendly practices, optimized speed, and clean code to improve search rankings and retention.",
    icon: Gauge,
  },
  {
    title: "Custom Features & Scalability",
    text: "We design flexible architectures with tailored functionalities, ensuring your website grows with your business needs.",
    icon: Puzzle,
  },
  {
    title: "Continuous Support",
    text: "Our relationship doesn’t end at launch. We provide maintenance, updates, and enhancements for three months to keep your presence strong.",
    icon: LifeBuoy,
  },
];

export default function AboutChallenges() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h5 className="text-[#2E602F] font-semibold uppercase tracking-widest mb-4">
            Our Process
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Turning Challenges into Opportunities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At EasyTech Solutions, we follow a client-first, technology-driven
            approach. Every project is crafted to be future-ready,
            performance-focused, and tailored to your business needs.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {challenges.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                {/* Icon */}
                <div className="min-w-[60px] h-[60px] flex items-center justify-center rounded-xl bg-green-100 text-[#2E602F] group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
