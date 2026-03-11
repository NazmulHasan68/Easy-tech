// Images → put in /public/assets/img/consultancy/
// consult_1.jpg | consult_2.jpg | consult_3.jpg

export interface ConsultancyProject {
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

export const businessProjects: ConsultancyProject[] = [
  {
    id: "ecommerce-growth-strategy",
    name: "E-Commerce Growth Strategy – Blue Star Gadget",
    image: "/services/business/b1.png",
    category: "Growth Strategy",
    status: "Live",
    startDate: "January 2024",
    endDate: "June 2024",
    website: "https://www.bluestargadget.com/",
    description:
      "We partnered with Blue Star Gadget to redesign their entire digital growth strategy. From market research and competitor analysis to funnel optimization and digital channel planning, our consultancy helped them achieve a 3× revenue increase within 6 months.",
    technologies: [
      "Market Research & Analysis",
      "Competitor Benchmarking",
      "Google Analytics 4",
      "Looker Studio Dashboards",
      "CRM Strategy",
      "Sales Funnel Mapping",
      "Digital Roadmap Planning",
    ],
    facilities: [
      "Business & Market Research",
      "Competitor & SWOT Analysis",
      "Digital Growth Roadmap",
      "Sales Funnel Optimization",
      "Customer Journey Mapping",
      "KPI & OKR Framework Setup",
      "Revenue Forecasting",
      "Monthly Strategy Reviews",
    ],
  },

  {
    id: "digital-transformation-farmercare",
    name: "Digital Transformation – FarmerCare Asia",
    image: "/services/business/b2.png",
    category: "Digital Transformation",
    status: "Live",
    startDate: "March 2024",
    endDate: "September 2024",
    website: "https://farmercare.asia/",
    description:
      "FarmerCare Asia approached Easy Tech to lead their digital transformation from a traditional agriculture business to a fully digitized agri-tech platform. We delivered a complete transformation roadmap — from tech stack decisions to brand positioning and investor pitch preparation.",
    technologies: [
      "Digital Transformation Framework",
      "Tech Stack Consulting",
      "Brand Positioning Strategy",
      "Investor Pitch Preparation",
      "Process Automation Planning",
      "Stakeholder Management",
      "Change Management Strategy",
    ],
    facilities: [
      "Digital Transformation Roadmap",
      "Tech Stack Evaluation & Selection",
      "Brand Positioning & Messaging",
      "Business Model Optimization",
      "Investor Pitch Deck Consulting",
      "Process Automation Planning",
      "Team Structure & Hiring Guidance",
      "Quarterly Progress Reviews",
    ],
  },

  {
    id: "startup-launch-maritime",
    name: "Startup Launch Strategy – Maritime Cook Islands",
    image:"/services/business/b3.png",
    category: "Startup Consultancy",
    status: "Live",
    startDate: "June 2024",
    endDate: "December 2024",
    website: "https://maritimescookislands.com/",
    description:
      "We supported Maritime Cook Islands in launching their global ship registry platform from scratch. Our consultancy covered go-to-market strategy, international branding, digital presence setup, and operational workflow design — resulting in a successful global launch within 6 months.",
    technologies: [
      "Go-To-Market Strategy",
      "International Branding",
      "Operational Workflow Design",
      "SEO & Content Strategy",
      "Partnership Development",
      "Risk & Compliance Planning",
      "Digital Presence Audit",
    ],
    facilities: [
      "Go-To-Market Strategy",
      "International Brand Identity",
      "Operational Workflow Design",
      "Website & SEO Strategy",
      "Partnership & Network Building",
      "Risk & Compliance Planning",
      "Launch Campaign Planning",
      "Post-Launch Performance Review",
    ],
  },
];