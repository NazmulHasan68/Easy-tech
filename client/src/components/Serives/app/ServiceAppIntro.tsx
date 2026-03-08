
import { motion } from 'framer-motion';
import erpImg from '@/assets/banner/sofware_page.jpg';
import { CheckCircle } from 'lucide-react';
import SEO from '../../SEO';

const features = [
  "Mobile Inventory & Sales Management",
  "Accounts & Payroll Automation",
  "CRM & Client Tracking",
  "Reports & Analytics on Mobile",
];

export default function MobileServiceAppIntro() {
  return (
    <>
      {/* SEO */}
      <SEO
        title="Mobile Solutions | EasyTech Solutions"
        description="Manage your business on-the-go with EasyTech Solutions Mobile ERP & CRM app. Track inventory, sales, accounts, HR, CRM, and analytics from your mobile device."
      />

      <section className="relative py-10 bg-[#f7faf8] overflow-hidden">
        <div className="relative max-w-md mx-auto px-4">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <img
              src={erpImg}
              alt="ERP & CRM Mobile Solutions by EasyTech Solutions"
              className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-2xl"
              loading="lazy"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-5 right-4 bg-white rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-[#98BC62] text-sm font-semibold">6+ Years Experience</p>
              <h4 className="text-[#232822] font-bold text-base">App Excellence</h4>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h5 className="text-[#98BC62] font-semibold uppercase tracking-widest">Mobile App</h5>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#232822] leading-snug">
              Mobile App To Manage Your Business Anywhere
            </h2>

            <p className="text-[#232822] text-base leading-relaxed">
              EasyTech Solutions Mobile App empowers you to run your business from your phone. Track inventory, manage accounts, HR, sales, and clients, and get analytics on-the-go.
            </p>

            {/* FEATURES */}
            <div className="flex flex-col gap-3">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-[#98BC62] mt-1" size={20} />
                  <p className="text-[#232822] text-sm sm:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}