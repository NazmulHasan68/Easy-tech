"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Are We?",
    answer:
      "Our office is situated opposite of Wonderland (Shishu Mela) at SEL HUQ Skypark, Building Level 4, Shamoli, Dhaka.",
  },
  {
    question: "How Many Services We Provide?",
    answer:
      "We provide Web Development, Digital Marketing, ERP/CRM Solutions, UI/UX Design, and Custom Software Development services.",
  },
  {
    question: "Why We Are The Best Company?",
    answer:
      "We focus on quality, performance, SEO-friendly development, transparent communication, and long-term client success.",
  },
];

export default function ServiceWebQuestion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);


  return (
    <section className="py-3 bg-white">
      <div className="max-w-4xl mx-auto px-2">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5
                             text-left font-semibold text-gray-900
                             hover:bg-gray-50 transition"
                >
                  <span className="flex items-center gap-3">
                    <ChevronDown
                      className={`text-[#2E602F] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                    {faq.question}
                  </span>

                  <span className="w-7 h-7 rounded-full flex items-center justify-center
                                   bg-[#2E602F]/10 text-[#2E602F]">
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
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
