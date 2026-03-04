"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";


import { useNavigate } from "react-router-dom";

import img1 from "@/assets/img/cln.jpg";
import img2 from "@/assets/img/cln2.jpg";
import img3 from "@/assets/img/cln3.jpg";
import img4 from "@/assets/img/cln4.jpg";

const slides = [
  { img: img1, alt: "Digital marketing consulting service" },
  { img: img2, alt: "SEO growth strategy planning" },
  { img: img3, alt: "Business research and analytics" },
  { img: img4, alt: "Website and branding development" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const imageVariants: Variants = {
  initial: { y: -120, rotateX: 30, opacity: 0, transformPerspective: 2000 },
  animate: { y: 0, rotateX: 0, opacity: 1, transition: { duration: 1, ease } },
  exit: { y: -120, rotateX: 30, opacity: 0, transition: { duration: 0.6, ease } },
};

const textVariants: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.2, ease },
  },
  exit: { y: 80, opacity: 0, transition: { duration: 0.6, ease } },
};

export default function HomePricing() {
  const navigate = useNavigate(); // ✅ correct
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      aria-labelledby="pricing-heading"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-[#f6fbf6] via-white to-[#eef5ee]" />
      <div aria-hidden className="absolute -top-32 -left-32 w-105 h-105 bg-[#98BC62]/20 blur-[140px] rounded-full" />
      <div aria-hidden className="absolute bottom-0 -right-32 w-105 h-105 bg-[#2D602E]/20 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden backdrop-blur-xl bg-white/70 border border-[#98BC62]/30 shadow-[0_40px_120px_rgba(45,96,46,0.15)]">

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
                <img loading="lazy"
                  src={slides[index].img}
                  alt={slides[index].alt}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2D602E]/70 via-transparent to-transparent" />
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
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
                >
                  Start Growing Your Business Today
                </h2>

                <p className="text-gray-600 mb-6 md:mb-10 text-sm sm:text-base md:text-lg">
                  Smart strategies, research-driven execution, and measurable
                  digital growth for your brand.
                </p>

                <div className="flex items-end gap-4 md:gap-6 mb-8 md:mb-12">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2D602E]">
                    ৳1500
                  </h3>
                  <span className="text-gray-500 text-sm sm:text-base leading-tight">
                    Starting <br /> Price
                  </span>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-linear-to-r from-[#2D602E] to-[#98BC62] text-white px-6 sm:px-8 py-3 rounded-full w-fit shadow-lg hover:scale-105 transition duration-300 text-sm sm:text-base"
                >
                  Explore More →
                </button>

                <div className="absolute bottom-0 right-3 px-4 py-4 bg-[#2D602E] rounded-tl-2xl text-white text-xs tracking-wider">
                  START
                </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
