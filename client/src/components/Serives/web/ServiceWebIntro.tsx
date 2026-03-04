"use client";

import { motion } from "framer-motion";
import aboutImg from "@/assets/img/Web Development.jpg";
import { CheckCircle } from "lucide-react";
import SEO from "../../SEO";

const features = [
  "Modern UI with React & Tailwind",
  "SEO Friendly & High Performance",
  "Custom Features for Your Business",
  "Secure Backend with PHP & Laravel",
];

export default function ServiceWebIntro() {
  return (
    <>
      {/* SEO */}
      <SEO
        title="Web Application Development | EasyTech Solutions"
        description="Professional web application development using React, Tailwind, PHP & Laravel. We build fast, secure, SEO-friendly websites for modern businesses."
      />

      <section className="relative py-10 bg-[#f7faf8] overflow-hidden">
        {/* Background Gradients */}
        {/* <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#98BC62]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-[#2E602F]/20 rounded-full blur-[140px]" /> */}

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
                src={aboutImg}
                alt="Web Application Development by EasyTech Solutions"
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-4 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-[#2E602F] text-sm font-semibold">
                  5+ Years Experience
                </p>
                <h4 className="text-lg font-bold text-gray-900">
                  Web Excellence
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
              <h5 className="text-[#2E602F] font-semibold uppercase tracking-widest mb-4">
                Who We Are
              </h5>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Web Application Development
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                At EasyTech Solutions, we transform your ideas into scalable,
                high-performing digital products. From modern websites to
                enterprise-grade applications, our solutions are secure,
                responsive, and SEO-optimized for real business growth.
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
                    <CheckCircle className="text-[#2E602F] mt-1" size={20} />
                    <p className="text-gray-700">{item}</p>
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
