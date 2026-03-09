import { Settings, Megaphone, Lightbulb, Monitor } from "lucide-react";

const items = [
  {
    Icon: Settings,
    title: "Process Development",
    desc: "With over a decade of experience, we've established ourselves as one of the pioneering software companies in the region.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    desc: "Application of digital marketing tools and SEO strategies directly into development for better visibility.",
  },
  {
    Icon: Lightbulb,
    title: "Strategy",
    desc: "We strategize carefully before execution to align your project with real business goals.",
  },
  {
    Icon: Monitor,
    title: "Website Design",
    desc: "We use modern UI/UX principles to ensure the best user experience across all devices.",
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-4" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-2">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            What We Provide
          </h2>
          <p className="max-w-2xl" style={{ color: "var(--muted)" }}>
            Whether you're starting fresh or upgrading your online presence,
            EasyTech Solutions is your trusted partner for smart, SEO-friendly,
            and scalable web solutions.
          </p>
        </div>

        {/* Box Wrapper */}
        <div
          className="rounded-xl p-2"
          style={{ border: "1px solid var(--border-color)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {items.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg p-6 flex gap-4 transition-colors duration-300"
                style={{ background: "var(--surface)" }}
              >
                <Icon
                  className="w-7 h-7 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--primary)" }}
                />
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}