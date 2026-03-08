"use client";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { appProjects } from "@/components/data/appProjectDeta";

export default function ServiceAppProjectDetails() {
  const { id } = useParams();
  const project = appProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Project not found</p>
      </div>
    );
  }

  // Helper function to format dates
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <section className="bg-white mt-20">
      {/* HERO IMAGE */}
      <div className="relative h-[60vh] w-full">
        <img
          loading="lazy"
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#4b6e16] text-sm font-semibold"
            >
              {project.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold max-w-3xl"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#184419] mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{project.description}</p>

          {/* TECHNOLOGIES */}
          {project.technologies?.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {project.technologies.map((tech: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-[#f7faf7] p-3 rounded-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#98BC62]" />
                    <span className="text-gray-800 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* FEATURES */}
          {project.facilities?.length > 0 && (
            <>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Key Features & Facilities
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.facilities.map((feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-[#f7faf7] p-4 rounded-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#98BC62]" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* LINKS */}
          {project.links && Object.keys(project.links).some(key => project.links[key as keyof typeof project.links]) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.project && (
                <a
                  href={project.links.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#98BC62] text-white font-medium hover:bg-[#7fa03d] transition"
                >
                  Live Project
                </a>
              )}
              {project.links.user && (
                <a
                  href={project.links.user}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#2E602F] text-white font-medium hover:bg-[#184419] transition"
                >
                  User Panel
                </a>
              )}
              {project.links.admin && (
                <a
                  href={project.links.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#555] text-white font-medium hover:bg-[#333] transition"
                >
                  Admin Panel
                </a>
              )}
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        {/* RIGHT SIDEBAR */}
<div className="bg-[#f7faf7] rounded-3xl p-4 h-fit shadow-lg">
  <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Info</h4>
  <div className="space-y-3 text-sm">
    <div>
      <p className="text-gray-500">Category</p>
      <p className="font-semibold text-gray-800">{project.category}</p>
    </div>

    <div>
      <p className="text-gray-500">Status</p>
      <p className="font-semibold text-gray-800">{project.status || "Active"}</p>
    </div>

    {project.startDate && project.endDate && (
      <div>
        <p className="text-gray-500">Timeline</p>
        <p className="font-semibold text-gray-800">
          {formatDate(project.startDate)} - {formatDate(project.endDate)}
        </p>
      </div>
    )}

    {/* Project / User / Admin Links */}
      {project.links && (
        <div className="mt-3 flex flex-col gap-2">
          {project.links.project && (
            <a
              href={project.links.project}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#98BC62] text-white font-medium text-center hover:bg-[#7fa03d] transition"
            >
              Live Project
            </a>
          )}
          {project.links.user && (
            <a
              href={project.links.user}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#2E602F] text-white font-medium text-center hover:bg-[#184419] transition"
            >
              User Panel
            </a>
          )}
          {project.links.admin && (
            <a
              href={project.links.admin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#555] text-white font-medium text-center hover:bg-[#333] transition"
            >
              Admin Panel
            </a>
          )}
        </div>
      )}
    </div>

    <Link
      to="/contact"
      className="mt-8 block text-center px-6 py-3 rounded-full bg-linear-to-r from-[#2E602F] to-[#98BC62] text-white font-semibold hover:scale-105 transition"
    >
      Contact us for a similar project
    </Link>
  </div>
      </div>
    </section>
  );
}