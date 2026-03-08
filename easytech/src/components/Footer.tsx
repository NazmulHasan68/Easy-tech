import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const LINKS = {
  pages:    [["Home", "/"], ["Services", "/services"], ["About", "/about"]] as [string, string][],
  services: ["Web Development", "Mobile Apps", "Digital Marketing", "Software / ERP", "UI/UX Design", "Cloud & DevOps"],
};

const SOCIALS = [Github, Linkedin, Twitter];

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border-color)" }}>
      <div className="container-xl section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" style={{ textDecoration: "none" }}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg,#5e4cdc,#a78bfa)" }}>
                <Zap size={16} color="#fff" fill="#fff" />
              </span>
              <span className="font-extrabold text-lg" style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}>
                Easy<span style={{ color: "var(--primary)" }}>Tech</span>
              </span>
            </Link>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: "240px" }}>
              Building tomorrow's digital products — fast, beautiful, and built to scale.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((Icon, i) => (
                <a key={i} href="#" className="social-icon" aria-label="social">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}>Pages</p>
            <nav className="flex flex-col gap-2.5">
              {LINKS.pages.map(([name, path]) => (
                <Link key={path} href={path} className="hover-primary text-sm">{name}</Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}>Services</p>
            <nav className="flex flex-col gap-2.5">
              {LINKS.services.map((s) => (
                <a key={s} href="#" className="hover-primary text-sm">{s}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}>Contact</p>
            <div className="flex flex-col gap-3">
              {([
                [Mail,   "hello@easytech.io"],
                [Phone,  "+880 1700-000000"],
                [MapPin, "Gulshan-1, Dhaka 1212"],
              ] as const).map(([Icon, text]) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon size={14} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "var(--muted)", fontSize: "0.87rem", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>© {new Date().getFullYear()} EasyTech. All rights reserved.</p>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>Built with <span style={{ color: "var(--primary)" }}>♥</span> in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
