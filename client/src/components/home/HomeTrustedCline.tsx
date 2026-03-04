"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrustedImg from "../../assets/img/56.jpg";

export default function HomeTrustedClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.section
      initial={{ scale: 0.92, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      animate={{ backgroundColor: scrolled ? "#f3f8f3" : "#ffffff" }}
      className="relative flex items-center justify-center overflow-hidden py-16"
    >
      {/* ===== Organic Moving Blobs ===== */}
      {[
        { pos: "-top-32 -left-32", size: "w-[380px] h-[380px]" },
        { pos: "bottom-0 -right-32", size: "w-[420px] h-[420px]" },
        { pos: "top-[40%] left-[30%]", size: "w-[300px] h-[300px]" },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 35 + i * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[150px] opacity-20`}
          style={{
            background:
              "radial-gradient(circle at center, #98BC62 0%, #2D602E 100%)",
          }}
        />
      ))}

      {/* ===== Glass Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="relative z-10 max-w-6xl w-full mx-2
          backdrop-blur-xl bg-white/80
          border border-[#98BC62]/30
          rounded-[40px]
          shadow-[0_50px_140px_rgba(45,96,46,0.15)]
          p-6 md:p-12"
      >
        {/* glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#98BC62]/20 blur-[120px] rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-md md:text-2xl font-bold text-gray-900"
          >
            Trusted by{" "}
            <span className="text-[#2D602E]">
              1000+ Businesses Worldwide
            </span>
          </motion.h3>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.85 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[#98BC62]/30"
          >
            <img loading="lazy"
              src={TrustedImg}
              alt="Trusted Clients"
              className="w-full h-[120px] object-cover"
            />
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-[#98BC62] text-2xl mb-4 tracking-widest">
              ★★★★★
            </div>
            <p className="text-gray-600 text-sm md:text-base px-3">
              Rated{" "}
              <span className="font-semibold text-[#2D602E]">4.9/5</span> from
              over 600 verified reviews
            </p>
          </motion.div>

          {/* Traffic */}
          <div>
            <h4 className="text-xs md:text-sm text-gray-600 uppercase mb-3 tracking-widest">
              Monthly Traffic Growth
            </h4>

            <h3 className="text-md md:text-2xl font-bold text-[#2D602E] mb-2 md:mb-4">
              33.4k Visitors
            </h3>

            <div className="w-full h-2 md:h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{
                  duration: 1.6,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-[#2D602E] to-[#98BC62]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
