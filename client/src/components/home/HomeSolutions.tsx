"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Solutions55 from "@/assets/img/55.jpg";
import Solutions56 from "@/assets/img/56.jpg";
import Solutions70 from "@/assets/img/70.jpg";
import SEO from "../SEO";

export default function HomeSolutions() {
  return (
    <>
      <SEO
        title=" Digital Solutions Section | EasyTech Solutions"
        description="Consulting and Digital Solutions Section"
      />
    <section
      className="py-36 bg-[#f6faf6] relative overflow-hidden"
      aria-label="Consulting and Digital Solutions Section"
    >
      {/* ========= 5 Rotating Brand Bubbles ========= */}
      {[
        {
          pos: "-top-40 -left-32",
          size: "w-[420px] h-[420px]",
          dur: 10,
          gradient:
            "radial-gradient(circle at 30% 30%, #b7d88a 0%, #98BC62 35%, #2D602E 100%)",
        },
        {
          pos: "top-10 -right-32",
          size: "w-[380px] h-[380px]",
          dur: 14,
          gradient:
            "radial-gradient(circle at 70% 40%, #cfe9a6 0%, #98BC62 40%, #2D602E 100%)",
        },
        {
          pos: "-bottom-32 left-[35%]",
          size: "w-[360px] h-[360px]",
          dur: 18,
          gradient:
            "radial-gradient(circle at center, #dff2c2 0%, #98BC62 45%, #2D602E 100%)",
        },
        {
          pos: "bottom-10 right-[8%]",
          size: "w-[320px] h-[320px]",
          dur: 22,
          gradient:
            "radial-gradient(circle at 40% 60%, #bfe084 0%, #98BC62 35%, #2D602E 100%)",
        },
        {
          pos: "top-[50%] -left-20",
          size: "w-[300px] h-[300px]",
          dur: 28,
          gradient:
            "radial-gradient(circle at 60% 40%, #e8f7d1 0%, #98BC62 40%, #2D602E 100%)",
        },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 360],
            y: [0, -50, 0],
          }}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[160px] opacity-30`}
          style={{
            background: b.gradient,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-2"
          >
            <h5 className="text-[#2E602F] text-xs md:text-base font-semibold uppercase tracking-widest mb-2 md:mb-4">
              Consulting Solutions
            </h5>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Skillset to Improve <br /> Your Company Brand
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 md:mb-12 max-w-lg">
              We provide smart digital solutions that strengthen your brand,
              improve marketing performance, and help businesses scale faster.
            </p>

            {/* Small Images */}
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-12">
              {[Solutions56, Solutions70].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.25 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden md:w-44 w-38 h-26 md:h-28 shadow-xl"
                >
                  <img loading="lazy"
                    src={img}
                    alt="Digital marketing and consulting solution preview"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="/project"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2D602E] to-[#98BC62] text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg"
            >
              Explore More →
            </motion.a>
          </motion.div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img loading="lazy"
                src={Solutions55}
                alt="Business consulting and brand improvement"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating Glass Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 -left-4 md:-bottom-12 md:-left-12 backdrop-blur-xl bg-white/80 border border-white/50 rounded-3xl shadow-2xl p-4 md:p-8 w-50 md:w-72"
            >
              <h5 className="text-gray-900 font-semibold mb-2 md:mb-6">Goals</h5>

              <div className="flex items-center gap-4 mb-2 md:mb-6">
                <div className="md:w-12 w-6 h-6 md:h-12 rounded-xl bg-[#98BC62]/20 flex items-center justify-center text-[#2E602F] font-bold">
                  %
                </div>
                <div>
                  <h4 className="md:text-3xl text-md font-bold text-gray-900">
                    <CountUp end={64} duration={2} />%
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">Cover Marketing</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-4 bg-[#98BC62]/10 p-2 md:p-4 rounded-2xl">
                <div className="md:w-12 w-6 h-6 md:h-12 rounded-xl bg-[#2E602F]/20 flex items-center justify-center text-[#2E602F] font-bold">
                  %
                </div>
                <div>
                  <h4 className="md:text-3xl text-md font-bold text-gray-900">
                    <CountUp end={94} duration={2} delay={0.3} />%
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">SMS Marketing</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
