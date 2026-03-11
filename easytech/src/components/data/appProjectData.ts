// Images → put in /public/assets/img/app_project/
// app_1.jpg | app_2.jpg

export interface AppProject {
  id: string;
  name: string;
  image: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  links: {
    project: string;
    user: string;
    admin: string;
  };
  description: string;
  technologies: string[];
  facilities: string[];
}

export const appProjects: AppProject[] = [
  {
    id: "tphl",
    name: "TPHL",
    image: "/services/app/app_1.jpg",
    category: "Real Estate Mobile App",
    status: "Live",
    startDate: "2026-01-15",
    endDate: "2026-06-30",
    links: {
      project: "https://play.google.com/store/apps/details?id=com.premium_homes.tech&pcampaignid=web_share",
      user: "",
      admin: "",
    },
    description:
      "A smart real estate mobile app that streamlines lead management, tracks sales pipelines, and automates reporting to boost efficiency and conversions.",
    technologies: [
      "Flutter & React Native",
      "Native Android & iOS Development",
      "Clean UI/UX Design",
      "High-Performance Optimization",
    ],
    facilities: [
      "Lead Capture & Tracking",
      "Sales Pipeline Management",
      "Automated Follow-Up Reminders",
      "Role-Based Access Control",
      "Performance Analytics & Reporting",
      "Admin Dashboard",
      "Client Communication Logs",
      "Custom Report Generation",
    ],
  },
  {
    id: "dokanx",
    name: "DokanX – E-Commerce Automation",
    image: "/services/app/app_2.jpg",
    category: "E-Commerce Mobile App",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://apps.apple.com/us/app/tphl/id6752620266",
      user: "",
      admin: "",
    },
    description:
      "A mobile ERP app for e-commerce businesses, enabling product management, order tracking, and seamless client interaction from anywhere.",
    technologies: [
      "Flutter & React Native",
      "Native Android & iOS Development",
      "Clean UI/UX Design",
      "Performance & Optimization Enhancements",
    ],
    facilities: [
      "Vendor & Product Management",
      "Order & Fulfillment System",
      "Commission & Payment Management",
      "Sales & Revenue Reporting",
      "Admin Control Panel",
      "User & Role Management",
      "Multi-Store & Multi-User Support",
    ],
  },
];