"use client";

import { motion } from "framer-motion";

const challengeData = {
  web: [
    { title: "High Competition", text: "Countless brands compete for the same search rankings, making it hard to stand out without a clear strategy." },
    { title: "Changing Algorithms", text: "Search engines constantly update their rules, requiring continuous adaptation to maintain visibility." },
    { title: "SEO & Performance", text: "Websites need clean code, fast load speeds, and proper structure to rank and retain visitors." },
    { title: "Conversion Optimization", text: "Attracting traffic is only half the battle — turning visitors into paying customers is the real challenge." },
    { title: "Cross-Device Compatibility", text: "Ensuring a seamless, responsive experience across all screen sizes and browsers is complex but essential." },
    { title: "Security & Maintenance", text: "Keeping websites secure, up-to-date, and bug-free requires ongoing expertise and attention." },
  ],
  app: [
    { title: "Platform Fragmentation", text: "Supporting both iOS and Android with consistent UX while managing different codebases is a major challenge." },
    { title: "User Retention", text: "Most apps lose 77% of users within three days. Keeping users engaged long-term requires smart design." },
    { title: "Performance on Low-End Devices", text: "Apps must run smoothly on all device types, not just the latest flagships." },
    { title: "App Store Approval", text: "Navigating strict App Store and Play Store guidelines requires experience and careful preparation." },
    { title: "Push Notification Fatigue", text: "Overusing notifications drives uninstalls. Finding the balance between engagement and annoyance is key." },
    { title: "Offline Functionality", text: "Users expect apps to work even without internet. Implementing offline support adds significant complexity." },
  ],
  digital: [
    { title: "Targeting the Right Audience", text: "Reaching the right people at the right time is harder than ever with fragmented digital attention spans." },
    { title: "Ad Spend Efficiency", text: "Without proper tracking and strategy, marketing budgets are often wasted on low-converting audiences." },
    { title: "Content Consistency", text: "Producing high-quality content regularly requires time, creativity, and a solid editorial strategy." },
    { title: "Platform Algorithm Changes", text: "Social and search platforms update their algorithms frequently, disrupting organic reach overnight." },
    { title: "Measuring Real ROI", text: "Connecting marketing activities to actual business outcomes requires sophisticated tracking and attribution." },
    { title: "Brand Trust & Reputation", text: "Building credibility online takes time — one negative review or PR mistake can undo months of effort." },
  ],
  erp: [
    { title: "Complex Implementation", text: "ERP systems touch every department, making rollout complex and prone to disruption if poorly planned." },
    { title: "User Adoption", text: "Employees resistant to change can undermine even the best ERP system if training is insufficient." },
    { title: "Data Migration", text: "Transferring years of historical data into a new system without loss or corruption is technically demanding." },
    { title: "Customization vs. Stability", text: "Heavy customizations can break with updates — balancing flexibility with maintainability is critical." },
    { title: "Integration with Existing Tools", text: "Connecting ERP with existing software stacks, APIs, and third-party services adds layers of complexity." },
    { title: "Ongoing Support & Scaling", text: "As businesses grow, ERP systems must scale — requiring continuous maintenance and expert support." },
  ],
};

type ServiceType = keyof typeof challengeData;

const labels: Record<ServiceType, string> = {
  web: "Web Development",
  app: "Mobile App",
  digital: "Digital Marketing",
  erp: "ERP / CRM Solutions",
};

export default function ServiceChallenges({ service = "web" }: { service?: ServiceType }) {
  const challenges = challengeData[service];

  return (
    <section className="py-3" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            The Challenges
          </h2>
          <p style={{ color: "var(--muted)" }} className="leading-relaxed">
            In today's digital-first world, businesses face several challenges
            with <span className="font-semibold" style={{ color: "var(--primary)" }}>{labels[service]}</span>.
            Understanding these is the first step toward solving them.
          </p>
        </div>

        {/* Bullet Grid */}
        <div className="grid grid-cols-1 gap-1">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-1 p-1 md:p-1"
            >
              {/* Bullet */}
              <span
                className="mt-3 mr-3 w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: "var(--primary)" }}
              />

              {/* Content */}
              <div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}