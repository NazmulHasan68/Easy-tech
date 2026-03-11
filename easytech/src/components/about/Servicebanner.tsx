"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {Briefcase, ArrowRight, Globe, Zap, ShieldCheck, TrendingUp, Users, BarChart3, Target, Smartphone, Star, Settings2, Server, DollarSign, LucideIcon } from "lucide-react";

// ── Icon map — add more as needed ──
const ICON_MAP: Record<string, LucideIcon> = {
  Globe, Zap, ShieldCheck, TrendingUp, Users,
  BarChart3, Target, Smartphone, Star,
  Settings2, Server, DollarSign, Briefcase
};

export interface ServiceBannerStat {
  icon: keyof typeof ICON_MAP;
  value: string;
  label: string;
}

export interface ServiceBannerProps {
  service: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  pills: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  stats: ServiceBannerStat[];
  bgImage: string;
}

export default function ServiceBanner({
  service,
  titleTop,
  titleBottom,
  description,
  pills,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
  secondaryLabel = "View Case Studies",
  secondaryHref = "#overview",
  stats,
  bgImage,
}: ServiceBannerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef   = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLHeadingElement>(null);
  const paraRef    = useRef<HTMLParagraphElement>(null);
  const pillsRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(badgeRef.current, { x: -30, opacity: 0, duration: 0.6 })
        .from(h1Ref.current?.querySelectorAll(".word") ?? [], {
          y: 50, opacity: 0, skewY: 3, stagger: 0.07, duration: 0.7,
        }, "-=0.3")
        .from(paraRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(pillsRef.current?.children ?? [], {
          y: 16, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.8)",
        }, "-=0.35")
        .from(ctaRef.current?.children ?? [], {
          y: 16, opacity: 0, stagger: 0.1, duration: 0.5,
        }, "-=0.3")
        .from(statsRef.current?.children ?? [], {
          y: 20, opacity: 0, stagger: 0.1, duration: 0.5,
        }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(7,0,44,0.97) 0%, rgba(7,0,44,0.88) 45%, rgba(94,76,220,0.25) 100%)" }} />
      <div className="blob" style={{ width: "500px", height: "500px", background: "rgba(94,76,220,0.18)", top: "-100px", left: "-100px" }} />
      <div className="blob" style={{ width: "350px", height: "350px", background: "rgba(167,139,250,0.1)", bottom: "-50px", right: "10%" }} />

      <div className="container-xl relative z-10 section-pad w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            ref={badgeRef}
            onClick={() => window.scrollBy({ top: 450, behavior: "smooth" })}
            className="badge cursor-pointer mb-5 will-change-transform mt-16"
            style={{ background: "rgba(94,76,220,0.22)", borderColor: "rgba(94,76,220,0.5)", color: "#c4b5fd" }}
          >
            Services <ArrowRight size={12} /> {service}
          </div>

          {/* Title */}
          <h1 ref={h1Ref} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            <span className="word inline-block will-change-transform text-white">{titleTop}&nbsp;</span>
            <br />
            <span className="word inline-block will-change-transform gradient-text">{titleBottom}</span>
          </h1>

          {/* Description */}
          <p ref={paraRef} className="text-sm md:text-base leading-relaxed mb-7 will-change-transform"
            style={{ color: "rgba(240,238,255,0.62)", fontFamily: "var(--font-body)" }}>
            {description}
          </p>

          {/* Pills */}
          <div ref={pillsRef} className="flex flex-wrap gap-2 mb-8">
            {pills.map((t) => (
              <span key={t} className="tech-pill will-change-transform"
                style={{ background: "rgba(94,76,220,0.15)", borderColor: "rgba(94,76,220,0.35)", color: "#c4b5fd" }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap gap-3 mb-12">
            <a href={ctaHref} className="btn btn-primary will-change-transform">
              {ctaLabel} <ArrowRight size={15} />
            </a>
            <a href={secondaryHref} className="btn will-change-transform"
              style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", padding: "0.72rem 1.6rem" }}>
              {secondaryLabel}
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-8 pt-6"
            style={{ borderTop: "1px solid rgba(94,76,220,0.25)" }}>
            {stats.map(({ icon, value, label }) => {
              const Icon = ICON_MAP[icon];
              return (
                <div key={label} className="will-change-transform">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {Icon && <Icon size={13} style={{ color: "#a78bfa" }} strokeWidth={2} />}
                    <p className="text-xl font-extrabold" style={{ color: "#f0eeff", fontFamily: "var(--font-sans)" }}>
                      {value}
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: "rgba(240,238,255,0.48)" }}>{label}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}