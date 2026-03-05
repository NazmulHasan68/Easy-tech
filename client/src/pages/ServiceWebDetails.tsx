import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { webProjects } from "@/components/data/webprojectDeta";
import { ExternalLink } from "lucide-react";

/* Small reusable component */
interface InfoItemProps {
  label: string;
  value: string | number; // if value can also be number
}


export default function ServiceWebDetails() {
  const { id } = useParams();
  const project = webProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Project not found</p>
      </div>
    );
  }

  return (
    <section className="bg-white mt-20">
      {/* ================= HERO ================= */}
      <div className="relative h-[70vh] w-full">
        <img loading="lazy"
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/70 to-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-5 py-1.5 rounded-full bg-[#98BC62] text-sm font-semibold"
            >
              {project.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight"
            >
              {project.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-gray-200"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-2 space-y-7">
          {/* Overview */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184419] mb-4 md:mb-6">
              Project Overview
            </h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold max-w-4xl leading-tight"
            >
              {project.name}
            </motion.h1>

            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
              Key Features & Facilities
            </h3>

            <ul className="grid sm:grid-cols-2 gap-3">
              {project.facilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 bg-[#f7faf7] p-3 rounded-xl border border-gray-100"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#98BC62]" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#98BC62]/10 text-[#2E602F] text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="bg-[#f7faf7] rounded-3xl p-6 h-fit shadow-lg space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">
            Project Information
          </h4>

          <div className="space-y-4 text-sm">
            <InfoItem label="Category" value={project.category} />
            <InfoItem label="Status" value={project.status} />
            <InfoItem
              label="Timeline"
              value={`${project.startDate} – ${project.endDate}`}
            />
          </div>

          {/* Website */}
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#98BC62] text-[#2E602F] font-semibold hover:bg-[#98BC62] hover:text-white transition"
          >
            Visit Live Website <ExternalLink size={16} />
          </a>

          {/* CTA */}
          <Link
            to="/contact"
            className="block text-center px-6 py-3 rounded-full bg-linear-to-r from-[#2E602F] to-[#98BC62] text-white font-semibold hover:scale-105 transition"
          >
            Contact for Similar Project
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Small reusable component */
function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}
