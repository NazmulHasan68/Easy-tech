
import banner from "@/assets/img/pm.jpg"
import { ArrowRight } from "lucide-react";

export default function ProjectHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img loading="lazy"
        src={banner}
        alt="Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up">
          Our Projects
        </h1>

        {/* Breadcrumb */}
        <div className="flex gap-1 bg-[#2D602E] justify-center items-center mb-8 px-3 py-2 rounded-full border border-[#2D602E]/30 shadow-2xl  backdrop-blur-md text-sm tracking-widest uppercase">
          Home <span className="mx-1 text-amber-500 font-bold mt-1 flex gap-2"><ArrowRight/>Project</span> 
        </div>
      </div>
    </section>
  );
}
