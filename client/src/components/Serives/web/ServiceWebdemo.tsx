import { ExternalLink, Play } from "lucide-react";

const demos = [
  {
    title: "Easy Ecommerce",
    url: "https://easytechsolutions.xyz/easy_data/easy_commerce/",
  },
  {
    title: "Easy Multivendor",
    url: "https://easytechsolutions.xyz/easy_data/easy_multivendor/",
  },
  {
    title: "Easy ERP Dashboard",
    url: "https://easytechsolutions.xyz/easy_data/easy_erp/",
  },
];

export default function ServiceWebdemo() {
  return (
    <div
      className="mt-4 rounded-3xl border border-[#2E602F]/10
      bg-white/90 backdrop-blur-xl
      shadow-[0_30px_100px_rgba(46,96,47,0.18)]
      md:p-6 p-4"
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2E602F]" />
        Live Demo
      </h3>

      {/* Demo List */}
      <div className="space-y-2">
        {demos.map((demo, i) => (
          <a
            key={i}
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between
            rounded-2xl px-5 py-3 md:px-6 md:py-3
            border border-gray-200 bg-gray-50
            transition-all duration-500
            hover:shadow-xl hover:bg-[#2E602F] hover:border-[#2E602F]/40"
          >
            {/* Hover Gradient */}
            <span
              className="absolute inset-0 rounded-2xl opacity-0
              bg-gradient-to-r from-[#2E602F] to-[#4d8b4f]
              group-hover:opacity-100 transition duration-500 -z-10"
            />

            {/* Left Content */}
            <div className="flex items-center gap-4 z-10">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center
                bg-white shadow-sm
                group-hover:bg-white/20 transition"
              >
                <ExternalLink
                  size={20}
                  className="text-[#2E602F] group-hover:text-white transition"
                />
              </div>

              <span className="font-semibold text-gray-800 group-hover:text-white transition">
                {demo.title}
              </span>
            </div>

            {/* Right Icon */}
            <Play
              size={20}
              className="text-gray-500 group-hover:text-white
              group-hover:translate-x-1 transition z-10"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
