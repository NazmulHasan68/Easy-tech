import {
  Settings,
  Megaphone,
  Lightbulb,
  Monitor,
} from "lucide-react";

export default function WhatWeProvide() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-2">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What We Provide
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Whether you're starting fresh or upgrading your online presence,
            EasyTech Solutions is your trusted partner for smart, SEO-friendly,
            and scalable web solutions.
          </p>
        </div>

        {/* Box Wrapper */}
        <div className="border border-orange-300 rounded-xl p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            {/* Item 1 */}
            <div className="bg-orange-50 rounded-lg p-6 flex gap-4">
              <Settings className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Process Development
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With over a decade of experience, we've established ourselves
                  as one of the pioneering software companies in the region.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-orange-50 rounded-lg p-6 flex gap-4">
              <Megaphone className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Digital Marketing
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Application of digital marketing tools and SEO strategies
                  directly into development for better visibility.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-orange-50 rounded-lg p-6 flex gap-4">
              <Lightbulb className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Strategy
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We strategize carefully before execution to align your
                  project with real business goals.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-orange-50 rounded-lg p-6 flex gap-4">
              <Monitor className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Website Design
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use modern UI/UX principles to ensure the best user
                  experience across all devices.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
