"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

import serices1 from "@/assets/img/services/s1-icon-1.png";
import serices2 from "@/assets/img/services/s1-icon-2.png";
import serices3 from "@/assets/img/services/s1-icon-3.png";
import { useCountUp } from "@/hooks/useCountUp";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable websites crafted for growth.",
    items: ["eCommerce", "Portfolio", "Custom Web Apps"],
    icon: serices1,
    link: "/services/web",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing that turns visitors into customers.",
    items: ["Social Media", "Paid Ads", "SEO Strategy"],
    icon: serices2,
    link: "/services/marketing",
  },
  {
    title: "ERP / CRM Solutions",
    desc: "Business automation systems for teams and organizations.",
    items: ["Agency CRM", "Real Estate CRM", "ERP Software"],
    icon: serices3,
    link: "/services/erp",
  },
];

export default function HomeServices() {
  return (
    <>
      <SEO
        title="Our Services | EasyTech Solutions"
        description="Web Development, Digital Marketing and ERP/CRM solutions to grow and automate your business."
      />

      <section className="py-24 bg-[#f6faf6] relative overflow-hidden">

        {/* ===== 5 Animated Brand Blobs ===== */}
        {[
          { pos: "-top-40 -left-40", size: "w-[420px] h-[420px]", color: "#98BC62", dur: 14 },
          { pos: "top-20 -right-32", size: "w-[380px] h-[380px]", color: "#2D602E", dur: 16 },
          { pos: "-bottom-32 left-[30%]", size: "w-[360px] h-[360px]", color: "#98BC62", dur: 18 },
          { pos: "bottom-10 right-[10%]", size: "w-[300px] h-[300px]", color: "#2D602E", dur: 20 },
          { pos: "top-[45%] -left-24", size: "w-[300px] h-[300px]", color: "#98BC62", dur: 22 },
        ].map((b, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${b.pos} ${b.size} rounded-full blur-[140px] opacity-25`}
            style={{ backgroundColor: b.color }}
          />
        ))}

        <div className="max-w-6xl mx-auto px-6 relative">

          {/* Title */}
          <div className="text-center mb-16">
            <h5 className="text-[#2D602E] font-semibold uppercase tracking-widest text-sm">
              What We Provide
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Our Core Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Digital experiences and automation systems designed to grow your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -14 }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="relative block rounded-3xl p-[1px] bg-gradient-to-br from-[#2D602E] to-[#98BC62]"
                >
                  {/* Glass Card */}
                  <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:bg-transparent">

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D602E] to-[#98BC62] opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative z-10 text-center">

                      {/* Icon */}
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#98BC62]/20 border border-[#98BC62]/40 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition">
                        <img loading="lazy" src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition">
                        {service.title}
                      </h4>

                      {/* Desc */}
                      <p className="text-gray-600 mt-3 mb-6 text-sm group-hover:text-white/90 transition">
                        {service.desc}
                      </p>

                      {/* List */}
                      <ul className="space-y-3 mb-8 text-sm text-left">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EAF4EA] group-hover:bg-white transition">
                              <Check size={14} className="text-[#2D602E]" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex justify-center items-center gap-2 font-semibold text-[#2D602E] group-hover:text-white transition">
                        Learn More <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-10 mt-6 bg-white md:rounded-[30] rounded-[25px] shadow-[0_40px_120px_rgba(45,96,46,0.15)] py-6 md:py-10 px-4 md:px-6 grid grid-cols-3 gap-4 md:gap-6 text-center"
          >
            {[
              { end: 1000, label: "Trusted Users", suffix: "+" },
              { end: 800, label: "Positive Reviews", suffix: "+" },
              { end: 98, label: "Reply Rate", suffix: "%" },
            ].map((item, i) => {
              const { count, ref } = useCountUp(item.end);
              return (
                <div key={i} ref={ref}>
                  <h3 className="text-xl md:text-4xl font-bold text-[#2D602E]">
                    {count}{item.suffix}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}
