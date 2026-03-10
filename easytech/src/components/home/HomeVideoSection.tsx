"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rifah Tasfia",
    role: "Product Consultant",
    company: "CarboBon",
    quote: "Easy Tech-এর সাথে কাজ করা অসাধারণ অভিজ্ঞতা। আমাদের প্রত্যাশার চেয়েও বেশি কিছু দিয়েছে তারা...",
    video: "/client_review/client1.mp4",
    poster: "/logo/icon.png",
    bg: "#b5d5b0",
  },
  {
    id: 2,
    name: "জাহ্নবী রহমান",
    role: "CEO & Founder",
    company: "Relaxy",
    quote: "Easy Tech আমাদের টিমেরই একজন মনে হতো। তারা আমাদের স্বপ্নটা বুঝেছিল এবং নিখুঁতভাবে বাস্তবে রূপ দিয়েছে...",
    video: "/client_review/client2.mp4",
    poster: "/logo/icon.png",
    bg: "#c8dde8",
  },
  {
    id: 3,
    name: "ইমরান হাসান",
    role: "CEO & Co Founder",
    company: "Klasio",
    quote: "Easy Tech আমাদের জন্য যে ওয়েবসাইট বানিয়েছে সেটা আমাদের ব্র্যান্ডকে পুরোপুরি ফুটিয়ে তুলেছে...",
    video: "/client_review/client3.mp4",
    poster: "/logo/icon.png",
    bg: "#c9b8e8",
  },
  {
    id: 4,
    name: "মোশিউর রহমান রাদিফ",
    role: "COO",
    company: "Omtik Technologies",
    quote: "২ বছরেরও বেশি সময় ধরে ১০টির বেশি প্রজেক্টে Easy Tech-এর সাথে কাজ করেছি। এরা সত্যিকারের পার্টনার...",
    video: "/client_review/client4.mp4",
    poster: "/logo/icon.png",
    bg: "#b8d4e8",
  },
];

function VideoCard({ item, index }: { item: typeof TESTIMONIALS[0]; index: number }) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = async () => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);

    /* Fade out overlay */
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });

    try {
      video.currentTime = 0;
      await video.play();
    } catch {
      /* Autoplay blocked — show overlay again */
      setPlaying(false);
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });
  };

  /* Card hover lift */
  const handleCardEnter = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handleCardLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      className="relative flex-shrink-0 rounded-[20px] overflow-hidden cursor-pointer will-change-transform"
      style={{
        width: "260px",
        height: "400px",
        background: item.bg,
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster}
        muted
        playsInline
        loop
        preload="metadata"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Poster fallback (shown when no video) */}
      {!item.poster && (
        <div
          className="absolute inset-0 flex items-center justify-center text-8xl"
          style={{ background: item.bg }}
        >
          👤
        </div>
      )}

      {/* Gradient overlay — bottom info */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Play button overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!playing && (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.25)",
              border: "1.5px solid rgba(255,255,255,0.5)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Play size={18} fill="white" color="white" />
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Company badge */}
        <div className="flex items-center gap-1.5 mb-2">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: "rgba(255,255,255,0.25)", color: "white" }}
          >
            {item.company[0]}
          </div>
          <span className="text-xs font-semibold text-white opacity-90">
            {item.company}
          </span>
        </div>

        {/* Quote */}
        <p className="text-xs text-white leading-relaxed mb-3 opacity-90 line-clamp-2">
          {item.quote}
        </p>

        {/* Name & role */}
        <p className="text-sm font-bold text-white">{item.name}</p>
        <p className="text-xs text-white opacity-65">{item.role} @ {item.company}</p>
      </div>
    </div>
  );
}

export default function HomeVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef   = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Badge */
      gsap.from(badgeRef.current, {
        x: -30, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: badgeRef.current, start: "top 96%", toggleActions: "play none none reverse" },
      });

      /* Title words */
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0, y: 40, skewY: 4, stagger: 0.07, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 86%", toggleActions: "play none none reverse" },
        });
      }

      /* Cards stagger in */
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.from(cards, {
          opacity: 0, y: 60, scale: 0.92,
          stagger: 0.12, duration: 0.7, ease: "back.out(1.4)",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none reverse" },
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
      {/* Glows */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(94,76,220,0.07)", filter: "blur(100px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12">
          <span
            ref={badgeRef}
            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 will-change-transform"
            style={{
              background: "var(--surface-2)",
              color: "var(--primary)",
              border: "1px solid var(--border-color)",
            }}
          >
            Client Stories
          </span>

          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            <span className="word inline-block will-change-transform">Success&nbsp;</span>
            <span className="word inline-block will-change-transform italic">Stories&nbsp;</span>
            <br />
            <span className="word inline-block will-change-transform">That&nbsp;</span>
            <span
              className="word inline-block will-change-transform italic"
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Inspire Us
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {TESTIMONIALS.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}