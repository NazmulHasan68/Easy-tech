"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Globe, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function ServiceWebbanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef   = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLHeadingElement>(null);
  const paraRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const pillsRef   = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, { x: -30, opacity: 0, duration: 0.6 })
        .from(h1Ref.current?.querySelectorAll(".word") ?? [], {
          y: 50, opacity: 0, skewY: 3, stagger: 0.07, duration: 0.7,
        }, "-=0.3")
        .from(paraRef.current,  { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
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
        backgroundImage: `url('/services/web/web.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(7,0,44,0.97) 0%, rgba(7,0,44,0.88) 45%, rgba(94,76,220,0.25) 100%)",
        }}
      />

      {/* Glow blobs */}
      <div
        className="blob"
        style={{
          width: "500px", height: "500px",
          background: "rgba(94,76,220,0.18)",
          top: "-100px", left: "-100px",
        }}
      />
      <div
        className="blob"
        style={{
          width: "350px", height: "350px",
          background: "rgba(167,139,250,0.1)",
          bottom: "-50px", right: "10%",
        }}
      />

      {/* Content */}
      <div className="container-xl relative z-10 section-pad w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            ref={badgeRef}
            onClick={() => window.scrollBy({ top: 450, behavior: "smooth" })}
            className="badge cursor-pointer mb-5 will-change-transform"
            style={{
              background: "rgba(94,76,220,0.22)",
              borderColor: "rgba(94,76,220,0.5)",
              color: "#c4b5fd",
            }}
          >
            Services <ArrowRight size={12} /> Web Application
          </div>

          {/* Title */}
          <h1
            ref={h1Ref}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
          >
            <span className="word inline-block will-change-transform text-white">
              Modern&nbsp;
            </span>
            <br />
            <span className="word inline-block will-change-transform gradient-text">
              Web Development
            </span>
          </h1>

          {/* Description */}
          <p
            ref={paraRef}
            className="text-sm md:text-base leading-relaxed mb-7 will-change-transform"
            style={{ color: "rgba(240,238,255,0.62)", fontFamily: "var(--font-body)" }}
          >
            We build high-performance, scalable, and secure web applications
            tailored to your business needs. From modern UI design to powerful
            backend systems, we deliver solutions that help your business grow
            online.
          </p>

          {/* Tech pills */}
          <div ref={pillsRef} className="flex flex-wrap gap-2 mb-8">
            {["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"].map((t) => (
              <span
                key={t}
                className="tech-pill will-change-transform"
                style={{
                  background: "rgba(94,76,220,0.15)",
                  borderColor: "rgba(94,76,220,0.35)",
                  color: "#c4b5fd",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-3 mb-12">
            <a href="/contact" className="btn btn-primary will-change-transform">
              Start Your Project <ArrowRight size={15} />
            </a>
            <a
              href="#overview"
              className="btn will-change-transform"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "white",
                padding: "0.72rem 1.6rem",
              }}
            >
              View Case Studies
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="flex flex-wrap gap-8 pt-6"
            style={{ borderTop: "1px solid rgba(94,76,220,0.25)" }}
          >
            {[
              { icon: Globe,       value: "48+",   label: "Web Projects" },
              { icon: Zap,         value: "2×",    label: "Faster Load Time" },
              { icon: ShieldCheck, value: "99.9%", label: "Uptime SLA" },
              { icon: TrendingUp,  value: "3×",    label: "Avg. Conversion Lift" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="will-change-transform">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon size={13} style={{ color: "#a78bfa" }} strokeWidth={2} />
                  <p
                    className="text-xl font-extrabold"
                    style={{ color: "#f0eeff", fontFamily: "var(--font-sans)" }}
                  >
                    {value}
                  </p>
                </div>
                <p className="text-xs" style={{ color: "rgba(240,238,255,0.48)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}