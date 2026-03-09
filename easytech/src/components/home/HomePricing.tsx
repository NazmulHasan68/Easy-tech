"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const slides = [
  { img: "/home/price/cln.jpg", alt: "Digital marketing consulting service" },
  { img: "/home/price/cln2.jpg", alt: "SEO growth strategy planning" },
  { img: "/home/price/cln3.jpg", alt: "Business research and analytics" },
  { img: "/home/price/cln4.jpg", alt: "Website and branding development" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const imageVariants: Variants = {
  initial: { y: -120, rotateX: 30, opacity: 0, transformPerspective: 2000 },
  animate: { y: 0, rotateX: 0, opacity: 1, transition: { duration: 1, ease } },
  exit:    { y: -120, rotateX: 30, opacity: 0, transition: { duration: 0.6, ease } },
};

const textVariants: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.9, delay: 0.2, ease } },
  exit:    { y: 80, opacity: 0, transition: { duration: 0.6, ease } },
};

export default function HomePricing() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setIndex((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      aria-labelledby="pricing-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(94,76,220,0.07) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(7,0,44,0.1) 0%, transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ background: "#5e4cdc" }} />
      <div aria-hidden className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ background: "#07002c" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div
          className="relative rounded-[30px] md:rounded-[40px] overflow-hidden backdrop-blur-xl"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 40px 120px rgba(94,76,220,0.12)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={index} className="grid grid-cols-1 md:grid-cols-2">

              {/* IMAGE */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative h-65 sm:h-85 md:h-130 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={slides[index].img}
                  alt={slides[index].alt}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(7,0,44,0.75) 0%, transparent 60%)",
                  }}
                />
              </motion.div>

              {/* TEXT */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center p-6 sm:p-10 md:p-16 relative"
              >
                <h2
                  id="pricing-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  Start Growing Your Business Today
                </h2>

                <p
                  className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg"
                  style={{ color: "var(--muted)" }}
                >
                  Smart strategies, research-driven execution, and measurable
                  digital growth for your brand.
                </p>

                <div className="flex items-end gap-4 md:gap-6 mb-8 md:mb-12">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    ৳1500
                  </h3>
                  <span className="text-sm sm:text-base leading-tight" style={{ color: "var(--muted)" }}>
                    Starting <br /> Price
                  </span>
                </div>

                <button
                  onClick={() => router.push("/contact")}
                  className="w-fit px-6 sm:px-8 py-3 rounded-full text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#5e4cdc]/30 hover:scale-105 transition duration-300"
                  style={{ background: "linear-gradient(135deg, #5e4cdc, #a78bfa)" }}
                >
                  Book Free Consultation →
                </button>

                {/* Corner badge */}
                <div
                  className="absolute bottom-0 right-3 px-4 py-4 rounded-tl-2xl text-white text-xs tracking-wider font-semibold"
                  style={{ background: "var(--primary)" }}
                >
                  START
                </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>

          {/* Slide dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === index ? "var(--primary)" : "var(--border-color)",
                  transform: i === index ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}