"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  TrendingUp,
  Globe,
  Smartphone,
  Settings2,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    title: "Grow Your Brand Online",
    description:
      "Data-driven campaigns, SEO, social media, and paid ads that turn clicks into loyal customers. We put your brand in front of the right audience at the right moment.",
    scope: "SEO · Social · Ads",
    duration: "Ongoing",
    image: "/home/services/digital.jpg",
    bg: "#f5f4ff",
    accent: "#5e4cdc",
    icon: TrendingUp,
  },
  {
    id: "web-development",
    label: "Web Development",
    title: "Websites That Convert",
    description:
      "From blazing-fast landing pages to complex web apps — we design and build with Next.js, React, and Tailwind. Pixel-perfect, accessible, and built to scale.",
    scope: "Landing Page · Web App",
    duration: "2–8 Weeks",
    image: "/home/services/web.jpg",
    bg: "#fff0f3",
    accent: "#e5484d",
    icon: Globe,
  },
  {
    id: "app-development",
    label: "App Development",
    title: "Apps Users Love",
    description:
      "Cross-platform mobile apps for iOS & Android using React Native. Smooth UX, real-time features, and App Store-ready builds that delight users from day one.",
    scope: "iOS · Android · Cross-platform",
    duration: "4–12 Weeks",
    image: "/home/services/app.jpg",
    bg: "#f0fdf4",
    accent: "#16a34a",
    icon: Smartphone,
  },
  {
    id: "erp",
    label: "ERP Solutions",
    title: "Run Your Business Smarter",
    description:
      "Custom ERP systems that unify HR, inventory, accounting, and operations into one powerful dashboard. Reduce manual work with real-time data.",
    scope: "HR · Inventory · Finance",
    duration: "8–16 Weeks",
    image: "/home/services/erp.jpg",
    bg: "#fffbeb",
    accent: "#d97706",
    icon: Settings2,
  },
  {
    id: "pos",
    label: "POS Systems",
    title: "Point of Sale, Reimagined",
    description:
      "Modern POS for retail and restaurants — fast checkout, inventory sync, sales reports, and multi-branch support. Works offline too.",
    scope: "Retail · Restaurant · Multi-branch",
    duration: "2–6 Weeks",
    image: "/home/services/pos.jpg",
    bg: "#f0f9ff",
    accent: "#0284c7",
    icon: ShoppingCart,
  },
];

/* Each card is 500px tall, stacked with top offset */
const CARD_HEIGHT = 500;
const STICKY_TOP = 80; // px from top when pinned

