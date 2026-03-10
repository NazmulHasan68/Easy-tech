"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Globe, Smartphone, TrendingUp,
  Settings2, ShoppingCart, Megaphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOP_SERVICES = [
  { id: "web",     label: "Web Development",   desc: "Next.js & React — fast, scalable, pixel-perfect.",       icon: Globe,       color: "#5e4cdc" },
  { id: "app",     label: "App Development",   desc: "Cross-platform iOS & Android apps users love.",          icon: Smartphone,  color: "#0284c7" },
  { id: "digital", label: "Digital Marketing", desc: "SEO, social & paid ads that convert clicks to clients.", icon: TrendingUp,  color: "#16a34a" },
];

const BOTTOM_SERVICES = [
  { id: "erp",   label: "ERP Solutions", desc: "HR, inventory & finance unified in one dashboard.",  icon: Settings2,   color: "#d97706" },
  { id: "pos",   label: "POS Systems",   desc: "Modern retail & restaurant POS — works offline.",    icon: ShoppingCart, color: "#e5484d" },
  { id: "media", label: "Media Buying",  desc: "Meta, Google & TikTok ads for maximum ROI.",         icon: Megaphone,   color: "#7c3aed" },
];

export default function HomeServicesHub() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLSpanElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const paraRef     = useRef<HTMLParagraphElement>(null);
  const centerRef   = useRef<HTMLDivElement>(null);
  const svgRef      = useRef<SVGSVGElement>(null);
  const topRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const botRefs     = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Badge */
      gsap.from(badgeRef.current, {
        x: -28, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: badgeRef.current, start: "top 87%", toggleActions: "play none none reverse" },
      });

      /* Title words */
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll(".word"), {
          opacity: 0, y: 40, skewY: 4, stagger: 0.08, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 86%", toggleActions: "play none none reverse" },
        });
      }

      /* Para */
      gsap.from(paraRef.current, {
        opacity: 0, y: 18, duration: 0.65, delay: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: paraRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });

      /* Center logo pop + pulse */
      gsap.from(centerRef.current, {
        scale: 0, opacity: 0, duration: 0.9, ease: "back.out(2.5)",
        scrollTrigger: { trigger: centerRef.current, start: "top 82%", toggleActions: "play none none reverse" },
      });
      gsap.to(centerRef.current, {
        scale: 1.08, duration: 2, ease: "sine.inOut", yoyo: true, repeat: -1,
      });

      /* SVG lines — marching ants */
      if (svgRef.current) {
        const lines = svgRef.current.querySelectorAll("line");
        gsap.set(lines, { opacity: 0 });
        gsap.to(lines, {
          opacity: 1, stagger: 0.06, duration: 0.5,
          scrollTrigger: { trigger: svgRef.current, start: "top 82%", toggleActions: "play none none reverse" },
        });
        lines.forEach((line, i) => {
          line.style.strokeDasharray = "7 5";
          gsap.to(line, {
            strokeDashoffset: -24,
            duration: 1.2 + i * 0.08,
            ease: "none",
            repeat: -1,
          });
        });
      }

      /* Top cards — drop down from above */
      gsap.from(topRefs.current.filter(Boolean), {
        opacity: 0, y: -55, scale: 0.85, stagger: 0.1, duration: 0.75, ease: "back.out(1.6)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      /* Bottom cards — rise from below */
      gsap.from(botRefs.current.filter(Boolean), {
        opacity: 0, y: 55, scale: 0.85, stagger: 0.1, duration: 0.75, ease: "back.out(1.6)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Hover handlers */
  const onEnter = (el: HTMLDivElement | null, color: string) => {
    if (!el) return;
    gsap.to(el, { y: -8, scale: 1.04, boxShadow: `0 20px 50px ${color}45`, duration: 0.35, ease: "power2.out" });
    gsap.to(el.querySelector(".svc-icon"), { rotate: 12, scale: 1.2, duration: 0.35, ease: "back.out(2)" });
  };
  const onLeave = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, { y: 0, scale: 1, boxShadow: "0 4px 28px rgba(0,0,0,0.35)", duration: 0.5, ease: "elastic.out(1,0.45)" });
    gsap.to(el.querySelector(".svc-icon"), { rotate: 0, scale: 1, duration: 0.4, ease: "elastic.out(1,0.45)" });
  };

  const Card = ({
    svc, refCb,
  }: {
    svc: typeof TOP_SERVICES[0];
    refCb: (el: HTMLDivElement | null) => void;
  }) => {
    const Icon = svc.icon;
    const ref = useRef<HTMLDivElement>(null);
    return (
      <div
        ref={(el) => { (ref as React.MutableRefObject<HTMLDivElement | null>).current = el; refCb(el); }}
        onMouseEnter={() => onEnter(ref.current, svc.color)}
        onMouseLeave={() => onLeave(ref.current)}
        className="relative flex-1 min-w-0 rounded-2xl p-4 md:p-5 cursor-default will-change-transform"
        style={{
          background: "rgba(13,6,58,0.85)",
          border: `1px solid ${svc.color}35`,
          boxShadow: "0 4px 28px rgba(0,0,0,0.35)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          className="svc-icon w-10 h-10 rounded-xl flex items-center justify-center mb-3 will-change-transform"
          style={{ background: `${svc.color}20`, border: `1.5px solid ${svc.color}45` }}
        >
          <Icon size={18} color={svc.color} strokeWidth={2} />
        </div>
        <p className="text-xs md:text-sm font-bold mb-1 leading-snug"
          style={{ color: "#f0eeff", fontFamily: "var(--font-sans)" }}>
          {svc.label}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(240,238,255,0.42)" }}>
          {svc.desc}
        </p>
        <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
          style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }} />
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "#07002c" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(94,76,220,0.1) 1px, transparent 1px), linear-gradient(90deg,rgba(94,76,220,0.1) 1px,transparent 1px)",
          backgroundSize: "52px 52px", opacity: 0.4,
        }} />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(94,76,220,0.18) 0%, transparent 70%)", filter: "blur(70px)" }} />

      <div className="max-w-5xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span ref={badgeRef}
            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 will-change-transform"
            style={{ background: "rgba(94,76,220,0.18)", color: "#a78bfa", border: "1px solid rgba(94,76,220,0.38)" }}>
            Everything You Need
          </span>
          <h2 ref={titleRef}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "#f0eeff", fontFamily: "var(--font-sans)" }}>
            <span className="word inline-block will-change-transform">One&nbsp;</span>
            <span className="word inline-block will-change-transform">Agency.&nbsp;</span>
            <span className="word inline-block will-change-transform italic"
              style={{ background: "linear-gradient(130deg,#7b6de8,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every&nbsp;
            </span>
            <span className="word inline-block will-change-transform italic"
              style={{ background: "linear-gradient(130deg,#7b6de8,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Solution.
            </span>
          </h2>
          <p ref={paraRef}
            className="mt-3 text-sm md:text-base max-w-xl mx-auto will-change-transform"
            style={{ color: "rgba(240,238,255,0.48)" }}>
            From idea to launch — we cover every digital need under one roof.
          </p>
        </div>

        {/* ── Diagram ── */}
        <div className="relative flex flex-col items-center gap-0">

          {/* TOP ROW */}
          <div className="flex gap-3 md:gap-4 w-full">
            {TOP_SERVICES.map((svc, i) => (
              <Card key={svc.id} svc={svc} refCb={(el) => { topRefs.current[i] = el; }} />
            ))}
          </div>

          {/* SVG lines + Center logo */}
          <div className="relative w-full flex items-center justify-center" style={{ height: "120px" }}>

            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Top cards → center (lines going DOWN to center) */}
              <line x1="17%" y1="0"   x2="50%" y2="60" stroke="#5e4cdc" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="50%" y1="0"   x2="50%" y2="60" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="83%" y1="0"   x2="50%" y2="60" stroke="#16a34a" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Center → bottom cards (lines going DOWN from center) */}
              <line x1="50%" y1="60"  x2="17%" y2="120" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="50%" y1="60"  x2="50%" y2="120" stroke="#e5484d" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="50%" y1="60"  x2="83%" y2="120" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.6" />
            </svg>

            {/* Center logo */}
            <div
              ref={centerRef}
              className="relative z-10 will-change-transform flex items-center justify-center rounded-full"
              style={{
                width: "72px", height: "72px",
                background: "linear-gradient(135deg,#1a0f5c 0%,#0d063a 100%)",
                border: "2px solid rgba(94,76,220,0.75)",
                boxShadow: "0 0 36px rgba(94,76,220,0.6), 0 0 80px rgba(94,76,220,0.2)",
              }}
            >
              <Image src="/logo/icon.png" alt="Easy Tech" width={44} height={44} className="object-contain" />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="flex gap-3 md:gap-4 w-full">
            {BOTTOM_SERVICES.map((svc, i) => (
              <Card key={svc.id} svc={svc} refCb={(el) => { botRefs.current[i] = el; }} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}