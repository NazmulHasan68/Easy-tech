"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    img: "/home/client/client1.jpeg",
    name: "Md. Mainul Hasan Dulon",
    role: "Founder & CEO, The Premium Homes Ltd",
    text: "Hiring this digital agency was the best decision for our business. Their strategy and execution were excellent.",
  },
  {
    img: "/home/client/client2.jpeg",
    name: "MD Riyan Chowdhury",
    role: "Founder & CEO, Bashumoti Group",
    text: "They brought our ideas to life with precision and smart digital solutions.",
  },
  {
    img: "/home/client/client3.jpeg",
    name: "Riaz Hossain",
    role: "Co-founder, Miror Elegance & Fashion Ltd",
    text: "The process was smooth, stress-free, and the result was outstanding.",
  },
  {
    img: "/home/client/client4.jpeg",
    name: "Sakib Hasan Shishir",
    role: "Founder & CEO, Amrubazar BD",
    text: "Detail-oriented, creative, and very professional throughout the project.",
  },
  {
    img: "/home/client/client5.jpeg",
    name: "Shariar Bin Enam",
    role: "Co-founder, Bonoful & Co.",
    text: "Branding, development, and marketing — everything handled perfectly.",
  },
  {
    img: "/home/client/client6.jpeg",
    name: "Md Imtias Islam",
    role: "Founder & CEO, Farmer Care",
    text: "We saw clear improvement in traffic and engagement after working with them.",
  },
  {
    img: "/home/client/client7.jpeg",
    name: "MD Foridul Islam Tanvir",
    role: "Co-founder, Macherhat",
    text: "They exceeded expectations with creativity and professionalism.",
  },
];

export default function HomeClientSay() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(i);
  }, []);

  const item = testimonials[active];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div
        className="absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <div
        className="absolute bottom-0 -right-32 w-[380px] h-[380px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: "#07002c" }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">

        {/* Title */}
        <header className="text-center mb-12 md:mb-16">
          <p
            className="font-semibold uppercase tracking-[0.35em] text-xs mb-4"
            style={{ color: "var(--primary)" }}
          >
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clients
            </span>{" "}
            Say
          </h2>
        </header>

        {/* Card */}
        <div
          className="relative backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 30px 100px rgba(94,76,220,0.1)",
          }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-6 right-8 text-8xl font-serif leading-none opacity-10 pointer-events-none select-none"
            style={{ color: "var(--primary)" }}
          >
            "
          </div>

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
              <div
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 shadow-lg shadow-[#5e4cdc]/20"
                style={{ border: "3px solid var(--primary)" }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <blockquote className="text-center md:text-left">
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  "{item.text}"
                </p>

                <figcaption>
                  <h4
                    className="text-xl md:text-2xl font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.name}
                  </h4>
                  <span
                    className="font-medium text-sm md:text-base"
                    style={{ color: "var(--primary)" }}
                  >
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
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? "28px" : "12px",
                height: "12px",
                background: active === i ? "var(--primary)" : "var(--border-color)",
                transform: active === i ? "scale(1.1)" : "scale(1)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}