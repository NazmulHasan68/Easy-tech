"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Digital Marketing Services Do You Offer?",
    answer:
      "We offer SEO, social media marketing, Google & Facebook paid ads, content strategy, and lead generation services tailored to grow your business.",
  },
  {
    question: "How Do You Measure Success?",
    answer:
      "We track performance using key metrics like website traffic, search rankings, lead conversions, social engagement, and ROI to ensure your marketing strategy is effective.",
  },
  {
    question: "Why Choose EasyTech Solutions?",
    answer:
      "Our team combines data-driven strategies with creative execution to deliver measurable results. We focus on transparency, performance, and long-term growth for our clients.",
  },
];

export default function ServiceDigitalQuestion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-3 bg-white">
      <div className="max-w-4xl mx-auto px-2">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#232822] mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-[#98BC62]/30 rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5
                             text-left font-semibold text-[#232822]
                             hover:bg-[#98BC62]/10 transition"
                >
                  <span className="flex items-center gap-3">
                    <ChevronDown
                      className={`text-[#98BC62] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                    {faq.question}
                  </span>

                  <span className="w-7 h-7 rounded-full flex items-center justify-center
                                   bg-[#98BC62]/10 text-[#98BC62]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#232822] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
