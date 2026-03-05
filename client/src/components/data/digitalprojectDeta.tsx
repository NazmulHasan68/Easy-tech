import seo1 from "@/assets/img/digital_project/1.png";
import seo2 from "@/assets/img/digital_project/2.png";
import seo3 from "@/assets/img/digital_project/3.png";
import seo4 from "@/assets/img/digital_project/4.png";
import seo5 from "@/assets/img/digital_project/5.png";
import seo6 from "@/assets/img/digital_project/6.png";

const allMarketingTools = [
  "Google Ads Manager",
  "Microsoft Ads (Bing)",
  "Step.io",
  "Ad Library",
  "Google Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Meta Pixel"
];

const marketingFacilities = [
  "Campaign Strategy & Planning",                 // overall plan
  "Paid Ads Setup & Management",                  // Google Ads, Microsoft Ads, LinkedIn, TikTok
  "Retargeting & Remarketing Campaigns",         // dynamic audience retargeting
  "Conversion Tracking & Pixel Setup",           // Meta Pixel, GA4, server-side tracking
  "Performance Monitoring & Analytics",          // real-time analytics & dashboards
  "A/B Testing & Optimization",                  // ads, creatives, and landing pages
  "Budget & ROI Management",                     // cross-platform spend optimization
  "Audience Targeting & Segmentation",           // micro-targeting & lookalike audiences
  "Reporting & Insights",                         // automated and custom reports
  "Server-Side Tracking Implementation",         // advanced analytics
  "Landing Page Optimization (CRO)",             // heatmaps, user flow analysis
  "Creative & Ad Copy Development",              // high-converting visuals & text
  "Competitor & Market Analysis",                // competitor benchmarking
  "Email Drip Campaign Setup & Automation",      // nurture sequences
  "SEO & Content Integration",                   // keywords + landing page optimization
  "Social Media Engagement Strategy",            // community management, engagement loops
  "Influencer & Affiliate Campaigns",            // influencer collaborations
  "Video Ad Production & Optimization",          // YouTube / TikTok / Instagram
  "Multi-Channel Campaign Coordination",         // omnichannel strategy
  "Custom Analytics Dashboard Setup",            // Tableau / Looker Studio dashboards
  "CRM Integration & Lead Management",           // connect campaigns to CRM
  "Marketing Funnel Design & Optimization",      // top-to-bottom funnel optimization
  "Programmatic Advertising Setup",              // RTB, DSP campaigns
  "AI-Powered Campaign Optimization",            // predictive & AI tools for ads
  "Customer Segmentation & Lifetime Value Analysis", // advanced data insights
  "Chatbot & Automation Integration",            // lead generation and support
  "Geo-Targeting & Local Campaigns",             // location-specific ads
  "Conversion Rate & Revenue Forecasting",       // projected ROI analysis
  "Dynamic Content & Personalization",           // website/app personalization
  "Cross-Platform Retargeting Automation"        // Google, Meta, TikTok, LinkedIn
];


export const digitalServices = [
  {
    id: "seo-optimization",
    name: "SEO Optimization Services",
    image: seo1,
    category: "SEO",
    startDate: "February 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/seo",
    description:
      "Boost your website visibility on search engines and attract organic traffic with our tailored SEO strategies.",
    technologies: allMarketingTools,
    facilities: marketingFacilities,
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    image: seo2,
    category: "Social Media",
    startDate: "January 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/social",
    description:
      "Increase brand awareness and engagement on social platforms like Facebook, Instagram, LinkedIn, and TikTok.",
    technologies: allMarketingTools,
    facilities: marketingFacilities
  },
  {
    id: "ppc-campaigns",
    name: "Pay-Per-Click Campaigns",
    image: seo3,
    category: "PPC Advertising",
    startDate: "March 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/ppc",
    description:
      "Drive instant traffic and conversions using Google Ads, Microsoft Ads, and other PPC platforms with optimized ad campaigns.",
    technologies: allMarketingTools,
    facilities: marketingFacilities
  },
  {
    id: "email-marketing",
    name: "Email Marketing Services",
    image: seo4,
    category: "Email Marketing",
    startDate: "February 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/email",
    description:
      "Engage your customers and boost retention with personalized and automated email campaigns.",
    technologies: allMarketingTools,
    facilities: marketingFacilities
  },
  {
    id: "content-marketing",
    name: "Content Marketing & Strategy",
    image: seo5,
    category: "Content Marketing",
    startDate: "January 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/content",
    description:
      "Create high-quality content to attract, engage, and convert your audience while supporting SEO goals.",
    technologies: allMarketingTools,
    facilities: marketingFacilities
  },
  {
    id: "analytics-reporting",
    name: "Digital Analytics & Reporting",
    image: seo6,
    category: "Analytics",
    startDate: "March 2024",
    endDate: "Ongoing",
    status: "Live",
    website: "https://yourcompany.com/analytics",
    description:
      "Track, measure, and improve your digital campaigns with actionable insights from analytics and reporting tools.",
    technologies: allMarketingTools,
    facilities: marketingFacilities
  },
];