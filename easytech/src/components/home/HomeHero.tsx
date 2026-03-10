"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const animRef = useRef<number>(0);

  /* ── Scroll-based logo parallax ── */
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 600], [0, 260]);
  const logoOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 400], [1, 0.7]);

  /* ── Full-section particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 110;
    type Particle = {
      x: number; y: number;
      ox: number; oy: number;
      vx: number; vy: number;
      r: number; alpha: number;
      color: string;
      pulse: number; pulseSpeed: number;
    };

    const colors = [
      "#5e4cdc", "#7b6de8", "#a78bfa",
      "#4a3abf", "#c4b5fd", "#818cf8",
    ];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x, y, ox: x, oy: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2.8 + 0.8,
        alpha: Math.random() * 0.55 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      };
    });

    const drawLines = (list: Particle[]) => {
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const dx = list[i].x - list[j].x;
          const dy = list[i].y - list[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(list[i].x, list[i].y);
            ctx.lineTo(list[j].x, list[j].y);
            ctx.strokeStyle = `rgba(94,76,220,${0.22 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      /* ── Radial glow at mouse ── */
      if (mx > 0 && my > 0) {
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        glow.addColorStop(0, "rgba(94,76,220,0.22)");
        glow.addColorStop(0.5, "rgba(94,76,220,0.08)");
        glow.addColorStop(1, "rgba(94,76,220,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p) => {
        /* Float */
        p.ox += p.vx;
        p.oy += p.vy;
        if (p.ox < 0 || p.ox > canvas.width) p.vx *= -1;
        if (p.oy < 0 || p.oy > canvas.height) p.vy *= -1;

        /* Mouse repulsion */
        const dx = p.ox - mx;
        const dy = p.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 180);
        p.x = p.ox + dx * force * 1.8;
        p.y = p.oy + dy * force * 1.8;

        /* Pulse radius */
        p.pulse += p.pulseSpeed;
        const pulseR = p.r + Math.sin(p.pulse) * 0.6;

        /* Draw particle */
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      drawLines(particles);
      animRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* Mouse tracking on whole section */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  const handleMouseLeave = () => {
    mouseRef.current = { x: -999, y: -999 };
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-screen"
      style={{ background: "var(--background)" }}
    >
      {/* ── Full-section canvas background ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage:
            "linear-gradient(rgba(94,76,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(94,76,220,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Brand glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ zIndex: 1, background: "rgba(94,76,220,0.12)", filter: "blur(140px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ zIndex: 1, background: "rgba(7,0,44,0.3)", filter: "blur(160px)" }}
      />

      {/* ── Main layout ── */}
      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-8 md:gap-16 min-h-screen"
        style={{ zIndex: 2 }}
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 space-y-6 md:space-y-10 mt-12 md:mt-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block font-semibold px-4 py-2 rounded-full text-sm border"
            style={{
              color: "var(--primary)",
              background: "rgba(94,76,220,0.1)",
              borderColor: "rgba(94,76,220,0.2)",
            }}
          >
            Digital Solutions
          </motion.span>

          <h1
            className="text-5xl lg:text-7xl font-extrabold leading-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            Building
            <br />
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Result
            </span>
          </h1>

          <p
            className="text-md md:text-lg max-w-xl"
            style={{ color: "var(--muted)" }}
          >
            Innovative strategies and data-driven insights that showcase your
            agency's expertise in digital marketing and technology.
          </p>

          <motion.a
            whileTap={{ scale: 0.96 }}
            href="/about"
            className="group relative inline-flex items-center gap-4 px-6 py-3 md:py-4 rounded-full text-lg font-semibold overflow-hidden border"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
              boxShadow: "0 8px 32px rgba(94,76,220,0.2)",
            }}
          >
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
              style={{ background: "var(--primary)" }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Explore More
            </span>
            <ArrowRight className="relative z-10 group-hover:text-white transition-colors duration-500" />
          </motion.a>
        </motion.div>

        {/* ── RIGHT — Logo only, scroll parallax ── */}
        <div className="lg:w-1/2 relative h-[400px] md:h-[560px] w-full flex items-center justify-center">

          {/* Logo with scroll parallax */}
          <motion.div
            style={{ y: logoY, opacity: logoOpacity, scale: logoScale }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col items-center gap-4 select-none"
          >
            {/* Ring 1 — slow rotate */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed"
                style={{ borderColor: "rgba(94,76,220,0.25)" }}
              />
              {/* Ring 2 — counter-rotate */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border"
                style={{ borderColor: "rgba(167,139,250,0.2)" }}
              />

              {/* Glow behind logo */}
              <div
                className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(94,76,220,0.45) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Logo box */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center border shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #5e4cdc 0%, #07002c 100%)",
                  borderColor: "rgba(94,76,220,0.5)",
                  boxShadow: "0 0 60px rgba(94,76,220,0.5), 0 24px 60px rgba(94,76,220,0.3)",
                }}
              >
                <Image
                  src="/logo/icon.png"
                  width={56}
                  height={56}
                  alt="Easy Tech Logo"
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Company name */}
            <motion.p
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="font-bold text-2xl tracking-wider mt-2"
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "var(--font-sans)",
              }}
            >
              Easy Tech
            </motion.p>

            <p
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Web · App · Marketing
            </p>
          </motion.div>

          {/* Floating stat — Profile Views */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute right-0 md:-right-4 top-8 rounded-2xl p-3 md:p-4 w-32 md:w-40 border"
            style={{
              background: "var(--surface)",
              borderColor: "rgba(94,76,220,0.2)",
              boxShadow: "0 8px 32px rgba(94,76,220,0.12)",
            }}
          >
            <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Profile Views</p>
            <h4 className="text-xl md:text-2xl font-bold" style={{ color: "var(--primary)" }}>45M+</h4>
          </motion.div>

          {/* Floating stat — Growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-4 left-0 md:left-8 rounded-2xl p-3 md:p-4 w-36 md:w-44 border"
            style={{
              background: "var(--surface)",
              borderColor: "rgba(94,76,220,0.2)",
              boxShadow: "0 8px 32px rgba(94,76,220,0.12)",
            }}
          >
            <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>Growth</p>
            <div
              className="h-5 md:h-7 rounded-lg"
              style={{ background: "linear-gradient(90deg, #5e4cdc, #a78bfa)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}