"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/client_logo/1.png",
  "/client_logo/2.png",
  "/client_logo/3.png",
  "/client_logo/4.png",
  "/client_logo/5.png",
  "/client_logo/6.png",
  "/client_logo/logo/1.png",
  "/client_logo/logo/2.png",
  "/client_logo/logo/3.png",
  "/client_logo/logo/4.png",
  "/client_logo/logo/5.png",
  "/client_logo/logo/6.png",
];

export default function ClientLogoSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Ambient lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "#07002c" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">

        {/* Title */}
        <div className="text-center mb-14 md:mb-20">
          <p
            className="uppercase tracking-[0.35em] font-semibold text-xs mb-4"
            style={{ color: "var(--primary)" }}
          >
            Trusted By
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Leading{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brands
            </span>{" "}
            & Businesses
          </h2>
          <p
            className="max-w-2xl mx-auto mt-4 text-sm md:text-lg"
            style={{ color: "var(--muted)" }}
          >
            Companies that trust our expertise to build and scale digitally.
          </p>
        </div>

        {/* Responsive Grid — 2 / sm:3 / md:4 / lg:5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 20px rgba(94,76,220,0.06)",
              }}
            >
              <Image
                src={src}
                alt={`Client Logo ${i + 1}`}
                width={120}
                height={56}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain  transition duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}