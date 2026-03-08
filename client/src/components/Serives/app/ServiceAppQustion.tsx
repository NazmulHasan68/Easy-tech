import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What Is ERP/CRM Mobile App?',
    answer: 'Our ERP/CRM mobile app lets you manage inventory, sales, accounts, HR, and CRM on-the-go, centralizing your business operations directly on your mobile device.',
  },
  {
    question: 'Which Modules Are Included?',
    answer: 'The mobile app includes Inventory & Sales Management, Accounts & Payroll, HR, CRM & Lead Tracking, Analytics, and Role-based Access, all optimized for mobile.',
  },
  {
    question: 'Why Choose EasyTech Mobile ERP?',
    answer: 'We provide a secure, intuitive, and scalable mobile platform that integrates all business processes in one system, ensuring efficiency and informed decision-making wherever you are.',
  },
];

export default function MobileServiceAppQuestion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-10 bg-[#f7faf8]">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#232822] mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#98BC62]/30 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-[#232822] hover:bg-[#98BC62]/10 transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <ChevronDown className="text-[#98BC62]" size={18} />
                    </motion.span>
                    {faq.question}
                  </span>

                  <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#98BC62]/10 text-[#98BC62] transition-all duration-300">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 text-[#232822] text-sm leading-relaxed">
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