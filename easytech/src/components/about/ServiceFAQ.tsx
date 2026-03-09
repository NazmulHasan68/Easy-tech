"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqData = {
  general: [
    { question: "What is EasyTech Solutions?", answer: "EasyTech Solutions is a full-service digital agency based in Bangladesh, offering web development, mobile apps, digital marketing, and ERP/CRM solutions to businesses of all sizes." },
    { question: "How do I get started?", answer: "Simply reach out via our contact page or book a free consultation. We'll discuss your goals and recommend the best solution for your business." },
    { question: "Do you work with international clients?", answer: "Yes, we work with clients across Bangladesh and internationally. All communication, project management, and delivery can be handled remotely." },
    { question: "What is your typical project timeline?", answer: "Timelines vary by project scope. A basic website takes 1–2 weeks, while complex ERP systems may take 2–4 months. We provide detailed timelines before starting." },
    { question: "Do you offer ongoing support after delivery?", answer: "Yes, we offer post-launch maintenance packages including bug fixes, updates, performance monitoring, and feature enhancements." },
  ],
  web: [
    { question: "What types of websites do you build?", answer: "We build eCommerce stores, corporate websites, landing pages, portfolio sites, custom web apps, and SaaS platforms using modern frameworks like Next.js and React." },
    { question: "Will my website be mobile-friendly?", answer: "Absolutely. Every website we build is fully responsive and optimized for all screen sizes, from mobile phones to large desktop monitors." },
    { question: "Do you provide SEO-friendly websites?", answer: "Yes. Our websites are built with clean code, fast load speeds, proper semantic HTML, and meta optimization — all essential for strong SEO performance." },
    { question: "Can you redesign my existing website?", answer: "Yes. We offer complete website redesigns while preserving your existing content, SEO rankings, and domain history." },
    { question: "Which technologies do you use?", answer: "We primarily use Next.js, React, TypeScript, Tailwind CSS, Node.js, and various CMS platforms like WordPress and custom headless setups." },
  ],
  app: [
    { question: "Do you build iOS and Android apps?", answer: "Yes. We develop cross-platform apps using React Native and Flutter, as well as native iOS (Swift) and Android (Kotlin) apps when required." },
    { question: "How long does it take to build a mobile app?", answer: "A basic app typically takes 4–8 weeks. Feature-rich apps with backend integrations may take 3–6 months depending on complexity." },
    { question: "Will you publish the app to the App Store and Play Store?", answer: "Yes. We handle the full submission process including compliance, screenshots, descriptions, and review responses for both Apple App Store and Google Play." },
    { question: "Can the app work offline?", answer: "Yes. We can implement offline functionality using local storage and sync mechanisms so users can continue using core features without internet." },
    { question: "Do you provide app maintenance after launch?", answer: "Yes. We offer ongoing maintenance plans covering OS updates, bug fixes, performance improvements, and new feature rollouts." },
  ],
  erp: [
    { question: "What is ERP/CRM Software?", answer: "ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) software help businesses centralize data, automate workflows, and streamline operations across all departments." },
    { question: "Which modules are included in your ERP solution?", answer: "Our ERP/CRM includes Inventory Management, Sales & Purchase, Accounts & Payroll, HR Management, CRM & Lead Tracking, Role-based Access Control, and Analytics Dashboards." },
    { question: "Can the ERP be customized for my business?", answer: "Yes. Our ERP is fully customizable. We tailor modules, workflows, reports, and user roles to match your specific business processes and industry requirements." },
    { question: "How is our data kept secure?", answer: "We implement industry-standard security measures including encrypted databases, role-based access, regular backups, and secure cloud hosting to protect your business data." },
    { question: "Can your ERP integrate with our existing tools?", answer: "Yes. We support integrations with third-party tools including payment gateways, accounting software, HR systems, and external APIs via REST." },
  ],
  digital: [
    { question: "What digital marketing services do you offer?", answer: "We offer SEO, Social Media Marketing, Google & Facebook Ads (PPC), Content Marketing, Email Marketing, Influencer Outreach, and Analytics & Reporting." },
    { question: "How long before I see results from SEO?", answer: "SEO is a long-term strategy. Most clients begin seeing measurable improvements in 3–6 months, with significant growth typically visible within 6–12 months." },
    { question: "Do you manage social media accounts?", answer: "Yes. We offer full social media management including content creation, scheduling, community engagement, and monthly performance reports." },
    { question: "How do you measure campaign success?", answer: "We track KPIs including traffic, conversions, CTR, ROAS, engagement rate, and lead quality. You receive transparent monthly reports with clear metrics." },
    { question: "What ad budget do I need to get started?", answer: "We recommend a minimum ad budget of ৳10,000–৳20,000/month for meaningful results. We optimize every taka spent to maximize your ROI." },
  ],
};

type ServiceType = keyof typeof faqData;

const tabs: { key: ServiceType; label: string }[] = [
  { key: "general", label: "General" },
  { key: "web",     label: "Web Dev" },
  { key: "app",     label: "Mobile App" },
  { key: "erp",     label: "ERP / CRM" },
  { key: "digital", label: "Marketing" },
];

export default function ServiceFAQ({ defaultTab = "general" }: { defaultTab?: ServiceType }) {
  const [activeTab, setActiveTab] = useState<ServiceType>(defaultTab);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = faqData[activeTab];

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-semibold uppercase tracking-widest text-xs mb-3" style={{ color: "var(--primary)" }}>
            Got Questions?
          </p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            Frequently Asked{" "}
            <span style={{
              background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Questions
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setActiveIndex(0); }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeTab === tab.key ? "var(--primary)" : "var(--background)",
                color: activeTab === tab.key ? "#ffffff" : "var(--muted)",
                border: `1px solid ${activeTab === tab.key ? "var(--primary)" : "var(--border-color)"}`,
                boxShadow: activeTab === tab.key ? "0 4px 14px rgba(94,76,220,0.3)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border-color)",
                    boxShadow: isOpen ? "0 8px 30px rgba(94,76,220,0.12)" : "none",
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors duration-300"
                    style={{
                      color: "var(--foreground)",
                      background: isOpen ? "rgba(94,76,220,0.05)" : "transparent",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronDown style={{ color: "var(--primary)" }} size={20} />
                      </motion.span>
                      {faq.question}
                    </span>

                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                      style={{
                        background: isOpen ? "var(--primary)" : "rgba(94,76,220,0.1)",
                        color: isOpen ? "#ffffff" : "var(--primary)",
                      }}
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
                        <div className="px-6 pb-6 leading-relaxed text-base" style={{ color: "var(--muted)" }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}