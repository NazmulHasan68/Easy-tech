"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, SearchCheck, FlaskConical, Code2 } from "lucide-react";

const items = [
  {
    title: "Digital Marketing",
    img: "/home/research/dgt.jpg",
    Icon: Globe,
  },
  {
    title: "SEO Optimization",
    img: "/home/research/seo.jpg",
    Icon: SearchCheck,
  },
  {
    title: "Product Research",
    img: "/home/research/res.jpg",
    Icon: FlaskConical,
  },
  {
    title: "Web Development",
    img: "/home/research/wb.jpg",
    Icon: Code2,
  },
];

const blobs = [
  { pos: "-top-52 -left-52",       size: "w-[520px] h-[520px]", dur: 60 },
  { pos: "top-10 -right-52",       size: "w-[480px] h-[480px]", dur: 70 },
  { pos: "bottom-0 left-[30%]",    size: "w-[420px] h-[420px]", dur: 80 },
  { pos: "bottom-10 right-[15%]",  size: "w-[380px] h-[380px]", dur: 65 },
  { pos: "top-[45%] -left-32",     size: "w-[360px] h-[360px]", dur: 75 },
  { pos: "top-[20%] right-[35%]",  size: "w-[400px] h-[400px]", dur: 85 },
];

export default function HomeResearch() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      aria-labelledby="research-heading"
      style={{ background: "var(--surface)" }}
    >
      {/* ===== Gradient Background Layer ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(94,76,220,0.08) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(7,0,44,0.12) 0%, transparent 60%)",
        }}
      />

      {/* ===== Animated Brand Bubbles ===== */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 360] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "linear" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[170px] opacity-15 pointer-events-none`}
          style={{
            background:
              "radial-gradient(circle at center, #a78bfa 0%, #5e4cdc 60%, transparent 100%)",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">

        {/* ===== Header ===== */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-24"
        >
          <p
            className="uppercase tracking-[0.35em] font-semibold text-xs mb-2"
            style={{ color: "var(--primary)" }}
          >
            Consulting Services
          </p>

          <h2
            id="research-heading"
            className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Strategic Research That{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Drives Growth
            </span>
          </h2>

          <p
            className="max-w-2xl px-2 mx-auto text-xs md:text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            We analyze markets, user behavior, and technology to build smart
            strategies that accelerate your brand growth.
          </p>
        </motion.header>

        {/* ===== Cards ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl"
            >
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                style={{
                  padding: "1.5px",
                  background: "linear-gradient(135deg, #5e4cdc, #a78bfa)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-500 h-full"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 35px 90px rgba(94,76,220,0.08)",
                }}
              >
                {/* Image */}
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.img}
                      alt={`${item.title} illustration`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(94,76,220,0.5) 0%, transparent 100%)",
                    }}
                  />

                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--background)" }}
                  >
                    <item.Icon size={22} style={{ color: "var(--primary)" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2 transition-colors duration-300"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    Research-driven planning and execution to deliver measurable
                    digital results for your business.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}