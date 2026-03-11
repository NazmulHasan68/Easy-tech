"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCircle } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const features = [
  "SEO & Search Ranking Optimization",
  "Social Media Marketing & Branding",
  "Google & Facebook Paid Ads",
  "Content Strategy & Lead Generation",
];

export default function ServiceDigitalIntro() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const labelRef    = useRef<HTMLHeadingElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const para1Ref    = useRef<HTMLParagraphElement>(null);
  const para2Ref    = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Image scale in */
      gsap.from(imgRef.current, {
        scale: 0.88, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 84%", toggleActions: "play none none reverse" },
      });

      /* Badge */
      gsap.from(badgeRef.current, {
        x: -28, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: badgeRef.current, start: "top 87%", toggleActions: "play none none reverse" },
      });

      /* Label */
      gsap.from(labelRef.current, {
        x: -24, opacity: 0, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: labelRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });

      /* Title words */
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll(".word"), {
          opacity: 0, y: 40, skewY: 4, stagger: 0.08, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 86%", toggleActions: "play none none reverse" },
        });
      }

      /* Paragraphs */
      gsap.from([para1Ref.current, para2Ref.current], {
        opacity: 0, y: 20, stagger: 0.15, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: para1Ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      });

      /* Features stagger */
      if (featuresRef.current) {
        gsap.from(Array.from(featuresRef.current.children), {
          opacity: 0, x: -24, stagger: 0.1, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: featuresRef.current, start: "top 88%", toggleActions: "play none none reverse" },
        });
      }

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Glow blobs */}
      <div className="blob" style={{ width: "420px", height: "420px", background: "rgba(94,76,220,0.08)", top: "-80px", left: "-80px" }} />
      <div className="blob" style={{ width: "360px", height: "360px", background: "rgba(167,139,250,0.06)", bottom: "-60px", right: "-60px" }} />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── IMAGE ── */}
          <div ref={imgRef} className="relative will-change-transform">

            {/* Halo glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(94,76,220,0.18) 0%, rgba(167,139,250,0.1) 100%)",
                filter: "blur(28px)",
                transform: "scale(1.06)",
              }}
            />

            <Image
             width={100}
             height={100}
              src="/services/digital/digital_marketing_page.jpg"
              alt="Digital Marketing by Easy Tech Solutions"
              className="w-full object-cover rounded-3xl"
              style={{
                height: "clamp(260px, 40vw, 420px)",
                border: "1.5px solid rgba(94,76,220,0.18)",
                boxShadow: "0 32px 80px rgba(94,76,220,0.16)",
              }}
            />

            {/* Experience badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-5 right-5 rounded-2xl px-5 py-4 will-change-transform"
              style={{
                background: "var(--background)",
                border: "1.5px solid rgba(94,76,220,0.22)",
                boxShadow: "0 8px 32px rgba(94,76,220,0.16)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                5+ Years Experience
              </p>
              <h4
                className="text-base font-extrabold mt-0.5"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                Marketing Excellence
              </h4>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div>

            {/* Label */}
            <h5
              ref={labelRef}
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3 will-change-transform"
              style={{ color: "var(--primary)" }}
            >
              <span className="block h-px w-8" style={{ background: "var(--primary)" }} />
              Digital Marketing Experts
            </h5>

            {/* Title */}
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              <span className="word inline-block will-change-transform">Grow&nbsp;</span>
              <span className="word inline-block will-change-transform">Your&nbsp;</span>
              <span className="word inline-block will-change-transform">Business&nbsp;</span>
              <span className="word inline-block will-change-transform">With&nbsp;</span>
              <span className="word inline-block will-change-transform">Smart&nbsp;</span>
              <span className="word inline-block will-change-transform gradient-text">Marketing</span>
            </h2>

            {/* Paragraphs */}
            <p
              ref={para1Ref}
              className="leading-relaxed mb-5 max-w-xl will-change-transform"
              style={{ color: "var(--muted)", fontSize: "0.95rem" }}
            >
              In today's competitive online marketplace, having a website is not enough — you need
              strategic digital marketing to reach the right audience, build trust, and drive sales.
              At Easy Tech Solutions, we provide end-to-end digital marketing solutions designed to
              help businesses grow their presence, attract more customers, and maximize ROI.
            </p>
            <p
              ref={para2Ref}
              className="leading-relaxed mb-8 max-w-xl will-change-transform"
              style={{ color: "var(--muted)", fontSize: "0.95rem" }}
            >
              We combine data-driven strategies with creative execution to ensure your business
              doesn't just exist online but thrives in the digital ecosystem. Whether you're a
              startup or an established brand, Easy Tech Solutions helps you scale faster with
              impactful digital marketing tailored to your goals.
            </p>

            {/* Features */}
            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3 will-change-transform">
                  <CheckCircle
                    size={19}
                    strokeWidth={2}
                    style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}