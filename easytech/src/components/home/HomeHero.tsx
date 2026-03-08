"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">

      {/* BRAND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#5e4cdc]/20 blur-[150px] rounded-full" />
      <div className="absolute top-32 right-0 w-[520px] h-[520px] bg-[#07002c]/40 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-8 md:gap-16">

        {/* IDEA ICON — replaced with a floating animated orb */}
        <div className="absolute md:top-[25%] top-[16%] left-[70%] md:left-[40%] opacity-60 pointer-events-none">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5e4cdc] to-[#a78bfa] shadow-lg shadow-[#5e4cdc]/40 flex items-center justify-center text-2xl"
          >
            💡
          </motion.div>
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 space-y-6 md:space-y-10 mt-12 md:mt-4"
        >
          <span className="inline-block font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 px-4 py-2 rounded-full text-sm">
            Digital Solutions
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-[var(--color-foreground)]">
            Building <br />
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Result
            </span>
          </h1>

          <p className="text-[var(--color-foreground)]/60 text-md md:text-lg max-w-xl">
            Innovative strategies and data-driven insights that showcase your
            agency's expertise in digital marketing and technology.
          </p>

          <motion.a
            whileTap={{ scale: 0.96 }}
            href="/about"
            className="group shadow-2xl shadow-[#5e4cdc]/20 relative inline-flex items-center gap-4
                      px-6 py-3 md:py-4 rounded-full text-lg font-semibold
                      overflow-hidden border border-[var(--color-primary)] text-[var(--color-primary)]"
          >
            {/* Sliding BG */}
            <span
              className="absolute inset-0 bg-[var(--color-primary)]
                        translate-x-[-100%] group-hover:translate-x-0
                        transition-transform duration-500 ease-out"
            />
            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Explore More
            </span>
            {/* Icon */}
            <ArrowRight className="relative z-10 group-hover:text-white transition-colors duration-500" />
          </motion.a>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div
          className="lg:w-1/2 relative h-[400px] md:h-[560px] flex items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
            mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Soft brand plate */}
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-br
                          from-[#5e4cdc]/30 to-[#07002c]/40
                          rounded-[50px] blur-2xl opacity-70" />

          {/* Back image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -7 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute w-[78%] md:w-[65%] rounded-3xl overflow-hidden shadow-2xl shadow-[#5e4cdc]/20"
          >
            <Image
              src="/home/building.jpg"
              alt="Hero Main"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Front image with parallax */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative mt-12 z-10 w-[68%] rounded-3xl overflow-hidden
                       shadow-[0_60px_120px_rgba(94,76,220,0.35)]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <Image
                src="/home/2hm2.jpg"
                alt="Hero Card"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-1 md:-right-6 top-10 bg-[var(--color-background)] rounded-xl shadow-xl shadow-[#5e4cdc]/10 p-3 md:p-4 w-28 md:w-40 border border-[var(--color-primary)]/20"
          >
            <p className="text-sm text-[var(--color-foreground)]/50">Profile Views</p>
            <h4 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">45M+</h4>
          </motion.div>

          {/* Floating growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 md:left-10 left-0 bg-[var(--color-background)] rounded-xl shadow-xl shadow-[#5e4cdc]/10 p-2 md:p-4 w-32 md:w-44 border border-[var(--color-primary)]/20"
          >
            <p className="text-sm text-[var(--color-foreground)]/50">Growth</p>
            <div className="md:h-8 h-6 bg-gradient-to-r from-[#5e4cdc] to-[#a78bfa] rounded-md mt-2" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}