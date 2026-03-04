"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectdetails } from "./projectData";

export default function ProjectView() {
  const [current, setCurrent] = useState(0);
  const total = projectdetails.length;

  const nextProject = () => setCurrent((p) => (p + 1) % total);
  const prevProject = () => setCurrent((p) => (p - 1 + total) % total);

  const project = projectdetails[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.projectID}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img loading="lazy"
            src={project.project_images[0]}
            alt={project.project_name}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Info Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl w-full mx-4 md:mx-0 bg-black/50 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-10 text-white shadow-2xl"
            >
              <p className="uppercase tracking-widest text-sm text-[#98BC62] mb-2">
                {project.category}
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                {project.project_name}
              </h2>

              <p className="text-gray-200 mb-6 md:mb-8 text-sm md:text-base line-clamp-3">
                {project.project_details}
              </p>

              <Link
                to={`/project/${project.projectID}`}
                className="inline-block px-8 py-3 bg-linear-to-r from-[#2E602F] to-[#98BC62] rounded-full font-semibold text-white hover:scale-105 transition"
              >
                View Project →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        <button
          onClick={prevProject}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#98BC62] hover:text-white transition duration-300"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-white font-semibold text-lg md:text-xl">
          {current + 1} / {total}
        </span>

        <button
          onClick={nextProject}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#98BC62] hover:text-white transition duration-300"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Mobile Swipe Hints */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 md:hidden">
        {projectdetails.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-[#98BC62]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
