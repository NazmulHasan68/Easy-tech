"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { webProjects } from "@/components/data/webProjectData";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */
interface WebProject {
  id: string;
  name: string;
  image: string;
  category: string;
  startDate?: string;
  endDate?: string;
  status: string;
  website: string;
  description: string;
  technologies: string[];
  facilities: string[];
}

interface InfoItemProps {
  label: string;
  value: string | number;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="space-y-0.5">
      <p
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </p>
      <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
        {value}
      </p>
    </div>
  );
}

export default function ServiceWebDetails() {
  const params  = useParams();
  const id      = params?.id as string;
  const project = webProjects.find((p) => p.id === id) as WebProject | undefined;

  const sectionRef    = useRef<HTMLDivElement>(null);
  const heroTextRef   = useRef<HTMLDivElement>(null);
  const overviewRef   = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLUListElement>(null);
  const techRef       = useRef<HTMLDivElement>(null);
  const sidebarRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {

      /* Hero text */
      gsap.from(heroTextRef.current?.children ?? [], {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power3.out",
      });

      /* Overview */
      gsap.from(overviewRef.current, {
        y: 30, opacity: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /* Facilities */
      if (facilitiesRef.current) {
        gsap.from(Array.from(facilitiesRef.current.children), {
          x: -20, opacity: 0, stagger: 0.05, duration: 0.5, ease: "power2.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* Tech pills */
      if (techRef.current) {
        gsap.from(Array.from(techRef.current.children), {
          scale: 0.8, opacity: 0, stagger: 0.05, duration: 0.45, ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* Sidebar */
      gsap.from(sidebarRef.current, {
        x: 30, opacity: 0, duration: 0.75, ease: "power3.out",
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef);
    return () => ctx.revert();
  }, [project]);

  /* ── Not found ── */
  if (!project) {
    return (
      <div
        className="h-screen flex flex-col items-center justify-center gap-4"
        style={{ background: "var(--background)" }}
      >
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          Project not found
        </p>
        <Link href="/services/web" className="btn btn-primary">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section ref={sectionRef} style={{ background: "var(--background)" }}>

      {/* ══════════════ HERO ══════════════ */}
      <div className="relative h-[70vh] mt-20 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(7,0,44,0.95) 0%, rgba(7,0,44,0.75) 50%, rgba(94,76,220,0.2) 100%)",
          }}
        />

        {/* Glow blob */}
        <div
          className="blob"
          style={{
            width: "400px", height: "400px",
            background: "rgba(94,76,220,0.2)",
            bottom: "-80px", left: "-60px",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container-xl text-white">
            <div ref={heroTextRef} className="max-w-3xl space-y-4">

              {/* Back */}
              <Link
                href="/services/web"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "rgba(196,181,253,0.8)" }}
              >
                <ArrowLeft size={13} /> Back to Projects
              </Link>

              {/* Category */}
              <div>
                <span
                  className="badge"
                  style={{
                    background: "rgba(94,76,220,0.3)",
                    borderColor: "rgba(167,139,250,0.5)",
                    color: "#c4b5fd",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.name}
              </h1>

              {/* Description */}
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ color: "rgba(240,238,255,0.7)" }}
              >
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="container-xl py-20">
        <div className="grid lg:grid-cols-3 gap-14">

          {/* ── LEFT ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <div ref={overviewRef} className="will-change-transform">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                Project <span className="gradient-text">Overview</span>
              </h2>
              <div
                className="h-1 w-14 rounded-full mb-5"
                style={{ background: "linear-gradient(90deg, var(--primary), #a78bfa)" }}
              />
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{ color: "var(--muted)" }}
              >
                {project.description}
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                Key Features &amp; Facilities
              </h3>
              <div
                className="h-1 w-14 rounded-full mb-5"
                style={{ background: "linear-gradient(90deg, var(--primary), #a78bfa)" }}
              />

              <ul ref={facilitiesRef} className="grid sm:grid-cols-2 gap-3">
                {project.facilities.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl will-change-transform"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                Technologies Used
              </h3>
              <div
                className="h-1 w-14 rounded-full mb-5"
                style={{ background: "linear-gradient(90deg, var(--primary), #a78bfa)" }}
              />

              <div ref={techRef} className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span key={i} className="tech-pill will-change-transform">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div
            ref={sidebarRef}
            className="rounded-3xl p-6 h-fit space-y-6 will-change-transform"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 8px 40px rgba(94,76,220,0.1)",
            }}
          >
            <h4
              className="text-lg font-bold"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              Project Information
            </h4>

            <div className="h-px w-full" style={{ background: "var(--border-color)" }} />

            <div className="space-y-5">
              <InfoItem label="Category" value={project.category} />
              <InfoItem label="Status"   value={project.status} />
              {project.startDate && (
                <InfoItem
                  label="Timeline"
                  value={
                    project.endDate
                      ? `${project.startDate} – ${project.endDate}`
                      : project.startDate
                  }
                />
              )}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: project.status === "Live" ? "#16a34a" : "#d97706",
                }}
              />
              <span
                className="text-xs font-semibold"
                style={{
                  color: project.status === "Live" ? "#16a34a" : "#d97706",
                }}
              >
                {project.status}
              </span>
            </div>

            <div className="h-px w-full" style={{ background: "var(--border-color)" }} />

            {/* Live website */}
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full justify-center"
            >
              Visit Live Website <ExternalLink size={14} />
            </a>

            {/* CTA */}
            <Link href="/contact" className="btn btn-primary w-full justify-center">
              Get a Similar Project
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}