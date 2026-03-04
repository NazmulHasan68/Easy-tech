"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Is ERP/CRM Software?",
    answer:
      "ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) software help businesses centralize data, automate workflows, and streamline operations across departments.",
  },
  {
    question: "Which Modules Are Included?",
    answer:
      "Our ERP/CRM solutions include Inventory, Sales & Purchase Management, Accounts & Payroll, HR Management, CRM & Lead Tracking, Analytics, and Role-based Access.",
  },
  {
    question: "Why Choose EasyTech ERP Solutions?",
    answer:
      "We provide a scalable, secure, and user-friendly platform that integrates all business processes in one system, ensuring efficiency, transparency, and informed decision-making.",
  },
];

export default function ServiceErpQuestion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-[#f7faf8]">
      <div className="max-w-4xl mx-auto px-1">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#232822] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#98BC62]/30 rounded-2xl overflow-hidden
                           bg-white hover:shadow-lg transition-shadow duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5
                             text-left font-semibold text-[#232822]
                             hover:bg-[#98BC62]/10 transition-colors duration-300"
                >
                  <span className="flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ChevronDown className="text-[#98BC62]" size={20} />
                    </motion.span>
                    {faq.question}
                  </span>

                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center
                               bg-[#98BC62]/10 text-[#98BC62] transition-all duration-300"
                  >
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
                      <div className="p-3 pb-6 text-[#232822] leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