export default function HomeServiceCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconRowRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Icon row: small → full on scroll in ── */
      if (iconRowRef.current) {
        gsap.fromTo(
          iconRowRef.current,
          { scale: 0.55, opacity: 0, y: 60 },
          {
            scale: 1, opacity: 1, y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 88%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      }

      /* ── Icon pills stagger ── */
      iconRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.5, opacity: 0, y: 24 },
          {
            scale: 1, opacity: 1, y: 0,
            ease: "back.out(2.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${82 - i * 4}%`,
              end: `top ${55 - i * 3}%`,
              scrub: 0.9,
            },
          }
        );
      });

      /* ── Stacked sticky cards ── */
      cardRefs.current.forEach((card, i) => {
        const isLast = i === SERVICES.length - 1;

        /* Pin each card */
        ScrollTrigger.create({
          trigger: card,
          start: `top ${STICKY_TOP + i * 12}px`,
          endTrigger: sectionRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        /* Scale down earlier cards as scroll progresses */
        if (!isLast) {
          const scaleDown = 1 - (SERVICES.length - 1 - i) * 0.04;
          gsap.to(card, {
            scale: scaleDown,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: cardRefs.current[i + 1],
              start: "top bottom",
              end: `top ${STICKY_TOP + (i + 1) * 12}px`,
              scrub: true,
            },
          });
        }

        /* Slide up entry for each card */
        gsap.fromTo(
          card,
          { y: i === 0 ? 0 : 80, opacity: i === 0 ? 1 : 0 },
          {
            y: 0, opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Mouse tilt */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(card, {
      rotateX: -dy * 3, rotateY: dx * 3,
      duration: 0.5, ease: "power2.out",
      transformPerspective: 1200,
    });
    const img = card.querySelector(".svc-img") as HTMLElement;
    if (img) gsap.to(img, { x: dx * 12, y: dy * 8, duration: 0.5, ease: "power2.out" });
  };

  const handleMouseLeave = (i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.9, ease: "elastic.out(1, 0.45)" });
    const img = card.querySelector(".svc-img") as HTMLElement;
    if (img) gsap.to(img, { x: 0, y: 0, duration: 0.7, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--background)",
        /* total scroll height = cards * card height */
        paddingBottom: `${SERVICES.length * CARD_HEIGHT * 0.55}px`,
      }}
    >
      {/* ── Heading ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-8 text-center">
        <span
          className="text-xs font-bold uppercase tracking-[0.25em] mb-3 block"
          style={{ color: "var(--primary)" }}
        >
          What We Build
        </span>
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          Our Services
        </h2>
      </div>

      {/* ── Icon pills — small at first, grow on scroll ── */}
      <div
        ref={iconRowRef}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 will-change-transform"
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                ref={(el) => { if (el) iconRefs.current[i] = el; }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border will-change-transform"
                style={{
                  background: `${svc.accent}10`,
                  borderColor: `${svc.accent}30`,
                  color: svc.accent,
                  transformOrigin: "bottom center",
                }}
              >
                <Icon size={15} strokeWidth={2.2} />
                <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                  {svc.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stacked cards ── */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {SERVICES.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              ref={(el) => { if (el) cardRefs.current[i] = el; }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="will-change-transform cursor-default rounded-[28px] overflow-hidden"
              style={{
                background: svc.bg,
                border: `1.5px solid ${svc.accent}22`,
                boxShadow: `0 20px 80px ${svc.accent}18`,
                height: `${CARD_HEIGHT}px`,
                /* slight top offset so stacked cards peek behind */
                marginBottom: i < SERVICES.length - 1 ? "0px" : "0",
              }}
            >
              <div className="flex flex-col md:flex-row h-full">

                {/* LEFT — collapsed label row (visible when card is under another) */}
                <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8 gap-5">

                  {/* Icon + label */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${svc.accent}18`,
                        border: `1.5px solid ${svc.accent}35`,
                      }}
                    >
                      <Icon size={18} color={svc.accent} strokeWidth={2} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: svc.accent }}
                    >
                      {svc.label}
                    </span>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl font-extrabold leading-tight"
                    style={{ color: "#1a1a1a", fontFamily: "var(--font-sans)" }}
                  >
                    {svc.title}
                  </h3>

                  <p className="text-base leading-relaxed max-w-sm" style={{ color: "#555" }}>
                    {svc.description}
                  </p>

                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#aaa" }}>
                        Scope
                      </p>
                      <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>
                        {svc.scope}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#aaa" }}>
                        Timeline
                      </p>
                      <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>
                        {svc.duration}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/services/${svc.id}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold w-fit"
                    style={{ color: svc.accent }}
                  >
                    <span
                      className="border-b-2 pb-0.5 group-hover:pr-2 transition-all"
                      style={{ borderColor: svc.accent }}
                    >
                      View Details
                    </span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* RIGHT — image */}
                <div
                  className="md:w-1/2 relative overflow-hidden"
                  style={{
                    background: `${svc.accent}15`,
                    borderLeft: `1.5px solid ${svc.accent}18`,
                  }}
                >
                  <div className="svc-img absolute inset-0">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Placeholder if no image */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                      style={{ background: `${svc.accent}0c` }}
                    >
                      <div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center"
                        style={{
                          background: `${svc.accent}20`,
                          border: `2px solid ${svc.accent}35`,
                        }}
                      >
                        <Icon size={36} color={svc.accent} strokeWidth={1.5} />
                      </div>
                      <p
                        className="text-xs font-medium px-4 text-center"
                        style={{ color: svc.accent }}
                      >
                        Add image → {svc.image}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}