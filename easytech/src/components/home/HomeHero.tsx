"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef   = useRef({ x: -999, y: -999 });
  const animRef    = useRef<number>(0);

  const { scrollY } = useScroll();
  const logoY       = useTransform(scrollY, [0, 600], [0, 260]);
  const logoOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const logoScale   = useTransform(scrollY, [0, 400], [1, 0.7]);

  /* ── Canvas deferred until idle — won't block LCP ── */
  useEffect(() => {
    const startCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d")!;

      const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
      resize();
      window.addEventListener("resize", resize);

      /* 55 particles instead of 110 */
      const colors = ["#5e4cdc","#7b6de8","#a78bfa","#4a3abf","#c4b5fd","#818cf8"];
      type P = { x:number;y:number;ox:number;oy:number;vx:number;vy:number;r:number;alpha:number;color:string;pulse:number;ps:number };

      const ps: P[] = Array.from({ length: 55 }, () => {
        const x = Math.random() * canvas.width, y = Math.random() * canvas.height;
        return { x, y, ox:x, oy:y, vx:(Math.random()-.5)*.5, vy:(Math.random()-.5)*.5, r:Math.random()*2.5+.8, alpha:Math.random()*.5+.15, color:colors[Math.floor(Math.random()*colors.length)], pulse:Math.random()*Math.PI*2, ps:.02+Math.random()*.02 };
      });

      const tick = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const mx=mouseRef.current.x, my=mouseRef.current.y;
        if (mx>0&&my>0) {
          const g=ctx.createRadialGradient(mx,my,0,mx,my,200);
          g.addColorStop(0,"rgba(94,76,220,0.18)"); g.addColorStop(1,"rgba(94,76,220,0)");
          ctx.fillStyle=g; ctx.fillRect(0,0,canvas.width,canvas.height);
        }
        ps.forEach(p=>{
          p.ox+=p.vx; p.oy+=p.vy;
          if(p.ox<0||p.ox>canvas.width)p.vx*=-1;
          if(p.oy<0||p.oy>canvas.height)p.vy*=-1;
          const dx=p.ox-mx,dy=p.oy-my,d=Math.sqrt(dx*dx+dy*dy),f=Math.max(0,1-d/180);
          p.x=p.ox+dx*f*1.8; p.y=p.oy+dy*f*1.8;
          p.pulse+=p.ps;
          ctx.beginPath(); ctx.arc(p.x,p.y,p.r+Math.sin(p.pulse)*.5,0,Math.PI*2);
          ctx.fillStyle=p.color; ctx.globalAlpha=p.alpha; ctx.fill(); ctx.globalAlpha=1;
        });
        /* Connection lines — reduced to 100px */
        for(let i=0;i<ps.length;i++) for(let j=i+1;j<ps.length;j++){
          const dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<100){ctx.beginPath();ctx.moveTo(ps[i].x,ps[i].y);ctx.lineTo(ps[j].x,ps[j].y);ctx.strokeStyle=`rgba(94,76,220,${.2*(1-d/100)})`;ctx.lineWidth=.6;ctx.stroke();}
        }
        animRef.current=requestAnimationFrame(tick);
      };
      tick();
      return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize",resize); };
    };

    // Defer so it doesn't block h1 render (LCP element)
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(startCanvas, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(startCanvas, 400);
      return () => clearTimeout(t);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX-r.left, y: e.clientY-r.top };
  };
  const handleMouseLeave = () => { mouseRef.current = { x:-999, y:-999 }; };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-screen"
      style={{ background: "var(--background)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex:0 }} />

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex:1,
        backgroundImage:"linear-gradient(rgba(94,76,220,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(94,76,220,0.07) 1px,transparent 1px)",
        backgroundSize:"48px 48px" }} />

      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ zIndex:1, background:"rgba(94,76,220,0.12)", filter:"blur(140px)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ zIndex:1, background:"rgba(7,0,44,0.3)", filter:"blur(160px)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-8 md:gap-16 min-h-screen" style={{ zIndex:2 }}>

        {/* LEFT */}
        <div className="lg:w-1/2 space-y-6 md:space-y-10 mt-12 md:mt-4">
 

          {/*
            ✅ LCP FIX: h1 has NO animation wrapper / motion.div
            Renders immediately without any JS delay
          */}
          <div
            className="text-5xl lg:text-7xl font-extrabold leading-tight"
            style={{ color:"var(--foreground)", fontFamily:"var(--font-sans)" }}
          >
            Building
            <br />
            <span style={{ background:"linear-gradient(130deg,#5e4cdc 0%,#a78bfa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Digital Result
            </span>
          </div>

          <motion.p
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.3, duration:.5 }}
            className="text-md md:text-lg max-w-xl"
            style={{ color:"var(--muted)" }}
          >
            Innovative strategies and data-driven insights that showcase your agency's expertise in digital marketing and technology.
          </motion.p>

          <motion.a
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.45, duration:.5 }}
            whileTap={{ scale:.96 }}
            href="/about"
            className="group relative inline-flex items-center gap-4 px-6 py-3 md:py-4 rounded-full text-lg font-semibold overflow-hidden border"
            style={{ borderColor:"var(--primary)", color:"var(--primary)", boxShadow:"0 8px 32px rgba(94,76,220,0.2)" }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{ background:"var(--primary)" }} />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore More</span>
            <ArrowRight className="relative z-10 group-hover:text-white transition-colors duration-500" />
          </motion.a>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 relative h-[400px] md:h-[560px] w-full flex items-center justify-center">
          <motion.div
            style={{ y:logoY, opacity:logoOpacity, scale:logoScale }}
            initial={{ opacity:0, scale:.7 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:.8, delay:.5 }}
            className="flex flex-col items-center gap-4 select-none"
          >
            <div className="relative flex items-center justify-center">
              <motion.div animate={{ rotate:360 }} transition={{ duration:18, repeat:Infinity, ease:"linear" }}
                className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed"
                style={{ borderColor:"rgba(94,76,220,0.25)" }} />
              <motion.div animate={{ rotate:-360 }} transition={{ duration:12, repeat:Infinity, ease:"linear" }}
                className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border"
                style={{ borderColor:"rgba(167,139,250,0.2)" }} />
              <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full"
                style={{ background:"radial-gradient(circle,rgba(94,76,220,0.45) 0%,transparent 70%)", filter:"blur(24px)" }} />
              <motion.div
                animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center border shadow-2xl"
                style={{ background:"linear-gradient(135deg,#5e4cdc 0%,#07002c 100%)", borderColor:"rgba(94,76,220,0.5)", boxShadow:"0 0 60px rgba(94,76,220,0.5),0 24px 60px rgba(94,76,220,0.3)" }}
              >
                {/* ✅ priority so it preloads above the fold */}
                <Image src="/logo/icon.webp" width={56} height={56} alt="Easy Tech Logo" className="object-contain" priority />
              </motion.div>
            </div>

            <motion.p
              animate={{ opacity:[.65,1,.65] }} transition={{ repeat:Infinity, duration:3, ease:"easeInOut" }}
              className="font-bold text-2xl tracking-wider mt-2"
              style={{ background:"linear-gradient(130deg,#5e4cdc,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontFamily:"var(--font-sans)" }}
            >
              Easy Tech
            </motion.p>
            <p className="text-xs tracking-[0.25em] uppercase" style={{ color:"var(--muted)" }}>Web · App · Marketing</p>
          </motion.div>

          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.0 }}
            className="absolute right-0 md:-right-4 top-8 rounded-2xl p-3 md:p-4 w-32 md:w-40 border"
            style={{ background:"var(--surface)", borderColor:"rgba(94,76,220,0.2)", boxShadow:"0 8px 32px rgba(94,76,220,0.12)" }}
          >
            <p className="text-xs mb-1" style={{ color:"var(--muted)" }}>Profile Views</p>
            <h4 className="text-xl md:text-2xl font-bold" style={{ color:"var(--primary)" }}>15M+</h4>
          </motion.div>


        </div>
      </div>
    </section>
  );
}