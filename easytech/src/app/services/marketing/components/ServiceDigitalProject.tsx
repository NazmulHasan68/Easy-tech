

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { digitalServices } from "@/components/data/digitalProjectData";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDigitalProject() {
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
        opacity: 0, y: 20, duration: 0.65, ease: "power2.out",
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
            <span className="word inline-block will-change-transform">Our&nbsp;</span>
            <span className="word inline-block will-change-transform">Digital&nbsp;</span>
            <span className="word inline-block will-change-transform gradient-text">Marketing Services</span>
          </h2>

          <p
            ref={paraRef}
            className="max-w-2xl mx-auto text-sm md:text-base will-change-transform"
            style={{ color: "var(--muted)" }}
          >
            We deliver result-driven digital marketing solutions to help brands grow online.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {digitalServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/marketing/${service.id}`}
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
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
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
                  className="absolute top-4 left-4 badge"
                  style={{
                    background: "rgba(94,76,220,0.85)",
                    borderColor: "rgba(167,139,250,0.4)",
                    color: "#f0eeff",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold mb-2 leading-snug line-clamp-1"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {service.name}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {service.description}
                </p>

                <div className="mt-5 h-px w-full" style={{ background: "var(--border-color)" }} />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                    View Details
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "rgba(94,76,220,0.1)",
                      color: "var(--primary)",
                    }}
                  >
                    <ArrowRight size={14} />
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