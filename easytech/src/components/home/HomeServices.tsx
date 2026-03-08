"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, BarChart3, Layers, Smartphone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable websites crafted for growth.",
    items: ["eCommerce", "Portfolio", "Custom Web Apps"],
    Icon: Code2,
    link: "/services/web",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing that turns visitors into customers.",
    items: ["Social Media", "Paid Ads", "SEO Strategy"],
    Icon: BarChart3,
    link: "/services/marketing",
  },
  {
    title: "ERP / CRM Solutions",
    desc: "Business automation systems for teams and organizations.",
    items: ["Agency CRM", "Real Estate CRM", "ERP Software"],
    Icon: Layers,
    link: "/services/erp",
  },
  {
    title: "Mobile App",
    desc: "Native & cross-platform apps built for iOS and Android.",
    items: ["React Native", "Flutter", "App Store Deployment"],
    Icon: Smartphone,
    link: "/services/app",
  },
];

// Simple count-up hook (replaces useCountUp)
function useCountUp(end: number) {
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
          let start = 0;
          const duration = 1600;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return { count, ref };
}

function CounterItem({ end, label, suffix }: { end: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref}>
      <h3 className="text-xl md:text-4xl font-bold" style={{ color: "var(--primary)" }}>
        {count}{suffix}
      </h3>
      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{label}</p>
    </div>
  );
}

export default function HomeServices() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* ===== Animated Brand Blobs ===== */}
      {[
        { pos: "-top-40 -left-40",    size: "w-[420px] h-[420px]", dur: 14 },
        { pos: "top-20 -right-32",    size: "w-[380px] h-[380px]", dur: 16 },
        { pos: "-bottom-32 left-[30%]",size: "w-[360px] h-[360px]", dur: 18 },
        { pos: "bottom-10 right-[10%]",size: "w-[300px] h-[300px]", dur: 20 },
        { pos: "top-[45%] -left-24",  size: "w-[300px] h-[300px]", dur: 22 },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${b.pos} ${b.size} rounded-full blur-[140px] opacity-20 pointer-events-none`}
          style={{ backgroundColor: "#5e4cdc" }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Title */}
        <div className="text-center mb-16">
          <h5
            className="font-semibold uppercase tracking-widest text-sm"
            style={{ color: "var(--primary)" }}
          >
            What We Provide
          </h5>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ color: "var(--foreground)" }}
          >
            Our Core Services
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Digital experiences and automation systems designed to grow your business.
          </p>
        </div>

        {/* Services Grid — 4 items, 2+2 on md */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="group"
            >
              <Link
                href={service.link}
                className="relative block rounded-3xl p-[1.5px]"
                style={{
                  background: "linear-gradient(135deg, #5e4cdc, #a78bfa)",
                }}
              >
                {/* Glass Card */}
                <div
                  className="relative rounded-3xl p-8 h-full overflow-hidden transition-all duration-500"
                  style={{ background: "var(--background)" }}
                >
                  {/* Hover Gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                    style={{ background: "linear-gradient(135deg, #5e4cdc, #a78bfa)" }}
                  />

                  <div className="relative z-10 text-center">

                    {/* Icon */}
                    <div
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40"
                      style={{
                        background: "rgba(94,76,220,0.1)",
                        border: "1px solid rgba(94,76,220,0.25)",
                      }}
                    >
                      <service.Icon size={32} style={{ color: "var(--primary)" }} className="group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h4
                      className="text-xl font-semibold transition-colors duration-300 group-hover:text-white"
                      style={{ color: "var(--foreground)" }}
                    >
                      {service.title}
                    </h4>

                    {/* Desc */}
                    <p
                      className="mt-3 mb-6 text-sm transition-colors duration-300 group-hover:text-white/90"
                      style={{ color: "var(--muted)" }}
                    >
                      {service.desc}
                    </p>

                    {/* List */}
                    <ul className="space-y-3 mb-8 text-sm text-left">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 transition-colors duration-300 group-hover:text-white/90"
                          style={{ color: "var(--muted)" }}
                        >
                          <span
                            className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-white/20"
                            style={{ background: "rgba(94,76,220,0.12)" }}
                          >
                            <Check size={12} style={{ color: "var(--primary)" }} className="group-hover:text-white transition-colors duration-300" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      className="flex justify-center items-center gap-2 font-semibold transition-colors duration-300 group-hover:text-white"
                      style={{ color: "var(--primary)" }}
                    >
                      Learn More <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:mt-10 mt-6 rounded-[25px] md:rounded-[30px] py-6 md:py-10 px-4 md:px-6 grid grid-cols-3 gap-4 md:gap-6 text-center"
          style={{
            background: "var(--background)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 40px 120px rgba(94,76,220,0.1)",
          }}
        >
          <CounterItem end={1000} label="Trusted Users"     suffix="+" />
          <CounterItem end={800}  label="Positive Reviews"  suffix="+" />
          <CounterItem end={98}   label="Reply Rate"        suffix="%" />
        </motion.div>

      </div>
    </section>
  );
}