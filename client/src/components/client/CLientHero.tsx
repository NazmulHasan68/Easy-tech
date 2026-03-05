"use client";

import { motion } from "framer-motion";
import clientHero from "@/assets/banner/client.jpg";

export default function ClientHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${clientHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#2D5E2E]/96 md:from-[#2D5E2E]/75 via-[#2D5E2E]/80 md:via-[#2D5E2E]/40 to-[#96BA62]/90"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our <br />
            <span className="text-[#96BA62]">Happy Clients</span>
          </h1>

          {/* Description */}
          <p className="mt-6 hidden md:flex text-gray-200 text-lg leading-relaxed">
            We are proud to collaborate with amazing clients who trust us to
            build, grow, and scale their digital presence through innovative
            solutions and reliable partnerships.
          </p>

          {/* Small Stats */}
          <div className="flex gap-4 md:gap-8 mt-8 text-sm md:text-base">
            <div>
              <h3 className="text-2xl font-bold text-white">120+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">250+</h3>
              <p className="text-gray-300">Projects Done</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">8+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}