"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingCart, Globe, Building2, Briefcase,
  Shirt, Leaf, Sofa, UtensilsCrossed, Heart, Stethoscope,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE = [
  { id: "retail",     label: "Retail",          icon: ShoppingCart,    color: "#5e4cdc", bg: "#f5f4ff" },
  { id: "ecommerce",  label: "e-Commerce",       icon: Globe,           color: "#0284c7", bg: "#f0f9ff" },
  { id: "realestate", label: "Real Estate",      icon: Building2,       color: "#d97706", bg: "#fffbeb" },
  { id: "b2b",        label: "B2B / B2C / D2C",  icon: Briefcase,       color: "#7c3aed", bg: "#faf5ff" },
  { id: "clothing",   label: "Clothing",          icon: Shirt,           color: "#e5484d", bg: "#fff0f3" },
  { id: "organic",    label: "Organic",           icon: Leaf,            color: "#16a34a", bg: "#f0fdf4" },
  { id: "interior",   label: "Interior",          icon: Sofa,            color: "#b45309", bg: "#fefce8" },
  { id: "restaurant", label: "Restaurant",        icon: UtensilsCrossed, color: "#dc2626", bg: "#fff1f2" },
  { id: "Non_profit_oraganisation", label: "Non Profit Organisation",        icon: Heart,           color: "#db2777", bg: "#fdf2f8" },
  { id: "hospital",   label: "Hospital",          icon: Stethoscope,     color: "#0891b2", bg: "#ecfeff" },
];

const ROW = [...EXPERTISE, ...EXPERTISE, ...EXPERTISE];

export default function HomeExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef     = useRef<HTMLDivElement>(null);
  const tween      = useRef<gsap.core.Tween | null>(null);
  const badgeRef   = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const paraRef    = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Badge — slide from left (same as Owner label) ── */
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* ── H2 — word by word with skewY (same as Owner blockquote) ── */
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0,
          y: 40,
          skewY: 4,
          stagger: 0.07,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* ── Para — fade up (same as Owner Bangla quote) ── */
      if (paraRef.current) {
        gsap.from(paraRef.current, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* ── Marquee ── */
      if (!rowRef.current) return;
      const w = rowRef.current.scrollWidth / 3;
      tween.current = gsap.to(rowRef.current, {
        x: -w,
        duration: 120,
        ease: "none",
        repeat: -1,
        modifiers: { x: (x) => `${parseFloat(x) % w}px` },
      });

      const el = rowRef.current;
      el.addEventListener("mouseenter", () => tween.current?.pause());
      el.addEventListener("mouseleave", () => tween.current?.resume());

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20"
      style={{ background: "var(--background)" }}
    >
      <div className="text-center mb-10 px-6">

        <span
          ref={badgeRef}
          className="text-xs font-bold uppercase tracking-[0.28em] block mb-3 will-change-transform"
          style={{ color: "var(--primary)" }}
        >
          Industries We've Worked With
        </span>

        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-extrabold"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          <span className="word inline-block will-change-transform">10+&nbsp;</span>
          <span className="word inline-block will-change-transform">Industries.&nbsp;</span>
          <span
            className="word inline-block will-change-transform"
            style={{
              background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real&nbsp;
          </span>
          <span
            className="word inline-block will-change-transform"
            style={{
              background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Results.
          </span>
        </h2>

        <p
          ref={paraRef}
          className="mt-3 text-sm md:text-base max-w-lg mx-auto will-change-transform"
          style={{ color: "var(--muted)" }}
        >
          আমরা এখন এই সেক্টরগুলোতে কাজ করছি — এবং প্রতিটি ইন্ডাস্ট্রিতে ডিজিটাল সাফল্য গড়ে তুলছি।
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

        <div
          ref={rowRef}
          className="flex will-change-transform py-2"
          style={{ width: "max-content" }}
        >
          {ROW.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${i}`}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border mx-2 select-none group cursor-default"
                style={{
                  background: item.bg,
                  borderColor: `${item.color}22`,
                  boxShadow: `0 2px 12px ${item.color}0d`,
                  minWidth: "180px",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}28` }}
                >
                  <Icon size={15} color={item.color} strokeWidth={2} />
                </div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#1a1a1a", fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}