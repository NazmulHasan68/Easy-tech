"use client";

import heroImg from "@/assets/img/crm.png"; // your background image

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#98BC62]/20 via-white to-[#232822]/10 overflow-hidden">
      {/* Background Image */}
      <img loading="lazy"
        src={heroImg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Optional: colored overlay for better text contrast */}
      <div className="absolute inset-0 bg-[#232822]/70 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-[#232822] mb-6">
          Get in <span className="text-[#98BC62]">Touch</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how we can help you achieve your goals.
        </p>
      </div>
    </section>
  );
}
