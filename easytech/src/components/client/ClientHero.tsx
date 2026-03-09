"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Happy Clients" },
  { value: "250+", label: "Projects Done" },
  { value: "8+",   label: "Years Experience" },
];

export default function ClientHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(/client_logo/client.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(7,0,44,0.95) 0%, rgba(7,0,44,0.70) 50%, rgba(94,76,220,0.40) 100%)",
        }}
      />

      {/* Purple glow blobs */}
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
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
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our <br />
            <span
              style={{
                background: "linear-gradient(130deg, #a78bfa, #5e4cdc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Happy Clients
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 hidden md:flex text-gray-300 text-lg leading-relaxed">
            We are proud to collaborate with amazing clients who trust us to
            build, grow, and scale their digital presence through innovative
            solutions and reliable partnerships.
          </p>

          {/* Stats */}
          <div className="flex gap-4 md:gap-10 mt-8">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center md:text-left"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: "linear-gradient(130deg, #ffffff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </h3>
                <p className="text-sm md:text-base text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}