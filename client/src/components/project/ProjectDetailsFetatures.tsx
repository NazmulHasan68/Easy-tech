import { CheckCircle2 } from "lucide-react";

export default function ProjectDetailsFetatures({ project }: any) {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8fbf9]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Features
          </h2>

          <ul className="space-y-5">
            {project?.features?.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#2D602E] w-6 h-6 mt-1" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="rounded-[10px] overflow-hidden shadow-2xl">
          <img loading="lazy"
            src={project?.project_images?.[0]}
            alt={project?.project_name}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
