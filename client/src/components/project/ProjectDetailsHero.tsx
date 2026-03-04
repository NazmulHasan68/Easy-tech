import { ArrowRight, ExternalLink } from "lucide-react";

export default function ProjectDetailsHero({ project }: any) {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden text-white">
      
      {/* Background Image */}
      <img loading="lazy"
        src={project?.project_images?.[1]}
        alt={project?.project_name}
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Gradient Overlay (much better than black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      {/* Bottom fade for smooth next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f8fbf9] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full 
                        bg-white/10 backdrop-blur-md border border-white/20
                        text-xs tracking-[3px] uppercase">
          Project <ArrowRight className="w-4 h-4" /> Details
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          {project?.project_name}
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href={project?.client_website}
            target="_blank"
            className="inline-flex items-center justify-center gap-2
                       bg-gradient-to-r from-[#2E602F] to-[#98BC62]
                       px-8 py-4 rounded-full text-lg font-semibold
                       shadow-xl hover:scale-105 transition duration-300"
          >
            Visit Website <ExternalLink className="w-5 h-5" />
          </a>


        </div>
      </div>
    </section>
  );
}
