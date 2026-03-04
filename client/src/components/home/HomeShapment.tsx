"use client";

import { motion } from "framer-motion";
import ShipImg from "@/assets/img/70.jpg";

export default function HomeShapment() {
  return (
    <section className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE (Mobile first, then right side on desktop) */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* soft background glow */}
            <div className="absolute -inset-4 md:-inset-8 bg-[#98BC62]/20 rounded-[30px] md:rounded-[40px] blur-2xl opacity-70" />

            <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <img loading="lazy"
                src={ShipImg}
                alt="Shipment process illustration"
                className="w-full h-60 sm:h-80 md:h-105 object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Better Ship Faster <br className="hidden md:block" />
              Avoid Unauthorized
            </h2>

            <p className="text-gray-600 text-xs md:text-sm sm:text-base leading-relaxed mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Every pleasure is to be welcomed and every pain avoided.
              Certain circumstances and owing to the claims welcomed
              and every pain avoided certain circumstances.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3
                         bg-linear-to-r from-[#2D602E] to-[#98BC62]
                         text-white px-6 sm:px-6 py-2 sm:py-4
                         rounded-full font-semibold
                         transition-all duration-300
                         hover:gap-6 hover:shadow-xl"
            >
              Explore More →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
