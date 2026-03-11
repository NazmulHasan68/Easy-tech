"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rifah Tasfia",
    role: "Product Consultant",
    company: "CarboBon",
    quote: "Easy Tech-এর সাথে কাজ করা অসাধারণ অভিজ্ঞতা। আমাদের প্রত্যাশার চেয়েও বেশি কিছু দিয়েছে তারা।",
    video: "/client_review/client1.mp4",
    poster: "/logo/icon.webp",
    accent: "#86efac",
  },
  {
    id: 2,
    name: "জাহ্নবী রহমান",
    role: "CEO & Founder",
    company: "Relaxy",
    quote: "Easy Tech আমাদের টিমেরই একজন মনে হতো। তারা আমাদের স্বপ্নটা বুঝেছিল এবং নিখুঁতভাবে বাস্তবে রূপ দিয়েছে।",
    video: "/client_review/client2.mp4",
    poster: "/logo/icon.webp",
    accent: "#93c5fd",
  },
  {
    id: 3,
    name: "ইমরান হাসান",
    role: "CEO & Co Founder",
    company: "Klasio",
    quote: "Easy Tech আমাদের জন্য যে ওয়েবসাইট বানিয়েছে সেটা আমাদের ব্র্যান্ডকে পুরোপুরি ফুটিয়ে তুলেছে।",
    video: "/client_review/client3.mp4",
    poster: "/logo/icon.webp",
    accent: "#c4b5fd",
  },
  {
    id: 4,
    name: "মোশিউর রহমান রাদিফ",
    role: "COO",
    company: "Omtik Technologies",
    quote: "২ বছরেরও বেশি সময় ধরে ১০টির বেশি প্রজেক্টে Easy Tech-এর সাথে কাজ করেছি। সত্যিকারের পার্টনার।",
    video: "/client_review/client4.mp4",
    poster: "/logo/icon.webp",
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
  const cardRef  = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded,  setLoaded]  = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted,   setMuted]   = useState(true);

  /* Lazy load — IntersectionObserver */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLoaded(true); obs.disconnect(); } },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Stop when another card plays */
  useEffect(() => {
    if (activeIndex !== index && playing) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, [activeIndex, index, playing]);

  const togglePlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
      onActivate(null);
    } else {
      onActivate(index);
      try {
        v.currentTime = 0;
        await v.play();
        setPlaying(true);
      } catch { setPlaying(false); }
    }
  }, [playing, index, onActivate]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={togglePlay}
      className="relative flex-shrink-0 rounded-[28px] overflow-hidden cursor-pointer will-change-transform"
      style={{
        width: "clamp(220px, 38vw, 270px)",
        height: "clamp(360px, 62vw, 460px)",
        scrollSnapAlign: "start",
        background: "#0a0a0a",
        boxShadow: playing
          ? `0 0 0 2px ${item.accent}, 0 28px 64px rgba(0,0,0,0.55)`
          : "0 8px 40px rgba(0,0,0,0.3)",
        transform: playing ? "scale(1.025)" : "scale(1)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
      }}
    >
      {/* BG gradient */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${item.accent}33 0%, #07002c 100%)` }}
      />

      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`, opacity: playing ? 1 : 0.4, transition: "opacity 0.4s" }}
      />

      {/* Lazy video */}
      {loaded && (
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: playing ? 1 : 0.5, transition: "opacity 0.5s ease" }}
        />
      )}

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)" }}
      />

      {/* Mute button */}
      {playing && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.55)",
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
      )}

      {/* Center play/pause */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: playing ? 0 : 1, pointerEvents: "none" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.45)",
            border: `1.5px solid ${item.accent}88`,
            backdropFilter: "blur(8px)",
            boxShadow: `0 0 36px ${item.accent}44`,
          }}
        >
          <Play size={22} fill={item.accent} color={item.accent} style={{ marginLeft: "3px" }} />
        </div>
      </div>

      {/* Pause hover overlay */}
      {playing && (
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <Pause size={28} fill="white" color="white" style={{ opacity: 0.7 }} />
        </div>
      )}

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
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
          {item.company}
        </div>

        <p className="text-[12px] leading-relaxed mb-3 line-clamp-2" style={{ color: "rgba(255,255,255,0.72)" }}>
          "{item.quote}"
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
          scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none none", once: true },
        });
      }
      if (rowRef.current) {
        gsap.from(Array.from(rowRef.current.children), {
          opacity: 0, y: 80, scale: 0.88, rotate: 2,
          stagger: 0.1, duration: 0.8, ease: "back.out(1.4)",
          scrollTrigger: { trigger: rowRef.current, start: "top 88%", toggleActions: "play none none none", once: true },
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
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(94,76,220,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />

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
              <span className="word inline-block will-change-transform">Real&nbsp;</span>
              <span className="word inline-block will-change-transform">People,&nbsp;</span>
              <br />
              <span className="word inline-block will-change-transform">Real&nbsp;</span>
              <span
                className="word inline-block will-change-transform"
                style={{ background: "linear-gradient(130deg,#5e4cdc,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Results
              </span>
            </h2>
          </div>

          <p className="text-sm max-w-xs md:text-right" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            Hear directly from our clients — tap any card to watch their story.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={rowRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
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

        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mt-5 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === 0 ? "20px" : "6px",
                height: "6px",
                background: i === 0 ? "var(--primary)" : "var(--border-color)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`.overflow-x-auto::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}