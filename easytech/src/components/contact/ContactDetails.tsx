"use client";

import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const cards = [
  {
    Icon: Mail,
    title: "Email Us",
    lines: ["info@easytechsolutions.com", "support@easytechsolutions.com"],
  },
  {
    Icon: Phone,
    title: "Call Us",
    lines: ["+880 1580-741616", "Mon–Fri: 9AM – 6PM"],
  },
  {
    Icon: MapPin,
    title: "Visit Us",
    lines: ["23, SEL HUQ SKYPARK, Mirpur Rd, Dhaka"],
  },
];

const socials = [
  { href: "https://www.facebook.com/easytechsolutionsx", Icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/easytechsolutions/", Icon: Linkedin, label: "LinkedIn" },
];

export default function ContactDetails() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

      {/* Heading */}
      <div className="text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Let's Build Something{" "}
          <span
            style={{
              background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Amazing
          </span>{" "}
          Together
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Whether you need a new website, digital marketing, or custom software — we're here to help.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-3">
        {cards.map(({ Icon, title, lines }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 4px 20px rgba(94,76,220,0.06)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(94,76,220,0.1)" }}
            >
              <Icon size={20} style={{ color: "var(--primary)" }} />
            </div>
            <div>
              <h3
                className="font-bold text-lg mb-1"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </h3>
              {lines.map((line, i) => (
                <p key={i} className="text-sm" style={{ color: "var(--muted)" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="text-center">
        <h3
          className="font-bold mb-4 text-lg"
          style={{ color: "var(--foreground)" }}
        >
          Follow Us
        </h3>
        <div className="flex justify-center gap-4">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                color: "var(--primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--primary)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                (e.currentTarget as HTMLElement).style.color = "var(--primary)";
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}