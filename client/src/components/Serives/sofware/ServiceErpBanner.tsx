"use client";

import { motion } from "framer-motion";
import image from "@/assets/img/res.jpg";
import { ArrowRight } from "lucide-react";

export default function ServiceErpBanner() {
  return (
    <section
      className="relative h-[85vh] min-h-[700px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10  text-center max-w-4xl px-6"
      >
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          ERP / CRM Solutions
        </h1>

        {/* Breadcrumb */}
        <div className="flex gap-1 bg-[#2D602E] justify-center items-center mb-8 px-3 py-2 rounded-full border border-[#2D602E]/30 shadow-2xl  backdrop-blur-md text-sm tracking-widest uppercase">
          Services <span className="mx-1 text-amber-500 font-bold flex gap-2"><ArrowRight/>ERP / CRM Solutions</span> 
        </div>

        

      </motion.div>
    </section>
  );
}
