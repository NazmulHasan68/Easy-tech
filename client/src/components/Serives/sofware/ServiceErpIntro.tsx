"use client";

import { motion } from "framer-motion";
import erpImg from "@/assets/banner/sofware_page.jpg"; // ERP related image
import { CheckCircle } from "lucide-react";
import SEO from "../../SEO";

const features = [
  "Inventory, Sales & Purchase Management",
  "Accounts, HR & Payroll Automation",
  "CRM, Leads & Client Tracking",
  "Reports, Analytics & Role-based Access",
];

export default function ServiceErpIntro() {
  return (
    <>
      {/* SEO */}
      <SEO
        title="ERP & CRM Solutions | EasyTech Solutions"
        description="Streamline your business with EasyTech Solutions ERP & CRM software. Manage inventory, sales, accounts, HR, CRM, and analytics from a centralized platform."
      />

      <section className="relative py-10 bg-[#f7faf8] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -top-32 -left-32 w-105 h-105 bg-[#98BC62]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-105 h-105 bg-[#232822]/20 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-2 md:px-6">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <img loading="lazy"
                src={erpImg}
                alt="ERP & CRM Solutions by EasyTech Solutions"
                className="w-full h-70 sm:h-90 lg:h-105 object-cover rounded-3xl shadow-2xl"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-4 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-[#98BC62] text-sm font-semibold">
                  5+ Years Experience
                </p>
                <h4 className="text-lg font-bold text-[#232822]">
                  ERP Excellence
                </h4>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h5 className="text-[#98BC62] font-semibold uppercase tracking-widest mb-4">
                ERP / CRM Solutions
              </h5>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#232822] mb-6 leading-tight">
                Smart ERP Software To Manage Your Entire Business
              </h2>

              <p className="text-[#232822] leading-relaxed mb-8 max-w-xl text-lg">
                EasyTech Solutions provides powerful ERP and CRM systems designed to
                simplify operations, automate workflows, and centralize your business
                data. From inventory and accounts to HR, sales, and customer
                management — everything is connected in one smart platform.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#98BC62] mt-1" size={20} />
                    <p className="text-[#232822]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
