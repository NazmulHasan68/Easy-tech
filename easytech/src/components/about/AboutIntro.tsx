"use client";

import { motion } from "framer-motion";

const highlights = [
  "5+ Years of Proven Experience",
  "Data-Driven Strategies & ROI Focused",
  "Custom Solutions for Every Business",
];

export default function AboutIntroText() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background shapes */}
      <div
        className="absolute -top-32 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#07002c" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5
            className="font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--primary)" }}
          >
            Who We Are
          </h5>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            At{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              EasyTech Solutions
            </span>
            , we empower businesses with
            <br className="hidden md:block" />{" "}
            <span style={{ color: "var(--primary)" }}>digital excellence</span>{" "}
            and innovative solutions.
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Our services include{" "}
            <span className="font-semibold" style={{ color: "var(--primary)" }}>Digital Marketing</span>,{" "}
            <span className="font-semibold" style={{ color: "var(--primary)" }}>Web Development</span>,{" "}
            <span className="font-semibold" style={{ color: "var(--primary)" }}>ERP / POS Solutions</span>, and more.
            We craft tailored strategies that drive growth, enhance online presence, and streamline operations for modern businesses.
          </p>

          {/* Key Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 justify-center">
                <div
                  className="w-4 h-4 mt-1 rounded-full flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                />
                <p className="font-medium" style={{ color: "var(--foreground)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}