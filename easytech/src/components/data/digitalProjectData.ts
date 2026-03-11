export interface DigitalService {
  id: string;
  name: string;
  image: string;
  category: string;
  startDate: string;
  endDate: string;
  status: string;
  website: string;
  description: string;
  technologies: string[];
  facilities: string[];
}

const allMarketingTools: string[] = [
  "Google Ads Manager",
  "Microsoft Ads (Bing)",
  "Step.io",
  "Ad Library",
  "Google Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Meta Pixel",
];

const marketingFacilities: string[] = [
  "Campaign Strategy & Planning",
  "Paid Ads Setup & Management",
  "Retargeting & Remarketing Campaigns",
  "Conversion Tracking & Pixel Setup",
  "Performance Monitoring & Analytics",
  "A/B Testing & Optimization",
  "Budget & ROI Management",
  "Audience Targeting & Segmentation",
  "Reporting & Insights",
  "Server-Side Tracking Implementation",
  "Landing Page Optimization (CRO)",
  "Creative & Ad Copy Development",
  "Competitor & Market Analysis",
  "Email Drip Campaign Setup & Automation",
  "SEO & Content Integration",
  "Social Media Engagement Strategy",
  "Influencer & Affiliate Campaigns",
  "Video Ad Production & Optimization",
  "Multi-Channel Campaign Coordination",
  "Custom Analytics Dashboard Setup",
  "CRM Integration & Lead Management",
  "Marketing Funnel Design & Optimization",
  "Programmatic Advertising Setup",
  "AI-Powered Campaign Optimization",
  "Customer Segmentation & Lifetime Value Analysis",
  "Chatbot & Automation Integration",
  "Geo-Targeting & Local Campaigns",
  "Conversion Rate & Revenue Forecasting",
  "Dynamic Content & Personalization",
  "Cross-Platform Retargeting Automation",
];

// Images → put in /public/assets/img/digital_project/1.png ... 6.png

export const digitalServices: DigitalService[] = [
  {
    id: "seo-optimization",
    name: "SEO Optimization Services",
    image: "/Services/digital/1.png",
    category: "SEO",
    startDate: "February 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/thepremiumhomesltd",
    description:
      "Boost your website visibility on search engines and attract organic traffic with our tailored SEO strategies.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    image: "/Services/digital/2.png",
    category: "Social Media",
    startDate: "April 2025",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/newsohrabfashion/",
    description:
      "Increase brand awareness and engagement on social platforms like Facebook, Instagram, LinkedIn, and TikTok.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "ppc-campaigns",
    name: "Pay-Per-Click Campaigns",
    image:  "/Services/digital/3.png",
    category: "PPC Advertising",
    startDate: "March 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/bluestargadget/",
    description:
      "Drive instant traffic and conversions using Google Ads, Microsoft Ads, and other PPC platforms with optimized ad campaigns.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "email-marketing",
    name: "Email Marketing Services",
    image: "/Services/digital/4.png",
    category: "Email Marketing",
    startDate: "March 2025",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/bagnstep/",
    description:
      "Engage your customers and boost retention with personalized and automated email campaigns.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "content-marketing",
    name: "Content Marketing & Strategy",
    image: "/Services/digital/5.png",
    category: "Content Marketing",
    startDate: "June 2025",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/dvalleybd/",
    description:
      "Create high-quality content to attract, engage, and convert your audience while supporting SEO goals.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "analytics-reporting",
    name: "Digital Analytics & Reporting",
    image:  "/Services/digital/6.png",
    category: "Analytics",
    startDate: "March 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://www.facebook.com/dvalleybd/",
    description:
      "Track, measure, and improve your digital campaigns with actionable insights from analytics and reporting tools.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
];