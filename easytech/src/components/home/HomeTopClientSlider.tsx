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

export default function HomeTopClientSlider() {
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

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
          />

          <motion.div
            className="flex gap-2 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                className="group min-w-[180px] md:min-w-[220px] m-3 rounded-2xl flex items-center justify-center p-6 md:p-8 transition-all duration-500 hover:scale-105"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 4px 20px rgba(94,76,220,0.06)",
                }}
              >
                <Image
                  src={src}
                  alt={`Client Logo ${(i % logos.length) + 1}`}
                  width={120}
                  height={56}
                  className="h-10 md:h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}