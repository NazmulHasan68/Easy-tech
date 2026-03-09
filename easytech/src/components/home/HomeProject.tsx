"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  "/home/project/cs1.jpg",
  "/home/project/cs2.jpg",
  "/home/project/cs3.jpg",
  "/home/project/cs4.jpg",
  "/home/project/cs5.jpg",
  "/home/project/cs6.jpg",
  "/home/project/cs7.jpg",
  "/home/project/cs8.jpg",
  "/home/project/cs9.jpg",
  "/home/project/cs10.jpg",
  "/home/project/cs11.jpg",
  "/home/project/cs12.jpg",
  "/home/project/cs3.jpg",

];

export default function HomeProject() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(94,76,220,0.07) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(7,0,44,0.1) 0%, transparent 55%)",
        }}
      />

      {/* Animated Blobs */}
      {[
        { pos: "-top-40 -left-40",  size: "w-[420px] h-[420px]", dur: 40 },
        { pos: "bottom-0 -right-40", size: "w-[420px] h-[420px]", dur: 46 },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -40, 0], rotate: [0, 360] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "linear" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[140px] opacity-20 pointer-events-none`}
          style={{ background: "radial-gradient(circle at center, #a78bfa 0%, #5e4cdc 100%)" }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-8 md:mb-20">
          <p
            className="font-semibold uppercase tracking-[0.35em] text-xs mb-2"
            style={{ color: "var(--primary)" }}
          >
            Consulting Projects
          </p>
          <h2
            className="text-2xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Our Success Projects <br />
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              That Inspire
            </span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
            className="flex gap-5 md:gap-8 w-max"
          >
            {[...projects, ...projects].map((src, i) => (
              <motion.div
                key={i}
                layoutId={`card-${i}`}
                onClick={() => setActive(i % projects.length)}
                className="group relative w-60 h-75 sm:w-70 sm:h-90 md:w-[320px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl flex-shrink-0"
                style={{ border: "1px solid var(--border-color)" }}
              >
                <Image
                  src={src}
                  alt="Project preview"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{ background: "linear-gradient(to top, rgba(7,0,44,0.8) 0%, rgba(7,0,44,0.2) 50%, transparent 100%)" }}
                />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-[10px] tracking-[3px] uppercase text-[#a78bfa]">
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

      {/* Modal */}
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
              <div className="relative w-full max-w-5xl h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl shadow-[#5e4cdc]/30">
                <Image
                  src={projects[active]}
                  alt="Expanded project"
                  fill
                  className="object-cover"
                />

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-2 rounded-full font-semibold text-sm transition hover:scale-105"
                  style={{
                    background: "var(--background)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}