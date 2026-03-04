"use client";

import { motion } from "framer-motion";
import { erpProjects } from "../../data/erpojectDeta";
import { Link } from "react-router-dom";

export default function ServiceErpProject() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f7faf7] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#184419] mb-4">
            Our ERP & CRM Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md">
            Discover ERP solutions we’ve built to streamline business operations, optimize workflows, and increase productivity.
          </p>
        </div>

        {/* ERP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {erpProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/services/erp/${project.id}`} className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.name}
                    className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#638531] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-xl line-clamp-1 font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Links Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.project && (
                      <a
                        href={project.links.project}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-[#98BC62] text-white text-sm font-medium hover:bg-[#7fa03d] transition"
                      >
                        Live Project
                      </a>
                    )}
                    {project?.links.user && (
                      <a
                        href={project?.links.user}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-[#2E602F] text-white text-sm font-medium hover:bg-[#184419] transition"
                      >
                        User Panel
                      </a>
                    )}
                    {project?.links.admin && (
                      <a
                        href={project?.links.admin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-[#555] text-white text-sm font-medium hover:bg-[#333] transition"
                      >
                        Admin Panel
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}