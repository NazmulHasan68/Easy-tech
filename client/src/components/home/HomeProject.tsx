"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import cs5 from "@/assets/img/cs5.jpg";
import cs8 from "@/assets/img/cs8.jpg";
import cs1 from "@/assets/img/cs1.jpg";
import cs6 from "@/assets/img/cs6.jpg";
import cln5 from "@/assets/img/cln5.jpg";
import cln6 from "@/assets/img/cln6.jpg";
import cs3 from "@/assets/img/cs3.jpg";
import cs2 from "@/assets/img/cs2.jpg";
import cs4 from "@/assets/img/cs4.jpg";
import cs7 from "@/assets/img/cs7.jpg";
import cs9 from "@/assets/img/cs9.jpg";
import cs11 from "@/assets/img/cs11.jpg";

export default function HomeProject() {
  const [active, setActive] = useState<number | null>(null);

  const projects = [
    cs5, cs8, cs1, cs6, cln5, cln6,
    cs3, cs2, cs4, cs7, cs9, cs11,
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ===== Premium Gradient BG ===== */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f6fbf6] via-white to-[#eef5ee]" />

      {/* Animated Blobs */}
      {[ 
        { pos: "-top-40 -left-40", size: "w-[420px] h-[420px]", dur: 40 },
        { pos: "bottom-0 -right-40", size: "w-[420px] h-[420px]", dur: 46 },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -40, 0], rotate: [0, 360] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "linear" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[140px] opacity-20`}
          style={{
            background:
              "radial-gradient(circle at center, #98BC62 0%, #2D602E 100%)",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* ===== Title ===== */}
        <div className="text-center mb-8 md:mb-20">
          <p className="text-[#2E602F] font-semibold uppercase tracking-[0.35em] text-xs mb-2">
            Consulting Projects
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
            Our Success Projects <br></br>
            <span className="text-green-900">That Inspire</span>
          </h2>
        </div>

        {/* ===== Marquee ===== */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
            className="flex gap-5 md:gap-8 w-max"
          >
            {[...projects, ...projects].map((img, i) => (
              <motion.div
                key={i}
                layoutId={`card-${i}`}
                onClick={() => setActive(i)}
                className="group relative
                           w-60 h-75
                           sm:w-70 sm:h-90
                           md:w-[320px] md:h-105
                           rounded-3xl overflow-hidden
                           cursor-pointer shadow-xl"
              >
                <img loading="lazy"
                  src={img}
                  alt="Project preview"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-[10px] tracking-[3px] uppercase">
                    Our Happy Client
                  </p>
                  <h4 className="text-lg md:text-2xl font-semibold">
                    Successfully Completed
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {active !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            />

            <motion.div
              layoutId={`card-${active}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            >
              <div className="relative w-full max-w-5xl h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
                <img loading="lazy"
                  src={projects[active]}
                  alt="Expanded project"
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 px-4 py-2 rounded-full font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
