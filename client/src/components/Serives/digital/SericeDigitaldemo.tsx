import { BarChart3, Globe, Megaphone, ArrowRight } from "lucide-react";

const demos = [
  {
    title: "SEO Performance Dashboard",
    subtitle: "Keyword ranking, traffic & growth report",
    icon: BarChart3,
    url: "#",
  },
  {
    title: "Social Media Campaign Preview",
    subtitle: "Ad creatives, engagement & reach metrics",
    icon: Megaphone,
    url: "#",
  },
  {
    title: "Website Traffic Analytics",
    subtitle: "Visitor behavior & conversion tracking",
    icon: Globe,
    url: "#",
  },
];

export default function ServiceDigitalMarketingDemoCTA() {
  return (
    <section className="relative py-24 bg-emerald-600 overflow-hidden">
      {/* soft blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-xl font-bold mb-6 capitalize">
          Ready to grow your business online?
        </h2>

        {/* Demo cards */}
        <div className="grid gap-2">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <a
                key={i}
                href={demo.url}
                className="group relative overflow-hidden rounded-2xl bg-white/10
                           border border-white/20 px-6 py-7
                           backdrop-blur-md transition-all duration-500"
              >
                {/* slide background */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 mb-5 group-hover:bg-emerald-600 transition">
                    <Icon className="text-white group-hover:text-white" />
                  </div>

                  <h4 className="text-lg font-semibold mb-2 group-hover:text-emerald-700 transition">
                    {demo.title}
                  </h4>

                  <p className="text-sm text-white/80 group-hover:text-emerald-600 transition">
                    {demo.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-emerald-700
                       px-8 py-4 rounded-full font-semibold shadow-xl
                       hover:scale-105 transition"
          >
            Get Free Marketing Plan <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
