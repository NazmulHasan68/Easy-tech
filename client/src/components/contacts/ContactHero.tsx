"use client";

import { motion } from "framer-motion";
import heroImg from "@/assets/banner/contact.jpg";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden text-white">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2D5E2E]/90 via-[#2D5E2E]/70 to-[#96BA62]/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider">
            Home <ArrowRight size={14} /> Contact
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Start a <br />
            <span className="text-[#96BA62]">Conversation</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Have a question, idea, or project in mind? Our team is ready to help
            you turn your vision into reality. Reach out and let's build
            something great together.
          </p>


        </motion.div>
      </div>
    </section>
  );
}