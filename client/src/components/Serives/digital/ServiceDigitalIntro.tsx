"use client";

import { motion } from "framer-motion";
import marketingImg from "@/assets/banner/digital_marketing_page.jpg"; // marketing image
import { CheckCircle } from "lucide-react";
import SEO from "../../SEO";

const features = [
  "SEO & Search Ranking Optimization",
  "Social Media Marketing & Branding",
  "Google & Facebook Paid Ads",
  "Content Strategy & Lead Generation",
];

export default function ServiceDigitalIntro() {
  return (
    <>
      {/* SEO */}
      <SEO
        title="Digital Marketing Services | EasyTech Solutions"
        description="Boost your business with expert digital marketing services. SEO, social media, paid ads, and content strategy for measurable growth."
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
                src={marketingImg}
                alt="Digital Marketing by EasyTech Solutions"
                className="w-full h-70 sm:h-90 lg:h-105 object-cover rounded-3xl shadow-2xl"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-4 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-[#98BC62] text-sm font-semibold">
                  5+ Years Experience
                </p>
                <h4 className="text-lg font-bold text-[#232822]">
                  Marketing Excellence
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
                Digital Marketing Experts
              </h5>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#232822] mb-6 leading-tight">
                Grow Your Business With Smart 
                <span className="text-[#98BC62]"> Marketing</span>
              </h2>

              <div>
                <p className="text-[#232822] leading-relaxed mb-8 max-w-xl text-lg">
                  In today’s competitive online marketplace, having a website is not enough — you need strategic digital marketing to 
                  reach the right audience, build trust, and drive sales. At EasyTech Solutions, we provide end-to-end digital marketing 
                  solutions designed to help businesses grow their presence, attract more customers, and maximize ROI.
                </p>
                <p className="text-[#232822] leading-relaxed mb-8 max-w-xl text-lg mt-1">
                  We combine data-driven strategies with creative execution to ensure your business doesn’t just exist online but thrives 
                  in the digital ecosystem. Whether you’re a startup or an established brand, EasyTech Solutions helps you scale faster with impactful 
                  digital marketing tailored to your goals.
                </p>
              </div>

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
