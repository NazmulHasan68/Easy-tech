"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { digitalServices } from "../../data/digitalprojectDeta";

export default function ServiceDigitalProject() {
  return (
    <section className="py-16 bg-linear-to-b from-[#f7faf7] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#184419] mb-4">
            <span className="text-black">Our Digital</span> Marketing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            We deliver result-driven digital marketing solutions to help brands grow online.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/services/marketing/${service.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img loading="lazy"
                    src={service.image}
                    alt={service.name}
                    className="w-full h-32.5 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-[#6b8643] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl line-clamp-1 font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[#2E602F] font-medium">
                      View Details
                    </span>

                    <span className="w-8 h-8 rounded-full bg-[#98BC62]/10 flex items-center justify-center group-hover:bg-[#98BC62] transition">
                      →
                    </span>
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
