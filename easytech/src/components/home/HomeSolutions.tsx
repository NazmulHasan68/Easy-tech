"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Replaces react-countup — no extra dependency needed
function useCountUp(end: number, delay = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            let start = 0;
            const step = Math.ceil(end / (1600 / 16));
            const timer = setInterval(() => {
              start += step;
              if (start >= end) { setCount(end); clearInterval(timer); }
              else setCount(start);
            }, 16);
          }, delay * 1000);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, delay]);

  return { count, ref };
}

function CountStat({ end, delay, label }: { end: number; delay?: number; label: string }) {
  const { count, ref } = useCountUp(end, delay ?? 0);
  return (
    <div ref={ref}>
      <h4 className="md:text-3xl text-lg font-bold" style={{ color: "var(--foreground)" }}>
        {count}%
      </h4>
      <p className="text-xs md:text-sm" style={{ color: "var(--muted)" }}>{label}</p>
    </div>
  );
}

const blobs = [
  { pos: "-top-40 -left-32",    size: "w-[420px] h-[420px]", dur: 30 },
  { pos: "top-10 -right-32",    size: "w-[380px] h-[380px]", dur: 34 },
  { pos: "-bottom-32 left-[35%]", size: "w-[360px] h-[360px]", dur: 38 },
  { pos: "bottom-10 right-[8%]", size: "w-[320px] h-[320px]", dur: 42 },
  { pos: "top-[50%] -left-20",  size: "w-[300px] h-[300px]", dur: 46 },
];

export default function HomeSolutions() {
  return (
    <section
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--background)" }}
      aria-label="Consulting and Digital Solutions Section"
    >
      {/* ========= Rotating Brand Bubbles ========= */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [0, 360], y: [0, -50, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "linear" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[160px] opacity-20 pointer-events-none`}
          style={{
            background: `radial-gradient(circle at 30% 30%, #a78bfa 0%, #5e4cdc 50%, #07002c 100%)`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-2"
          >
            <h5
              className="text-xs md:text-base font-semibold uppercase tracking-widest mb-2 md:mb-4"
              style={{ color: "var(--primary)" }}
            >
              Consulting Solutions
            </h5>

            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Skillset to Improve <br /> Your Company Brand
            </h2>

            <p
              className="text-sm leading-relaxed mb-8 md:mb-12 max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              We provide smart digital solutions that strengthen your brand,
              improve marketing performance, and help businesses scale faster.
            </p>

            {/* Small Images */}
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-12">
              {["/home/client_office.jpg", "/home/client_office_2.jpg"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.25 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden w-38 md:w-44 h-26 md:h-28 shadow-xl"
                  style={{ border: "1px solid var(--border-color)" }}
                >
                  <Image
                    src={src}
                    alt="Digital solution preview"
                    width={176}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/project"
                className="inline-flex items-center gap-3 text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg shadow-[#5e4cdc]/30 transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #5e4cdc, #a78bfa)" }}
              >
                Explore More →
              </Link>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-[#5e4cdc]/20"
              style={{ border: "1px solid var(--border-color)" }}
            >
              <Image
                src="/home/client_deal.jpg"
                alt="Business consulting and brand improvement"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating Glass Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 -left-4 md:-bottom-12 md:-left-12 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-8 w-50 md:w-72"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 30px 80px rgba(94,76,220,0.15)",
              }}
            >
              <h5 className="font-semibold mb-2 md:mb-6" style={{ color: "var(--foreground)" }}>
                Goals
              </h5>

              {/* Stat 1 */}
              <div className="flex items-center gap-4 mb-2 md:mb-6">
                <div
                  className="md:w-12 w-6 h-6 md:h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
                  style={{
                    background: "rgba(94,76,220,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  %
                </div>
                <CountStat end={64} label="Cover Marketing" />
              </div>

              {/* Stat 2 */}
              <div
                className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-2xl"
                style={{ background: "rgba(94,76,220,0.07)" }}
              >
                <div
                  className="md:w-12 w-6 h-6 md:h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
                  style={{
                    background: "rgba(94,76,220,0.15)",
                    color: "var(--primary)",
                  }}
                >
                  %
                </div>
                <CountStat end={94} delay={0.3} label="SMS Marketing" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}