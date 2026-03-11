"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { webProjects }         from "@/components/data/webProjectData";
import { digitalServices }     from "@/components/data/digitalProjectData";
import { appProjects }         from "@/components/data/appProjectData";
import { erpProjects }         from "@/components/data/erpProjectData";
import { mediaProjects }       from "@/components/data/mediaProjectData";
import { businessProjects }    from "@/components/data/businessProjectData";

gsap.registerPlugin(ScrollTrigger);

interface AnyProject {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
}

const TABS = [
  { key: "all",      label: "All" },
  { key: "web",      label: "Web" },
  { key: "digital",  label: "Digital Marketing" },
  { key: "app",      label: "App" },
  { key: "erp",      label: "ERP" },
  { key: "media",    label: "Media Buying" },
  { key: "business", label: "Business Consultancy" },
] as const;

type TabKey = typeof TABS[number]["key"];

const ALL_PROJECTS: { tab: Exclude<TabKey, "all">; basePath: string; data: AnyProject[] }[] = [
  { tab: "web",      basePath: "/services/web",      data: webProjects },
  { tab: "digital",  basePath: "/services/marketing",data: digitalServices },
  { tab: "app",      basePath: "/services/app",      data: appProjects },
  { tab: "erp",      basePath: "/services/erp",      data: erpProjects },
  { tab: "media",    basePath: "/services/media",    data: mediaProjects },
  { tab: "business", basePath: "/services/business", data: businessProjects },
];

/* ── Card ── */
function ProjectCard({ project, basePath }: { project: AnyProject; basePath: string }) {
  return (
    <Link
      href={`${basePath}/${project.id}`}
      className="proj-card group block rounded-3xl overflow-hidden"
      style={{
        /* Mobile: fixed width so 3 cards slide left→right */
        flex: "0 0 75vw",
        maxWidth: "320px",
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 4px 24px rgba(94,76,220,0.06)",
        scrollSnapAlign: "start",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--primary)";
        el.style.boxShadow = "0 16px 48px rgba(94,76,220,0.18)";
        el.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--border-color)";
        el.style.boxShadow = "0 4px 24px rgba(94,76,220,0.06)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="relative h-[175px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(to top,rgba(7,0,44,0.75) 0%,rgba(7,0,44,0.3) 50%,transparent 100%)" }}
        />
        <span
          className="absolute top-4 left-4 badge"
          style={{
            background: "rgba(94,76,220,0.85)",
            borderColor: "rgba(167,139,250,0.4)",
            color: "#f0eeff",
            backdropFilter: "blur(6px)",
          }}
        >
          {project.category}
        </span>
        <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
            View Details
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--primary)" }}
            >
              <ArrowRight size={13} />
            </span>
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-5">
        <h3
          className="text-base font-semibold mb-2 leading-snug line-clamp-1"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>
        <div className="mt-4 h-px w-full" style={{ background: "var(--border-color)" }} />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>View Details</span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
            Explore <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ── */
export default function ProjectsPage() {
  const [active, setActive] = useState<TabKey>("all");

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const paraRef    = useRef<HTMLParagraphElement>(null);
  const tabsRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  const filtered = ALL_PROJECTS.filter((g) => active === "all" || g.tab === active);

  /* Hero animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (titleRef.current) {
        tl.from(titleRef.current.querySelectorAll(".word"), {
          y: 50, opacity: 0, skewY: 4, stagger: 0.08, duration: 0.7,
        });
      }
      tl.from(paraRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(tabsRef.current?.children ?? [], {
          y: 14, opacity: 0, stagger: 0.06, duration: 0.4, ease: "back.out(1.5)",
        }, "-=0.35");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Re-animate on tab change */
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.querySelectorAll(".proj-card"));
    gsap.fromTo(cards,
      { opacity: 0, y: 36, scale: 0.93 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.5, ease: "back.out(1.4)" }
    );
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24"
      style={{ background: "var(--background)" }}
    >
      {/* Blobs */}
      <div className="blob" style={{ width: "600px", height: "600px", background: "rgba(94,76,220,0.08)", top: "-150px", right: "-150px" }} />
      <div className="blob" style={{ width: "400px", height: "400px", background: "rgba(167,139,250,0.06)", bottom: "-100px", left: "-100px" }} />

      <div className="container-xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-5">Our Portfolio</span>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            <span className="word inline-block will-change-transform">Work&nbsp;</span>
            <span className="word inline-block will-change-transform">That&nbsp;</span>
            <span className="word inline-block will-change-transform gradient-text">Speaks&nbsp;</span>
            <span className="word inline-block will-change-transform gradient-text">Itself</span>
          </h1>
          <p
            ref={paraRef}
            className="max-w-2xl mx-auto text-sm md:text-base will-change-transform"
            style={{ color: "var(--muted)" }}
          >
            From web apps to digital campaigns — explore our full portfolio of
            real projects delivered across 6 service categories.
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-2 mb-14">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="btn btn-sm will-change-transform transition-all duration-200"
              style={
                active === tab.key
                  ? { background: "var(--primary)", color: "#fff", border: "none", boxShadow: "0 4px 20px rgba(94,76,220,0.35)" }
                  : { background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border-color)" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div ref={gridRef}>
          {filtered.map(({ tab, basePath, data }) => {
            const shown = data.slice(0, 3); // exactly 3 per section
            return (
              <div key={tab} className="mb-16">

                {/* Section heading */}
                <div className="flex items-center gap-4 mb-6">
                  <h2
                    className="text-lg md:text-xl font-bold whitespace-nowrap"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {TABS.find((t) => t.key === tab)?.label}
                  </h2>
                  <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
                  <Link
                    href={basePath}
                    className="text-xs font-semibold flex items-center gap-1 whitespace-nowrap"
                    style={{ color: "var(--primary)" }}
                  >
                    View All <ArrowRight size={12} />
                  </Link>
                </div>

                {/*
                  MOBILE  (<sm): flex row + overflow-x-auto → swipe left to right
                  DESKTOP (sm+): CSS grid 2-col → lg: 3-col, no scroll
                */}
                <div
                  className="
                    flex gap-4
                    overflow-x-auto
                    sm:grid sm:grid-cols-2 sm:overflow-x-visible
                    lg:grid-cols-3
                  "
                  style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",           /* Firefox */
                    msOverflowStyle: "none",          /* IE */
                    /* left padding so first card isn't flush on mobile */
                    paddingBottom: "4px",
                  }}
                >
                  {shown.map((project) => (
                    <ProjectCard key={project.id} project={project} basePath={basePath} />
                  ))}
                </div>

                {/* Mobile indicator dots */}
                <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
                  {shown.map((_, i) => (
                    <span
                      key={i}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width:  i === 0 ? "20px" : "6px",
                        height: "6px",
                        background: i === 0 ? "var(--primary)" : "var(--border-color)",
                      }}
                    />
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Hide webkit scrollbar */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}