"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const PAGES: [string, string][] = [
  ["Home",         "/"],
  ["About Us",     "/about"],
  ["Services",     "/services"],
  ["Projects",     "/projects"],
  ["Contact",      "/contact"],
];

const SERVICES: [string, string][] = [
  ["Web Development",       "/services/web"],
  ["App Development",       "/services/app"],
  ["Digital Marketing",     "/services/marketing"],
  ["ERP Solutions",         "/services/erp"],
  ["Media Buying",          "/services/media-buying"],
  ["Business Consultancy",  "/services/business-consultancy"],
];

const SOCIALS = [
  { icon: Facebook,  href: "https://www.facebook.com/easytechsolutionsbd",  label: "Facebook" },
  { icon: Instagram, href: "#",                                              label: "Instagram" },
  { icon: Youtube,   href: "#",                                              label: "YouTube" },
  { icon: Linkedin,  href: "#",                                              label: "LinkedIn" },
];

export default function Footer() {
    const { theme, toggle } = useTheme();
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border-color)" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ width: "500px", height: "500px", background: "rgba(94,76,220,0.07)", filter: "blur(100px)", top: "-150px", left: "-100px" }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ width: "400px", height: "400px", background: "rgba(167,139,250,0.05)", filter: "blur(100px)", bottom: "-100px", right: "-80px" }}
      />

      <div className="container-xl relative z-10 pt-16 pb-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            
          {theme === "dark" ? 
            <Link href="/">
              <Image priority src="/logo/logo_v1.svg" alt="Logo" width={35} height={25} className="w-40 h-auto object-contain"  />
            </Link> : 
            <Link href="/">
              <Image priority src="/logo/logo_v2.svg" alt="Logo" width={35} height={25} className="w-40 h-auto object-contain"  />
            </Link>
          }

            <p
              className="text-sm leading-relaxed my-6"
              style={{ color: "var(--muted)", maxWidth: "230px" }}
            >
              Building tomorrow's digital products — fast, beautiful, and built to scale for every business.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Pages ── */}
          <div>
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}
            >
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {PAGES.map(([name, path]) => (
                <Link
                  key={path}
                  href={path}
                  className="text-sm hover-primary flex items-center gap-2 group"
                >
                  <span
                    className="block w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                    style={{ background: "var(--primary)" }}
                  />
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Services ── */}
          <div>
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}
            >
              Services
            </p>
            <nav className="flex flex-col gap-3">
              {SERVICES.map(([name, path]) => (
                <Link
                  key={path}
                  href={path}
                  className="text-sm hover-primary flex items-center gap-2 group"
                >
                  <span
                    className="block w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                    style={{ background: "var(--primary)" }}
                  />
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contact ── */}
          <div>
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-sans)", color: "var(--foreground)" }}
            >
              Contact Us
            </p>

            <div className="flex flex-col gap-4 mb-7">
              {([
                [Mail,   "info@easytechsolutions.com", "mailto:info@easytechsolutions.comm"],
                [Phone,  "+880 1580-741616",               "tel:+8801580741616"],
                [MapPin, "23/2, SEL HUQ SKYPARK, Mirpur Rd, Dhaka",         "#"],
              ] as const).map(([Icon, text, href]) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-3 group"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "rgba(94,76,220,0.1)",
                      border: "1px solid rgba(94,76,220,0.2)",
                    }}
                  >
                    <Icon size={13} style={{ color: "var(--primary)" }} />
                  </span>
                  <span
                    className="text-sm leading-relaxed pt-1 group-hover:text-[var(--primary)] transition-colors duration-200"
                    style={{ color: "var(--muted)" }}
                  >
                    {text}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contact" className="btn btn-primary btn-sm w-full justify-center">
              Get a Free Quote →
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full mb-6" style={{ background: "var(--border-color)" }} />

        {/* ── Bottom ── */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Easy Tech Solutions. All rights reserved.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
            Crafted with <span style={{ color: "#e5484d" }}></span> in Dhaka, Bangladesh
          </p>
        </div>

      </div>
    </footer>
  );
}