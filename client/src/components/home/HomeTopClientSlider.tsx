"use client";

import { motion } from "framer-motion";

import f2 from "@/assets/img/2.png";
import f3 from "@/assets/img/3.png";
import f4 from "@/assets/img/4.png";
import f5 from "@/assets/img/5.png";
import f6 from "@/assets/img/6.png";

import l1 from "@/assets/img/client_logo/1.png";
import l2 from "@/assets/img/client_logo/2.png";
import l3 from "@/assets/img/client_logo/3.png";
import l4 from "@/assets/img/client_logo/4.png";
import l5 from "@/assets/img/client_logo/5.png";
import l6 from "@/assets/img/client_logo/6.png";
import l7 from "@/assets/img/client_logo/7.png";

const logos = [f2, f3, f4, f5, f6, l1, l2, l3, l4, l5, l6, l7];

export default function HomeTopClientSlider() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f3f8f3] via-white to-[#eef6ee]" />

      {/* Ambient lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-125 h-125 bg-[#98BC62]/20 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-40 w-125 h-125 bg-[#2E602F]/20 blur-[150px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Title */}
        <div className="text-center mb-14 md:mb-20">
          <p className="uppercase tracking-[0.35em] text-[#2E602F] font-semibold text-xs mb-4">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Leading <span className="text-[#2E602F]">Brands</span> & Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-lg">
            Companies that trust our expertise to build and scale digitally.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-2 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group min-w-45 md:min-w-55
                           bg-white m-3 border border-[#98BC62]/20
                           rounded-2xl shadow-md hover:shadow-2xl
                           transition-all duration-500
                           flex items-center justify-center p-6 md:p-8"
              >
                <img loading="lazy"
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-10 md:h-14 object-contain transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
