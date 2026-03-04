"use client";

import { motion, useMotionValue } from "framer-motion";
import HeroMain from "../../assets/img/12.jpg";
import HeroCard from "../../assets/img/2hm2.jpg";
import idea from "../../assets/img/hero/_idea.png";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* BRAND GLOWS */}
      <div className="absolute -top-40 -left-40 w-150 h-150 bg-[#98BC62]/30 blur-[150px] rounded-full" />
      <div className="absolute top-32 right-0 w-130 h-130 bg-[#2D602E]/20 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        
        {/* IDEA ICON */}
        <div className="absolute md:-top-[1%] top-[6%] left-[40%] md:left-[23%] opacity-80">
          <img loading="lazy" src={idea} title="idea" />
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 space-y-6 md:space-y-10 mt-12 md:mt-4"
        >
          <span className="inline-block text-right font-semibold text-[#2D602E] bg-[#98BC62]/20 px-4 py-2 rounded-full text-sm">
            Digital Solutions
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-950">
            Building <br />
            <span className="text-[#2D602E]">A Better You</span>
          </h1>

          <p className="text-gray-500 text-md md:text-lg max-w-xl">
            Innovative strategies and data-driven insights that showcase your
            agency’s expertise in digital marketing and technology.
          </p>

          <motion.a
            whileTap={{ scale: 0.96 }}
            href="/about"
            className="group shadow-2xl relative inline-flex items-center gap-4 
                      px-6 py-3 md:py-4 rounded-full text-lg font-semibold
                      overflow-hidden border border-[#2D602E] text-[#2D602E]"
          >
            {/* Sliding BG */}
            <span
              className="absolute inset-0 bg-[#2D602E] 
                        -translate-x-full group-hover:translate-x-0
                        transition-transform duration-500 ease-out"
            />

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Explore More
            </span>

            {/* Icon */}
            <ArrowRight className="relative z-10 group-hover:text-white transition-colors duration-500" />
          </motion.a>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div
          className="lg:w-1/2 relative h-100  md:h-140 flex items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set((x - rect.width / 2) / 30);
            mouseY.set((y - rect.height / 2) / 30);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Soft brand plate */}
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-br 
                          from-[#98BC62]/40 to-[#2D602E]/20 
                          rounded-[50px] blur-2xl opacity-70" />

          {/* Back image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -7 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute w-[78%] md:w-[65%] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img loading="lazy" src={HeroMain} className="w-full h-full object-cover" />
          </motion.div>

          {/* Front image with parallax */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative mt-12 z-10 w-[68%] rounded-3xl overflow-hidden
                       shadow-[0_60px_120px_rgba(45,96,46,0.35)]"
          >
            <motion.img
              src={HeroCard}
              className="w-full  h-full object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-1 md:-right-6 top-10 bg-white rounded-xl shadow-xl p-3 md:p-4 w-28 md:w-40 border border-[#98BC62]/30"
          >
            <p className="text-sm text-gray-500">Profile Views</p>
            <h4 className="text-xl md:text-2xl font-bold text-[#2D602E]">45M+</h4>
          </motion.div>

          {/* Floating growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 md:left-10 left-0 bg-white rounded-xl shadow-xl p-2 md:p-4 w-32 md:w-44 border border-[#98BC62]/30"
          >
            <p className="text-sm text-gray-600">Growth</p>
            <div className="md:h-8 h-6 bg-gradient-to-r from-[#98BC62] to-[#2D602E] rounded-md mt-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
