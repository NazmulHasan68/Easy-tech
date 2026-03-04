"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import client1 from "@/assets/img/client1.jpeg";
import client2 from "@/assets/img/client2.jpeg";
import client3 from "@/assets/img/client3.jpeg";
import client4 from "@/assets/img/client4.jpeg";
import client5 from "@/assets/img/client5.jpeg";
import client6 from "@/assets/img/client6.jpeg";
import client7 from "@/assets/img/client7.jpeg";

const testimonials = [
  {
    img: client1,
    name: "Md. Mainul Hasan Dulon",
    role: "Founder & CEO, The Premium City LTD",
    text:
      "Hiring this digital agency was the best decision for our business. Their strategy and execution were excellent.",
  },
  {
    img: client2,
    name: "MD Riyan Chowdhury",
    role: "Founder & CEO, Bashumoti Group",
    text:
      "They brought our ideas to life with precision and smart digital solutions.",
  },
  {
    img: client3,
    name: "Riaz Hossain",
    role: "Co-founder, Miror Elegance & Fashion Ltd",
    text:
      "The process was smooth, stress-free, and the result was outstanding.",
  },
  {
    img: client4,
    name: "Sakib Hasan Shishir",
    role: "Founder & CEO, Amrubazar BD",
    text:
      "Detail-oriented, creative, and very professional throughout the project.",
  },
  {
    img: client5,
    name: "Shariar Bin Enam",
    role: "Co-founder, Bonoful & Co.",
    text:
      "Branding, development, and marketing — everything handled perfectly.",
  },
  {
    img: client6,
    name: "Md Imtias Islam",
    role: "Founder & CEO, Farmer Care",
    text:
      "We saw clear improvement in traffic and engagement after working with them.",
  },
  {
    img: client7,
    name: "MD Foridul Islam Tanvir",
    role: "Co-founder, Macherhat",
    text:
      "They exceeded expectations with creativity and professionalism.",
  },
];

export default function HomeClientSay() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(i);
  }, []);

  const item = testimonials[active];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f6fbf6] via-white to-[#eef5ee]" />

      {/* Soft blobs */}
      <div className="absolute -top-32 -left-32 w-95 h-95 bg-[#98BC62]/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 -right-32 w-95 h-95 bg-[#2E602F]/20 blur-[130px] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <header className="text-center mb-12 md:mb-16">
          <p className="text-[#2E602F] font-semibold uppercase tracking-[0.35em] text-xs mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What Our <span className="text-[#255326]">Clients</span> Say
          </h2>
        </header>

        {/* Testimonial Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-[#98BC62]/30 shadow-[0_30px_100px_rgba(45,96,46,0.12)] rounded-3xl p-6 sm:p-10 md:p-16">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Client Image */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                <img loading="lazy"
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <blockquote className="text-center md:text-left">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  “{item.text}”
                </p>

                <figcaption>
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-[#2E602F] font-medium text-sm md:text-base">
                    {item.role}
                  </span>
                </figcaption>
              </blockquote>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8 md:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                active === i
                  ? "bg-[#2E602F] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
