import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { webProjects } from "../../data/webprojectDeta";

export default function ServiceWebProject() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f7faf7] via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#184419] mb-4"
          >
           Development Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto text-md"
          >
            We craft scalable, high-performance digital solutions that help
            businesses grow and stand out.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <Link
                to={`/services/web/${project.id}`}
                className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[160px] overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-[#538507] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {project.category}
                  </span>

                  {/* Hover CTA */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-2 text-white font-semibold">
                      View Project
                      <span className="w-8 h-8 rounded-full bg-[#98BC62] flex items-center justify-center">
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl line-clamp-1 font-semibold text-gray-900 mb-2 leading-snug">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="mt-6 h-px w-full bg-gray-100" />

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-[#2E602F] font-medium">
                      Project Details
                    </span>

                    <span className="text-gray-400 group-hover:text-[#2E602F] transition">
                      Explore →
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
