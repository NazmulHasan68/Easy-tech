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

function LogoRow({ direction = "left" }: { direction?: "left" | "right" }) {
  const animate = direction === "left"
    ? { x: ["0%", "-50%"] }
    : { x: ["-50%", "0%"] }

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        // style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        // style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
      />

      <motion.div
        className="flex gap-0 w-max"
        animate={animate}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="group min-w-[80px] md:min-w-[120px] mx-2 rounded-md flex items-center justify-center p-2 md:p-3 transition-all duration-500 hover:scale-105"
            // style={{
            //   background: "var(--background)",
            //   border: "1px solid var(--border-color)",
            //   boxShadow: "0 4px 20px rgba(94,76,220,0.06)",
            // }}
          >
            <Image
              src={src}
              alt={`Client Logo ${(i % logos.length) + 1}`}
              width={120}
              height={56}
              className="h-5 md:h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function HomeBrand() {
  return (
    <section
      className="relative py-10 md:py-16 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <h1 className="text-center mb-10 font-bold text-var(--primary">TRUSTED BY 300+ GLOBAL BRANDS</h1>
      {/* Ambient lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "#07002c" }}
      />

      <div className="relative z-10 flex flex-col gap-2">

        {/* Row 1 — left to right */}
        <LogoRow direction="left" />

        {/* Row 2 — right to left */}
        <LogoRow direction="right" />

        {/* Row 3 — left to right */}
        <LogoRow direction="left" />

      </div>
    </section>
  );
}