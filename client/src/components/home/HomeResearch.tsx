"use client";

import { motion } from "framer-motion";
import SEO from "../SEO";

import dgt from "@/assets/img/dgt.jpg";
import seoImg from "@/assets/img/seo.jpg";
import res from "@/assets/img/res.jpg";
import wb from "@/assets/img/wb.jpg";

import icon1 from "@/assets/img/research/r1-icon-1.png";
import icon2 from "@/assets/img/research/r1-icon-2.png";
import icon3 from "@/assets/img/research/r1-icon-3.png";
import icon4 from "@/assets/img/research/r1-icon-4.png";

const items = [
  { title: "Digital Marketing", img: dgt, icon: icon1 },
  { title: "SEO Optimization", img: seoImg, icon: icon2 },
  { title: "Product Research", img: res, icon: icon3 },
  { title: "Web Development", img: wb, icon: icon4 },
];

export default function HomeResearch() {
  return (
    <>
      <SEO
        title="Consulting Services | EasyTech Solutions"
        description="Strategic research and digital consulting services to drive measurable business growth."
      />

      <section
        className="relative py-28 md:py-36 overflow-hidden"
        aria-labelledby="research-heading"
      >
        {/* ===== Premium Gradient Background ===== */}
        <div className="absolute inset-0 bg-linear-to-br from-[#f9fdf7] via-[#eef6ee] to-[#e9f3e9]" />

        {/* ===== Animated Soft Brand Bubbles ===== */}
        {[
          { pos: "-top-52 -left-52", size: "w-[520px] h-[520px]", dur: 30 },
          { pos: "top-10 -right-52", size: "w-[480px] h-[480px]", dur: 40 },
          { pos: "bottom-0 left-[30%]", size: "w-[420px] h-[420px]", dur: 45 },
          { pos: "bottom-10 right-[15%]", size: "w-[380px] h-[380px]", dur: 35 },
          { pos: "top-[45%] -left-32", size: "w-[360px] h-[360px]", dur: 37 },
          { pos: "top-[20%] right-[35%]", size: "w-[400px] h-[400px]", dur: 45 },
        ].map((b, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 40, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: b.dur,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${b.pos} ${b.size} rounded-full blur-[170px] opacity-20`}
            style={{
              background:
                "radial-gradient(circle at center, #98BC62 0%, #2D602E 60%, transparent 100%)",
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
            <p className="uppercase tracking-[0.35em] text-[#2D602E] font-semibold text-xs mb-2">
              Consulting Services
            </p>

            <h2
              id="research-heading"
              className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-6 leading-tight"
            >
              Strategic Research That <span className="text-[#2D602E] font-bold">Drives Growth</span>
            </h2>

            <p className="max-w-2xl px-2 mx-auto text-gray-600 text-xs md:text-lg leading-relaxed">
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
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-linear-to-br from-[#2D602E] to-[#98BC62] opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative rounded-3xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-[0_35px_90px_rgba(45,96,46,0.15)] overflow-hidden transition-all duration-500">

                  {/* Image */}
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.6 }}
                      src={item.img}
                      alt={`${item.title} illustration`}
                      className="object-cover w-full h-full"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#2D602E]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <img loading="lazy" src={item.icon} alt="" className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2D602E] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
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

    </>
  );
}
