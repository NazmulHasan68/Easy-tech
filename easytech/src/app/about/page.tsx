"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Zap, Target, Heart, Lightbulb, Users2 } from "lucide-react";

const TEAM = [
  { name: "Rahim Chowdhury", role: "CEO & Co-Founder",  emoji: "👨‍💼", bio: "10+ years shipping digital products for global markets." },
  { name: "Tasnim Akter",    role: "CTO",                emoji: "👩‍💻", bio: "Full-stack architect obsessed with elegant, scalable systems." },
  { name: "Farhan Hossain",  role: "Head of Design",     emoji: "🎨", bio: "Award-winning designer focused on conversion and delight." },
  { name: "Nusrat Jahan",    role: "Marketing Lead",     emoji: "📊", bio: "Growth strategist who has scaled brands across 3 continents." },
];

const VALUES = [
  { Icon: Target,    title: "Mission-Driven",  desc: "Every project has a clear goal. We align our work to business outcomes, not just deliverables." },
  { Icon: Heart,     title: "Client-First",    desc: "Your success is our success. We work as an extension of your team, not just a vendor." },
  { Icon: Lightbulb, title: "Innovation",      desc: "We stay ahead of the curve, adopting new tech that gives our clients a real edge." },
  { Icon: Users2,    title: "Collaboration",   desc: "Great products are built together. We communicate openly and include you at every step." },
];

const TIMELINE = [
  { year: "2019", event: "Founded in Dhaka with a team of 3 engineers and a single laptop." },
  { year: "2020", event: "Landed first international client — a UK-based fintech startup." },
  { year: "2021", event: "Grew to 20+ team members and launched our mobile division." },
  { year: "2022", event: "Delivered 50th project and opened our Singapore office." },
  { year: "2023", event: "Launched EasySoft ERP — our flagship enterprise product." },
  { year: "2024", event: "100+ clients, recognized as Top Digital Agency in Bangladesh." },
];

type FormState = { name: string; email: string; subject: string; message: string };

export default function AboutPage() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]     = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1600);
  };

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ padding: "5rem 0 3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          className="blob"
          style={{ width: "600px", height: "400px", top: "-20%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(ellipse, rgba(94,76,220,0.14) 0%, transparent 70%)" }}
        />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="badge" style={{ marginBottom: "1.25rem" }}>
            <Zap size={11} /> About EasyTech
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "1.2rem",
              lineHeight: 1.1,
            }}
          >
            On a Mission to{" "}
            <span className="gradient-text">Digitize Bangladesh</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto", fontSize: "1.02rem", lineHeight: 1.8 }}>
            EasyTech was built on a simple belief: world-class digital products should be accessible to every ambitious business, regardless of size or location.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────── */}
      <section className="section-pad">
        <div className="container-xl">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}
          >
            <div>
              <div className="badge" style={{ marginBottom: "1rem" }}>Our Story</div>
              <h2
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "1.25rem", lineHeight: 1.15 }}
              >
                From a Garage in Dhaka to a{" "}
                <span className="gradient-text">Global Agency</span>
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.93rem" }}>
                EasyTech started in 2019 when three engineers with big ambitions and a single laptop decided that Bangladeshi businesses deserved world-class digital solutions.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.93rem" }}>
                Today we're a 40+ person agency working with clients across 12 countries — but we've never lost that founding spirit: build things that truly matter and treat every client like a partner.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {TIMELINE.map(({ year, event }) => (
                <div key={year} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "52px", height: "26px",
                      background: "rgba(94,76,220,0.1)",
                      border: "1px solid rgba(94,76,220,0.25)",
                      borderRadius: "6px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-sans)", fontWeight: 700,
                      fontSize: "0.7rem", color: "var(--primary)",
                    }}
                  >
                    {year}
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6, paddingTop: "0.25rem" }}>{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--surface)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>What Drives Us</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--foreground)" }}>
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem" }}>
            {VALUES.map(({ Icon, title, desc }) => (
              <div key={title} className="card" style={{ background: "var(--background)" }}>
                <div className="icon-box" style={{ marginBottom: "1rem" }}>
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.55rem" }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.87rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>The Team</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--foreground)" }}>
              People Behind the <span className="gradient-text">Magic</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.25rem" }}>
            {TEAM.map(({ name, role, emoji, bio }) => (
              <div key={name} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "70px", height: "70px", borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(94,76,220,0.15), rgba(167,139,250,0.08))",
                    border: "2px solid rgba(94,76,220,0.22)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.9rem",
                    margin: "0 auto 1rem",
                  }}
                >
                  {emoji}
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.98rem", color: "var(--foreground)", marginBottom: "0.22rem" }}>{name}</h3>
                <div style={{ color: "var(--primary)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.7rem" }}>{role}</div>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.65 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--surface)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem" }}>Get In Touch</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--foreground)" }}>
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: "0.75rem", lineHeight: 1.75, fontSize: "0.93rem" }}>
              We respond to every inquiry within 24 hours.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}
          >
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { Icon: Mail,   label: "Email Us",   value: "hello@easytech.io" },
                { Icon: Phone,  label: "Call Us",    value: "+880 1700-000000" },
                { Icon: MapPin, label: "Visit Us",   value: "Gulshan-1, Dhaka 1212, Bangladesh" },
              ].map(({ Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="icon-box">
                    <Icon size={17} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.83rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>{label}</div>
                    <div style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.55 }}>{value}</div>
                  </div>
                </div>
              ))}

              {/* Mini map placeholder */}
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-color)",
                  height: "160px",
                  background: "var(--surface-2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--muted)", fontSize: "0.85rem",
                  flexDirection: "column", gap: "0.5rem",
                }}
              >
                <MapPin size={22} style={{ color: "var(--primary)" }} />
                <span>Gulshan-1, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ background: "var(--background)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                  <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem", fontSize: "1.2rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-grid">
                    <div>
                      <label className="label">Name</label>
                      <input className="field" type="text" required placeholder="Your name" value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <label className="label">Email</label>
                      <input className="field" type="email" required placeholder="your@email.com" value={form.email} onChange={set("email")} />
                    </div>
                  </div>
                  <div>
                    <label className="label">Subject</label>
                    <input className="field" type="text" required placeholder="What's this about?" value={form.subject} onChange={set("subject")} />
                  </div>
                  <div>
                    <label className="label">Message</label>
                    <textarea
                      className="field"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={set("message")}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1, width: "100%" }}
                  >
                    {loading ? "Sending…" : <><Send size={14} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
