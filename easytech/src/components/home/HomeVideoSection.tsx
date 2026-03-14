"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rifah Tasfia",
    role: "Product Consultant",
    company: "CarboBon",
    quote: "Easy Tech-এর সাথে কাজ করা অসাধারণ অভিজ্ঞতা। আমাদের প্রত্যাশার চেয়েও বেশি কিছু দিয়েছে তারা।",
    video: "/client_review/client1.mp4",
    accent: "#86efac",
  },
  {
    id: 2,
    name: "জাহ্নবী রহমান",
    role: "CEO & Founder",
    company: "Relaxy",
    quote: "Easy Tech আমাদের টিমেরই একজন মনে হতো। তারা আমাদের স্বপ্নটা বুঝেছিল এবং নিখুঁতভাবে বাস্তবে রূপ দিয়েছে।",
    video: "/client_review/client2.mp4",
    accent: "#93c5fd",
  },
  {
    id: 3,
    name: "ইমরান হাসান",
    role: "CEO & Co Founder",
    company: "Klasio",
    quote: "Easy Tech আমাদের জন্য যে ওয়েবসাইট বানিয়েছে সেটা আমাদের ব্র্যান্ডকে পুরোপুরি ফুটিয়ে তুলেছে।",
    video: "/client_review/client3.mp4",
    accent: "#c4b5fd",
  },
  {
    id: 4,
    name: "মোশিউর রহমান রাদিফ",
    role: "COO",
    company: "Omtik Technologies",
    quote: "২ বছরেরও বেশি সময় ধরে ১০টির বেশি প্রজেক্টে Easy Tech-এর সাথে কাজ করেছি। সত্যিকারের পার্টনার।",
    video: "/client_review/client4.mp4",
    accent: "#fda4af",
  },
];

/* ── Video Card ── */
function VideoCard({
  item,
  index,
  activeIndex,
  onActivate,
}: {
  item: (typeof TESTIMONIALS)[0];
  index: number;
  activeIndex: number | null;
  onActivate: (i: number | null) => void;
}) {
  const cardRef   = useRef<HTMLDivElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  /* Autoplay muted as soon as card enters viewport */
  useEffect(() => {
    const el = cardRef.current;
    const v  = videoRef.current;
    if (!el || !v) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.muted = true;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* When this card becomes active (hovered) → unmute */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (activeIndex === index) {
      v.muted = false;
      setMuted(false);
      v.play().catch(() => {});
    } else {
      v.muted = true;
      setMuted(true);
    }
  }, [activeIndex, index]);

  const handleMouseEnter = useCallback(() => {
    onActivate(index);
  }, [index, onActivate]);

  const handleMouseLeave = useCallback(() => {
    onActivate(null);
  }, [onActivate]);

  /* Touch tap → toggle active (unmute/mute) */
  const handleTap = useCallback(() => {
    onActivate(activeIndex === index ? null : index);
  }, [activeIndex, index, onActivate]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const isActive = activeIndex === index;

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      className="relative flex-shrink-0 rounded-[28px] overflow-hidden cursor-pointer will-change-transform select-none"
      style={{
        width: "clamp(210px, 36vw, 260px)",
        height: "clamp(360px, 60vw, 450px)",
        scrollSnapAlign: "start",
        boxShadow: isActive
          ? `0 0 0 2.5px ${item.accent}, 0 28px 64px rgba(0,0,0,0.55)`
          : "0 8px 40px rgba(0,0,0,0.28)",
        transform: isActive ? "scale(1.03)" : "scale(1)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
      }}
    >
      {/* Dark base behind video */}
      <div className="absolute inset-0 bg-black" />

      {/* Video — always loaded, autoplays muted */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        playsInline
        loop
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
          opacity: isActive ? 1 : 0.35,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
        }}
      />

      {/* Mute toggle — always visible */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(0,0,0,0.5)",
          border: `1px solid ${item.accent}55`,
          backdropFilter: "blur(8px)",
        }}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted
          ? <VolumeX size={13} color={item.accent} />
          : <Volume2 size={13} color={item.accent} />
        }
      </button>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
          style={{
            background: `${item.accent}18`,
            border: `1px solid ${item.accent}44`,
            color: item.accent,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.accent }} />
          {item.company}
        </div>

        <p className="text-[12px] leading-relaxed mb-3 line-clamp-2" style={{ color: "rgba(255,255,255,0.72)" }}>
          &ldquo;{item.quote}&rdquo;
        </p>

        <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
        <p className="text-[11px] mt-0.5" style={{ color: item.accent, opacity: 0.85 }}>
          {item.role}
        </p>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function HomeVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const rowRef     = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll(".word"), {
          opacity: 0, y: 50, skewY: 5, stagger: 0.07, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%", once: true },
        });
      }
      if (rowRef.current) {
        gsap.from(Array.from(rowRef.current.children), {
          opacity: 0, y: 80, scale: 0.88, rotate: 2,
          stagger: 0.1, duration: 0.8, ease: "back.out(1.4)",
          scrollTrigger: { trigger: rowRef.current, start: "top 88%", once: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{ background: "var(--background)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(94,76,220,0.1) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-4"
              style={{ background: "var(--surface-2)", color: "var(--primary)", border: "1px solid var(--border-color)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Client Stories
            </span>

            <h2
              ref={titleRef}
              className="text-3xl md:text-5xl font-extrabold leading-[1.1]"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              <span className="word inline-block will-change-transform">Client&nbsp;</span>
              <span className="word inline-block will-change-transform">Success,&nbsp;</span>
              <br />
              <span className="word inline-block will-change-transform">Story&nbsp;</span>
            </h2>
          </div>
        </div>

        {/* Cards row */}
        <div
          ref={rowRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          }}
        >
          {TESTIMONIALS.map((item, i) => (
            <VideoCard
              key={item.id}
              item={item}
              index={i}
              activeIndex={activeIndex}
              onActivate={setActiveIndex}
            />
          ))}
        </div>

        {/* Mobile indicator dots */}
        <div className="flex justify-center gap-2 mt-5 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? "20px" : "6px",
                height: "6px",
                background: activeIndex === i ? "var(--primary)" : "var(--border-color)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`.overflow-x-auto::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}