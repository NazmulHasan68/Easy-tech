"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeTrustedClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden py-16 transition-colors duration-500"
      style={{ background: scrolled ? "var(--surface-2)" : "var(--surface)" }}
    >
      {/* ===== Organic Moving Blobs ===== */}
      {[
        { pos: "-top-32 -left-32",    size: "w-[380px] h-[380px]" },
        { pos: "bottom-0 -right-32",  size: "w-[420px] h-[420px]" },
        { pos: "top-[40%] left-[30%]",size: "w-[300px] h-[300px]" },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0] }}
          transition={{ duration: 35 + i * 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[150px] opacity-20`}
          style={{ background: "radial-gradient(circle at center, #5e4cdc 0%, #07002c 100%)" }}
        />
      ))}

      {/* ===== Glass Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="relative z-10 max-w-6xl w-full mx-4 rounded-[40px] p-6 md:p-12"
        style={{
          background: "var(--background)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 50px 140px rgba(94,76,220,0.12)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Inner glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5e4cdc]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-md md:text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Trusted by{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
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
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <Image
              src="/home/office.jpg"
              alt="Trusted Clients"
              width={400}
              height={120}
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
            <div className="text-2xl mb-4 tracking-widest" style={{ color: "var(--primary)" }}>
              ★★★★★
            </div>
            <p className="text-sm md:text-base px-3" style={{ color: "var(--muted)" }}>
              Rated{" "}
              <span className="font-semibold" style={{ color: "var(--primary)" }}>
                4.9/5
              </span>{" "}
              from over 600 verified reviews
            </p>
          </motion.div>

          {/* Traffic */}
          <div>
            <h4
              className="text-xs md:text-sm uppercase mb-3 tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              Monthly Traffic Growth
            </h4>
            <h3
              className="text-md md:text-2xl font-bold mb-2 md:mb-4"
              style={{ color: "var(--primary)" }}
            >
              33.4k Visitors
            </h3>
            <div
              className="w-full h-2 md:h-3 rounded-full overflow-hidden"
              style={{ background: "var(--border-color)" }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.6, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-[#5e4cdc] to-[#a78bfa]"
              />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}