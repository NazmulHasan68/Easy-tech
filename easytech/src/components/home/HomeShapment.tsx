"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeShapment() {
  return (
    <section
      className="py-16 md:py-28 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* Soft glow */}
            <div
              className="absolute -inset-4 md:-inset-8 rounded-[30px] md:rounded-[40px] blur-2xl opacity-40 pointer-events-none"
              style={{ background: "rgba(94,76,220,0.3)" }}
            />

            <div
              className="relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-[#5e4cdc]/20"
              style={{ border: "1px solid var(--border-color)" }}
            >
              <Image
                src="/home/shipments/70.jpg"
                alt="Shipment process illustration"
                width={700}
                height={500}
                className="w-full h-60 sm:h-80 md:h-[420px] object-cover transition duration-700 hover:scale-105"
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
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Better Ship Faster <br className="hidden md:block" />
              Avoid Unauthorized
            </h2>

            <p
              className="text-xs md:text-sm sm:text-base leading-relaxed mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ color: "var(--muted)" }}
            >
              Every pleasure is to be welcomed and every pain avoided.
              Certain circumstances and owing to the claims welcomed
              and every pain avoided certain circumstances.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg shadow-[#5e4cdc]/30 transition-all duration-300 hover:gap-6 hover:shadow-xl hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #5e4cdc, #a78bfa)" }}
            >
              Book Free Consultation →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}