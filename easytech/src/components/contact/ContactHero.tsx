"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden text-white">

      {/* Background Image */}
      <img
        src="/contact/contact.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(7,0,44,0.95) 0%, rgba(7,0,44,0.70) 55%, rgba(94,76,220,0.30) 100%)",
        }}
      />

      {/* Purple glow */}
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <div
        className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: "#a78bfa" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <button
            onClick={() => window.scrollBy({ top: 450, behavior: "smooth" })}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider font-semibold transition hover:opacity-80"
            style={{ background: "rgba(94,76,220,0.3)" }}
          >
            Home <ArrowRight size={14} /> Contact
          </button>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Start a <br />
            <span
              style={{
                background: "linear-gradient(130deg, #a78bfa, #5e4cdc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Have a question, idea, or project in mind? Our team is ready to help
            you turn your vision into reality. Reach out and let's build
            something great together.
          </p>

        </motion.div>
      </div>
    </section>
  );
}