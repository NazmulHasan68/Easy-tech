"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="py-20 md:py-40 w-full" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto text-center px-4 py-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge mx-auto mb-5"
        >
          <span
            className="inline-block w-2 h-2 rounded-full mr-1"
            style={{ background: "var(--color-primary)" }}
          />
          Easy Tech · Dhaka, Bangladesh
        </motion.div>

        {/* Headline */}
        <h2
          className="font-bold text-2xl md:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}
        >
          {"Local Roots. ".split("").map((char, idx) => (
            <motion.span
              key={`a-${idx}`}
              className="inline-block"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.025 }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
          <span className="gradient-text">
            {"Global Impact.".split("").map((char, idx) => (
              <motion.span
                key={`b-${idx}`}
                className="inline-block"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: ("Local Roots. ".length + idx) * 0.025,
                }}
              >
                {char === " " ? "\u00a0" : char}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-sm md:text-lg max-w-2xl mx-auto pb-6"
          style={{ color: "var(--muted)" }}
        >
          From the heart of Dhaka, Easy Tech delivers world-class web,
          app &amp; digital marketing solutions to clients across every continent.
        </motion.p>

        {/* Service pills */}
        {/* <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {[
            " Web Development",
            " App Development",
            " Digital Marketing",
          ].map((s) => (
            <span key={s} className="tech-pill">
              {s}
            </span>
          ))}
        </motion.div> */}

        {/* Route tags */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-2 "
        >
          {[
            "Dhaka → Africa → Brazil → USA",
            "Dhaka → UK → Russia",
            "Dhaka → China",
            "Dhaka → Australia",
          ].map((route) => (
            <span
              key={route}
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                background: "var(--surface)",
                color: "var(--muted)",
                borderColor: "var(--border-color)",
              }}
            >
              {route}
            </span>
          ))}
        </motion.div> */}
      </div>

      {/* ── World Map ── */}
      <WorldMap
        lineColor="#5e4cdc"
        dots={[
          // Route 1 — Chittagong → Nairobi → São Paulo → New York
          {
            start: { lat: 22.3569, lng: 91.7832,   label: "Dhaka" },
            end:   { lat: -1.2921, lng: 36.8219,   label: "Nairobi" },
          },
          {
            start: { lat: -1.2921,  lng: 36.8219,  label: "Nairobi" },
            end:   { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
          },
          {
            start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
            end:   { lat: 40.7128,  lng: -74.006,  label: "New York" },
          },

          // Route 2 — Chittagong → London → Moscow
          {
            start: { lat: 22.3569, lng: 91.7832, label: "Dhaka" },
            end:   { lat: 51.5074, lng: -0.1278, label: "London" },
          },
          {
            start: { lat: 51.5074, lng: -0.1278, label: "London" },
            end:   { lat: 55.7558, lng: 37.6173, label: "Moscow" },
          },

          // Route 3 — Chittagong → Beijing
          {
            start: { lat: 22.3569, lng: 91.7832,  label: "Dhaka" },
            end:   { lat: 39.9042, lng: 116.4074, label: "Beijing" },
          },

          // Route 4 — Chittagong → Sydney
          {
            start: { lat: 22.3569,  lng: 91.7832,  label: "Dhaka" },
            end:   { lat: -33.8688, lng: 151.2093, label: "Sydney" },
          },
        ]}
      />
    </div>
  );
}