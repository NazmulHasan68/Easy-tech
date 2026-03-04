"use client";

import { Facebook, Linkedin } from "lucide-react";


export default function ContactDetails() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#232822] mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Whether you need a new website, digital marketing, or custom software — we’re here to help.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1  gap-3">
        {/* Email */}
        <div className="bg-gradient-to-br from-[#98BC62]/10 to-[#232822]/5 rounded-2xl p-4  transition-shadow duration-300">
          <h3 className="font-bold text-lg mb-2 text-[#232822]">Email Us</h3>
          <p className="text-gray-700">info@easytechsolutions.com</p>
          <p className="text-gray-700">support@easytechsolutions.com</p>
        </div>

        {/* Phone */}
        <div className="bg-gradient-to-br from-[#98BC62]/10 to-[#232822]/5 rounded-2xl p-6  transition-shadow duration-300">
          <h3 className="font-bold text-lg mb-2 text-[#232822]">Call Us</h3>
          <p className="text-gray-700">+880 1580-741616</p>
          <p className="text-gray-700">Mon-Fri: 9AM - 6PM</p>
        </div>

        {/* Address */}
        <div className="bg-gradient-to-br from-[#98BC62]/10 to-[#232822]/5 rounded-2xl p-6  transition-shadow duration-300">
          <h3 className="font-bold text-lg mb-2 text-[#232822]">Visit Us</h3>
          <p className="text-gray-700">23, SEL HUQ SKYPARK, Mirpur Rd, Dhaka</p>
        </div>
      </div>

      {/* Social */}
      <div className="text-center">
        <h3 className="font-bold text-[#232822] mb-4 text-lg">Follow Us</h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/easytechsolutionsx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#98BC62] hover:text-white transition-colors duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/easytechsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#98BC62] hover:text-white transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
