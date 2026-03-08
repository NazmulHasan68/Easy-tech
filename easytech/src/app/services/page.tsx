import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Smartphone, BarChart3, Layers, Globe, Database,
  CheckCircle2, ArrowRight, Clock, Users, Award, Zap,
} from "lucide-react";

export const metadata: Metadata = { title: "Services" };

const SERVICES = [
  {
    Icon: Code2, title: "Web Development", tagline: "Modern, scalable web experiences",
    desc: "Pixel-perfect, performant websites and full-stack applications using Next.js 16, React 19, and TypeScript.",
    features: ["Next.js 16 / React 19 / TypeScript", "REST & GraphQL APIs", "CMS Integration", "Performance & Core Web Vitals", "SEO-ready Architecture"],
    hot: true,
  },
  {
    Icon: Smartphone, title: "Mobile App Development", tagline: "Apps users actually love to use",
    desc: "Native and cross-platform mobile applications for iOS and Android built with React Native and Flutter.",
    features: ["React Native & Flutter", "iOS & Android", "Push Notifications", "Offline-first Support", "App Store Deployment"],
    hot: false,
  },
  {
    Icon: BarChart3, title: "Digital Marketing", tagline: "Growth that compounds over time",
    desc: "Data-driven strategies that grow your audience, increase conversions, and deliver measurable ROI.",
    features: ["SEO & Content Strategy", "Google & Meta Ads", "Social Media Management", "Email Marketing Automation", "Analytics & Reporting"],
    hot: false,
  },
  {
    Icon: Layers, title: "Software / ERP Solutions", tagline: "Enterprise software, simplified",
    desc: "Custom ERP, CRM, and business management platforms built to fit your exact workflow.",
    features: ["ERP & CRM Development", "Workflow Automation", "Third-party Integrations", "Cloud Deployment", "24/7 Dedicated Support"],
    hot: false,
  },
  {
    Icon: Globe, title: "UI/UX Design", tagline: "Design that converts and delights",
    desc: "Strategic design thinking married to beautiful visual execution. Interfaces that feel intuitive on every device.",
    features: ["Figma Prototyping & Wireframes", "User Research & Testing", "Design Systems", "Responsive & Adaptive Design", "WCAG Accessibility"],
    hot: false,
  },
  {
    Icon: Database, title: "Cloud & DevOps", tagline: "Infrastructure built for scale",
    desc: "Modern cloud infrastructure, CI/CD pipelines and DevOps practices that keep your applications fast and secure.",
    features: ["AWS / GCP / Vercel / Railway", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Alerting", "Security Audits"],
    hot: false,
  },
];

const PROCESS = [
  { step: "01", title: "Discovery",  desc: "Deep-dive into your goals, users, and market to shape the right strategy." },
  { step: "02", title: "Design",     desc: "Wireframes, prototypes and polished visuals reviewed and approved by you." },
  { step: "03", title: "Build",      desc: "Agile sprints with weekly demos so you're always in the loop." },
  { step: "04", title: "Launch",     desc: "Thorough QA, smooth deployment, and ongoing post-launch support." },
];

const STACK = [
  "Next.js 16", "React 19", "TypeScript", "Node.js", "Bun",
  "Flutter", "React Native", "PostgreSQL", "MongoDB", "Redis",
  "AWS", "Vercel", "Docker", "Tailwind CSS v4", "Figma",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "5rem 0 3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="blob" style={{ width: "700px", height: "400px", top: "-20%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(ellipse, rgba(94,76,220,0.15) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="badge" style={{ marginBottom: "1.25rem" }}><Zap size={11} /> Our Services</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "1.2rem", lineHeight: 1.1 }}>
            Everything to <span className="gradient-text">Go Digital & Scale</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: "540px", margin: "0 auto 2.5rem", fontSize: "1.02rem", lineHeight: 1.78 }}>
            Full-spectrum digital services from strategy to execution. One partner for building, growing, and scaling your business online.
          </p>
          <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {([[ Clock, "Fast Delivery"], [Users, "Dedicated Teams"], [Award, "Quality Guaranteed"]] as const).map(([Icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", fontSize: "0.88rem" }}>
                <Icon size={14} style={{ color: "var(--primary)" }} /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {SERVICES.map(({ Icon, title, tagline, desc, features, hot }) => (
              <div key={title} className="card" style={{ position: "relative" }}>
                {hot && (
                  <div style={{ position: "absolute", top: 0, right: "1.5rem", background: "var(--primary)", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "0.22rem 0.7rem", borderRadius: "0 0 6px 6px", fontFamily: "var(--font-sans)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Most Popular
                  </div>
                )}
                <div className="icon-box" style={{ width: "52px", height: "52px", borderRadius: "14px", marginBottom: "1.2rem" }}>
                  <Icon size={23} style={{ color: "var(--primary)" }} />
                </div>
                <p style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.35rem", fontFamily: "var(--font-sans)" }}>{tagline}</p>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.15rem", color: "var(--foreground)", marginBottom: "0.7rem" }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{desc}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.42rem" }}>
                  {features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", fontSize: "0.83rem" }}>
                      <CheckCircle2 size={12} style={{ color: "var(--primary)", flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad" style={{ background: "var(--surface)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>How We Work</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--foreground)" }}>
              Our <span className="gradient-text">4-Step Process</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.5rem" }}>
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "linear-gradient(135deg, #5e4cdc, #a78bfa)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "0.95rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.2rem", boxShadow: "0 6px 24px rgba(94,76,220,0.35)" }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.55rem" }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.87rem", lineHeight: 1.68 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>Tech Stack</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--foreground)" }}>
              Tools We <span className="gradient-text">Master</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", justifyContent: "center" }}>
            {STACK.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ paddingBottom: "4.5rem" }}>
        <div className="container-xl">
          <div style={{ background: "linear-gradient(135deg, #07002c, #1c1060, #07002c)", border: "1px solid rgba(94,76,220,0.3)", borderRadius: "var(--radius-2xl)", padding: "3.5rem 2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: "0.9rem" }}>Have a Project in Mind?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: 1.75, maxWidth: "420px", margin: "0 auto 2rem" }}>Let's talk about how we can help you hit your goals.</p>
            <Link href="/about" className="btn btn-primary">Contact Us <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
