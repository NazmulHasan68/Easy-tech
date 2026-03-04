"use client";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { digitalServices } from "../../data/digitalprojectDeta";

export default function ServiceDigitalProjectDetails() {
  const { id } = useParams();
  const service = digitalServices.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <section className="bg-white mt-20">
      {/* HERO IMAGE */}
      <div className="relative h-[60vh] w-full">
        <img loading="lazy"
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#4b6e16] text-sm font-semibold"
            >
              {service.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold max-w-3xl"
            >
              {service.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#184419] mb-6">
            Service Overview
          </h2>
          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold max-w-3xl"
            >
              {service.name}
            </motion.h1>
          <p className="text-gray-700 leading-relaxed mb-10">{service.description}</p>

          {/* TECHNOLOGIES */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {service.technologies.map((tech: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-[#f7faf7] p-3 rounded-xl"
              >
                <span className="w-2 h-2 rounded-full bg-[#98BC62]" />
                <span className="text-gray-800 font-medium">{tech}</span>
              </li>
            ))}
          </ul>

          {/* FACILITIES / FEATURES */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Key Features & Facilities</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.facilities.map((feature: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-[#f7faf7] p-4 rounded-xl"
              >
                <span className="w-2 h-2 rounded-full bg-[#98BC62]" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-[#f7faf7] rounded-3xl p-6 h-fit shadow-lg">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Info</h4>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500">Category</p>
              <p className="font-semibold text-gray-800">{service.category}</p>
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <p className="font-semibold text-gray-800">{service.status || "Active"}</p>
            </div>

            <div>
              <p className="text-gray-500">Project Link</p>
              <a
                href={service.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2E602F] hover:underline"
              >
                {service.website}
              </a>
            </div>

            <div>
              <p className="text-gray-500">Timeline</p>
              <p className="font-semibold text-gray-800">
                {service.startDate} - {service.endDate}
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-8 block text-center px-6 py-3 rounded-full bg-linear-to-r from-[#2E602F] to-[#98BC62] text-white font-semibold hover:scale-105 transition"
          >
            Start a Similar Project
          </Link>
        </div>
      </div>
    </section>
  );
}
