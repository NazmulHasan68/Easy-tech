"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { webProjects } from "@/components/data/webProjectData";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceWebProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const paraRef    = useRef<HTMLParagraphElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Title words */
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll(".word"), {
          opacity: 0, y: 40, skewY: 4, stagger: 0.08, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 86%", toggleActions: "play none none reverse" },
        });
      }

      /* Para */
      gsap.from(paraRef.current, {
        opacity: 0, y: 20, duration: 0.65, delay: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: paraRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });

      /* Cards stagger */
      if (gridRef.current) {
        gsap.from(Array.from(gridRef.current.children), {
          opacity: 0, y: 50, scale: 0.93,
          stagger: 0.1, duration: 0.65, ease: "back.out(1.4)",
          scrollTrigger: { trigger: gridRef.current, start: "top 84%", toggleActions: "play none none reverse" },
        });
      }

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Glow */}
      <div className="blob" style={{ width: "500px", height: "500px", background: "rgba(94,76,220,0.07)", top: "-100px", right: "-100px" }} />

      <div className="container-xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            <span className="word inline-block will-change-transform">Development&nbsp;</span>
            <span className="word inline-block will-change-transform gradient-text">Projects</span>
          </h2>

          <p
            ref={paraRef}
            className="max-w-2xl mx-auto text-sm md:text-base will-change-transform"
            style={{ color: "var(--muted)" }}
          >
            We craft scalable, high-performance digital solutions that help
            businesses grow and stand out.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {webProjects.map((project) => (
            <Link
              key={project.id}
              href={`/services/web/${project.id}`}
              className="group block rounded-3xl overflow-hidden will-change-transform"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 24px rgba(94,76,220,0.06)",
                transition: "border-color 0.25s, box-shadow 0.25s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--primary)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(94,76,220,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-color)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(94,76,220,0.06)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(7,0,44,0.75) 0%, rgba(7,0,44,0.3) 50%, transparent 100%)" }}
                />

                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 badge will-change-transform"
                  style={{
                    background: "rgba(94,76,220,0.85)",
                    borderColor: "rgba(167,139,250,0.4)",
                    color: "#f0eeff",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {project.category}
                </span>

                {/* Hover CTA */}
                <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                    View Project
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--primary)" }}
                    >
                      <ArrowRight size={13} />
                    </span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold mb-2 leading-snug line-clamp-1"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {project.name}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                {/* Divider */}
                <div className="mt-5 h-px w-full" style={{ background: "var(--border-color)" }} />

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    Project Details
                  </span>
                  <span
                    className="flex items-center gap-1 transition-colors duration-200"
                    style={{ color: "var(--muted)" }}
                  >
                    Explore <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}