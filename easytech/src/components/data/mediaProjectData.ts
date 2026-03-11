// Images → /public/services/media/mb1.png | mb2.png | mb3.png | mb4.png

export interface MediaProject {
  id: string;
  name: string;
  image: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  website: string;
  description: string;
  technologies: string[];
  facilities: string[];
}

export const mediaProjects: MediaProject[] = [
  {
    id: "meta-ads-ecommerce",
    name: "Maravelo BD – Meta Ads Growth Campaign",
    image: "/services/media/mb1.png",
    category: "Meta Ads",
    status: "Live",
    startDate: "January 2024",
    endDate: "Ongoing",
    website: "https://www.facebook.com/maravelo.bd",
    description:
      "A result-driven Meta Ads campaign for Maravelo BD, a fashion & lifestyle e-commerce brand. We built a full-funnel strategy — from cold audience awareness to dynamic retargeting — achieving a 4.8× ROAS within 60 days through creative testing and Conversion API integration.",
    technologies: [
      "Meta Ads Manager",
      "Meta Pixel & CAPI",
      "Dynamic Product Ads",
      "Lookalike Audiences",
      "A/B Testing",
      "Facebook & Instagram Placements",
      "Conversion API (Server-Side)",
    ],
    facilities: [
      "Campaign Strategy & Funnel Design",
      "Ad Creative Development",
      "Dynamic Product Catalog Ads",
      "Retargeting & Remarketing",
      "Lookalike Audience Targeting",
      "Conversion Tracking & Meta Pixel Setup",
      "Budget Optimization & Scaling",
      "Weekly Performance Reports",
    ],
  },

  {
    id: "google-ads-real-estate",
    name: "Ornet BD – Google Ads Lead Generation",
    image: "/services/media/mb2.png",
    category: "Google Ads",
    status: "Live",
    startDate: "October 2023",
    endDate: "Ongoing",
    website: "https://www.facebook.com/ornetbd/",
    description:
      "A high-intent Google Search & Display campaign for Ornet BD. We targeted purchase-ready audiences using smart keyword strategies, location-based targeting, and lead form extensions — delivering qualified leads at a significantly lower cost-per-lead than industry average.",
    technologies: [
      "Google Ads Manager",
      "Google Search & Display Network",
      "GA4 & Conversion Tracking",
      "Responsive Search Ads",
      "Location & Demographic Targeting",
      "Lead Form Extensions",
      "Performance Max Campaigns",
    ],
    facilities: [
      "Keyword Research & Planning",
      "Search & Display Campaign Setup",
      "Responsive Ad Creation",
      "Location-Based Targeting",
      "Lead Form Extension Setup",
      "GA4 Conversion Tracking",
      "Performance Max Campaign",
      "Monthly ROI & Lead Report",
    ],
  },

  {
    id: "tiktok-ads-fashion",
    name: "Graduate Fashion – TikTok Brand Awareness",
    image: "/services/media/mb3.png",
    category: "TikTok Ads",
    status: "Live",
    startDate: "April 2024",
    endDate: "Ongoing",
    website: "https://www.facebook.com/Graduatefashion2020/",
    description:
      "A creative TikTok Ads campaign for Graduate Fashion targeting 18–35 year-old fashion enthusiasts in Bangladesh. Using Spark Ads, In-Feed video creatives, and UGC-style content, we built strong brand recall and achieved 2M+ impressions within the first month of launch.",
    technologies: [
      "TikTok Ads Manager",
      "Spark Ads & TopView",
      "TikTok Pixel",
      "UGC Video Creatives",
      "Interest & Behavioral Targeting",
      "In-Feed Video Ads",
      "Custom Audience Segments",
    ],
    facilities: [
      "TikTok Campaign Strategy",
      "Spark Ads & In-Feed Ad Setup",
      "UGC-Style Creative Direction",
      "TikTok Pixel & Event Tracking",
      "Interest & Lookalike Targeting",
      "Audience Segmentation",
      "Creative A/B Testing",
      "Engagement & Reach Reporting",
    ],
  },

  {
    id: "omnichannel-campaign",
    name: "D Smart Uniforms – Omnichannel Campaign",
    image: "/services/media/mb4.png",
    category: "Omnichannel",
    status: "Live",
    startDate: "March 2024",
    endDate: "Ongoing",
    website: "https://www.facebook.com/dsmartuniforms/",
    description:
      "A fully integrated omnichannel media buying campaign for D Smart Uniforms running across Meta, Google, and TikTok simultaneously. We unified tracking, enabled cross-platform retargeting, and centralized budget allocation — delivering a 5.2× blended ROAS and a 60% drop in cost-per-order.",
    technologies: [
      "Meta Ads Manager",
      "Google Ads Manager",
      "TikTok Ads Manager",
      "Conversion API & Server-Side Tracking",
      "GA4 & Looker Studio Dashboard",
      "Cross-Platform Pixel Setup",
      "Programmatic Retargeting",
    ],
    facilities: [
      "Cross-Platform Campaign Strategy",
      "Meta + Google + TikTok Setup",
      "Unified Conversion Tracking",
      "Cross-Platform Retargeting",
      "Centralized Budget Optimization",
      "Looker Studio Live Dashboard",
      "Audience Sync Across Platforms",
      "Blended ROAS Reporting",
    ],
  },
];