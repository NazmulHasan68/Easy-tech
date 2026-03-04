import preview from "@/assets/img/project 1 details 1.png";
import { Check } from "lucide-react";

export default function PorjectDetailsGole() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT — Curved Image */}
      <div className="relative">
        <div className="rounded-[20px] overflow-hidden border-2 border-[#2E602F]">
          <img loading="lazy"
            src={preview}
            alt="Project preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT — Goals */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Project Goals
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Suspendisse a libero maximus, rhoncus ex vel, suscipit velit.
          Donec interdum nisl. Curabitur fringilla turpis sed nulla auctor,
          laoreet mollis sem maximus.
        </p>

        <ul className="space-y-4">
          {[
            "Aliquet est massa, sit amet tempor",
            "Sit amet tempor mi auctor nec.",
            "Pellentesque aliquet est massa, sit amet tempor mi auctor nec",
            "Aliquet est massa, sit amet tempor",
            "Sit amet tempor mi auctor nec",
            "Pellentesque aliquet est massa, sit amet tempor mi auctor nec",
            "Aliquet est massa, sit amet tempor",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="text-orange-500 mt-1 w-5 h-5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
