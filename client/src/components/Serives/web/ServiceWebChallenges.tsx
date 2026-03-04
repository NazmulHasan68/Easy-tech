"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "High Competition",
    text: "With countless brands fighting for attention, standing out in search results and social media is harder than ever.",
  },
  {
    title: "Changing Algorithms",
    text: "Search engines and social platforms constantly update their algorithms, making consistent visibility difficult.",
  },
  {
    title: "Targeting the Right Audience",
    text: "Many businesses struggle to reach the right people at the right time, leading to wasted ad spend.",
  },
  {
    title: "SEO & Performance Optimization",
    text: "Websites need clean code, fast loading speed, and SEO-friendly structure to rank and retain users.",
  },
  {
    title: "Maintaining Consistency",
    text: "Creating high-quality content and campaigns regularly requires time, expertise, and resources.",
  },
  {
    title: "Conversion & Retention",
    text: "Attracting traffic is only half the battle — converting visitors into loyal customers is the real challenge.",
  },
];

export default function ServiceWebChallenges() {
  return (
    <section className="py-3 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* Section Header */}
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Challenges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In today’s digital-first world, businesses face several challenges
            when trying to grow online. Understanding these challenges is the
            first step toward solving them.
          </p>
        </div>

        {/* Bullet Grid */}
        <div className="grid grid-cols-1 gap-1">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-1 p-1 md:p-1 
                          transition duration-300"
            >
              {/* Bullet */}
              <span className="mt-3 mr-3 w-2.5 h-2.5 rounded-full bg-[#2E602F] flex-shrink-0" />

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
