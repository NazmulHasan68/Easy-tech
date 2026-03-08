import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Code2, Smartphone, BarChart3, Layers,
  Star, CheckCircle2, Zap, Globe, Shield, TrendingUp,
} from "lucide-react";
import HomeHero from "@/components/home/HomeHero";
import HomeTrustedClient from "@/components/home/HomeTrustedClient";
import HomeServices from "@/components/home/HomeServices";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeResearch from "@/components/home/HomeResearch";

export const metadata: Metadata = { title: "Home" };

const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "5+",   label: "Years Experience" },
  { value: "40+",  label: "Team Members" },
];

const SERVICES = [
  { Icon: Code2,      title: "Web Development",  desc: "Blazing-fast Next.js and React apps, from landing pages to full-stack platforms." },
  { Icon: Smartphone, title: "Mobile Apps",       desc: "Cross-platform iOS & Android apps that feel native and perform flawlessly." },
  { Icon: BarChart3,  title: "Digital Marketing", desc: "Data-driven campaigns with measurable ROI — SEO, ads, and growth strategy." },
  { Icon: Layers,     title: "Software / ERP",    desc: "Custom enterprise software that automates your workflow and scales with you." },
];

const TESTIMONIALS = [
  { name: "Sarah Chen",  role: "CEO, NovaBrand",   stars: 5, text: "EasyTech transformed our digital presence. On time, on budget, beyond expectations." },
  { name: "James Malik", role: "CTO, FinFlow",     stars: 5, text: "They built our entire fintech platform in 3 months. Technical depth is unmatched." },
  { name: "Nadia Islam", role: "Founder, ShopEase",stars: 5, text: "Our mobile app hit 50k downloads in the first month. EasyTech made it possible." },
];

const WHYS = [
  { Icon: Zap,        title: "Fast Delivery",   desc: "MVPs shipped in weeks, not months." },
  { Icon: Shield,     title: "Quality Assured", desc: "Rigorous QA and code reviews on every project." },
  { Icon: Globe,      title: "Global Standards",desc: "International-grade code and design practices." },
  { Icon: TrendingUp, title: "Growth Focused",  desc: "Every solution built to scale with your business." },
];

export default function HomePage() {
  return (
    <>

      <HomeHero/>

      <HomeTrustedClient/>

      <HomeServices/>

      <HomeSolutions/>

      <HomeResearch/>

      
      {/* ── HERO ── */}
      <section style={{ minHeight: "91vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="blob" style={{ width: "600px", height: "600px", top: "-10%", right: "-8%", background: "radial-gradient(circle, rgba(94,76,220,0.18) 0%, transparent 70%)" }} />
        <div className="blob" style={{ width: "400px", height: "400px", bottom: "0", left: "-5%", background: "radial-gradient(circle, rgba(7,0,44,0.5) 0%, transparent 70%)" }} />

        <div className="container-xl" style={{ position: "relative", zIndex: 1, paddingBlock: "5rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <div className="badge anim-fade-up" style={{ marginBottom: "1.5rem" }}>
              <Zap size={11} /> #1 Digital Agency in Bangladesh
            </div>
            <h1 className="anim-fade-up d-100" style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "1.5rem", lineHeight: 1.07 }}>
              We Build <span className="gradient-text">Digital Products</span> That Move Markets
            </h1>
            <p className="anim-fade-up d-200" style={{ fontSize: "clamp(1rem, 2vw, 1.18rem)", color: "var(--muted)", lineHeight: 1.8, maxWidth: "580px", marginBottom: "2.5rem" }}>
              From sleek websites to powerful mobile apps and enterprise software — EasyTech delivers end-to-end digital solutions with speed, craft, and precision.
            </p>
            <div className="anim-fade-up d-300" style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-primary">Explore Services <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn btn-ghost">Talk to Us</Link>
            </div>

            {/* Social proof */}
            <div className="anim-fade-up d-400" style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "3rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                {["🇧🇩","🇬🇧","🇸🇬","🇺🇸","🇦🇺"].map((flag, i) => (
                  <span key={i} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid var(--background)", background: "var(--surface)", marginLeft: i === 0 ? 0 : "-8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", zIndex: 5 - i, position: "relative" }}>{flag}</span>
                ))}
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                Trusted by <span style={{ color: "var(--foreground)", fontWeight: 600 }}>120+ clients</span> across 12 countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderBlock: "1px solid var(--border-color)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--primary)", fontFamily: "var(--font-sans)", lineHeight: 1, marginBottom: "0.35rem" }}>{value}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>What We Do</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.85rem" }}>
              Services Built for <span className="gradient-text">Growth</span>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Strategy, design, and engineering — we handle the full stack so you can focus on your business.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {SERVICES.map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box" style={{ marginBottom: "1.1rem" }}>
                  <Icon size={21} style={{ color: "var(--primary)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.02rem", color: "var(--foreground)", marginBottom: "0.55rem" }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-ghost">View All Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-pad" style={{ background: "var(--surface)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="badge" style={{ marginBottom: "1rem" }}>Why EasyTech</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "1rem", lineHeight: 1.15 }}>
                We Don't Just Code, <span className="gradient-text">We Partner</span>
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
                Every project is a long-term partnership. We invest in understanding your business before touching the keyboard.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["On-time delivery, guaranteed", "Dedicated project managers", "Post-launch support included", "Transparent fixed pricing"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--muted)", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {WHYS.map(({ Icon, title, desc }) => (
                <div key={title} className="mini-card">
                  <Icon size={20} style={{ color: "var(--primary)", marginBottom: "0.75rem" }} />
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.93rem", color: "var(--foreground)", marginBottom: "0.35rem" }}>{title}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>Client Love</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--foreground)" }}>
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map(({ name, role, stars, text }) => (
              <div key={name} className="card">
                <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={13} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                  ))}
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.72, marginBottom: "1.25rem", fontStyle: "italic" }}>"{text}"</p>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.88rem", color: "var(--foreground)" }}>{name}</div>
                  <div style={{ color: "var(--primary)", fontSize: "0.78rem", marginTop: "0.2rem" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ paddingBlock: "4.5rem" }}>
        <div className="container-xl">
          <div style={{ background: "linear-gradient(135deg, #07002c 0%, #1c1060 50%, #07002c 100%)", border: "1px solid rgba(94,76,220,0.3)", borderRadius: "var(--radius-2xl)", padding: "clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div className="blob" style={{ width: "500px", height: "500px", top: "-30%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(94,76,220,0.25) 0%, transparent 70%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="badge" style={{ marginBottom: "1.25rem" }}><Zap size={11} /> Ready to Start?</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Let's Build Something <span className="gradient-text">Extraordinary</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto 2rem", lineHeight: 1.75, fontSize: "0.95rem" }}>
                Tell us about your project and we'll get back within 24 hours with a clear plan.
              </p>
              <Link href="/about" className="btn btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
