"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutBreadcrumb(){
  return (
    <section
      className="relative h-[40vh] md:h-[85vh] min-h-[600px] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(/about/about.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(7,0,44,0.95) 0%, rgba(7,0,44,0.65) 55%, transparent 100%)",
        }}
      />

      {/* Purple accent glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
      >
        <div className="max-w-xl">

          {/* Breadcrumb pill */}
          <button
            onClick={() => window.scrollBy({ top: 450, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-2 md:mb-4 font-semibold transition hover:opacity-80"
            style={{ background: "var(--primary)" }}
          >
            Services <ArrowRight size={14} /> About Us
          </button>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 md:mb-4">
            Learn More About <br />
            <span
              style={{
                background: "linear-gradient(130deg, #a78bfa, #5e4cdc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Company
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            We are dedicated to delivering high-quality solutions and services
            that help businesses grow. Our team focuses on innovation,
            reliability, and building long-term relationships with our clients.
          </p>

        </div>
      </motion.div>
    </section>
  );
}