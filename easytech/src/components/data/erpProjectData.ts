// Images → put in /public/assets/img/erp_project/
// dokanx.jpg | dokanx2.jpg | easy-pos.jpg | easy-solution.jpg | lead-management.jpg | multi-ventor.jpg

export interface ErpProject {
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

export const erpProjects: ErpProject[] = [
  {
    id: "lead-management",
    name: "Easy Lead Management System",
    image: "/services/erp/lead-management.jpg",
    category: "ERP / CRM",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://easytechsolutions.xyz/easy_data/easy_lead_management/",
      user: "",
      admin: "",
    },
    description:
      "A smart CRM-based lead management system designed to track prospects, manage sales pipelines, and improve conversion rates through automation and reporting.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Lead Capture & Tracking", "Sales Pipeline Management", "Follow-Up Reminders", "Role-Based Access Control", "Performance Analytics", "Admin Dashboard", "Client Communication Logs", "Report Generation"],
  },

  {
    id: "dokanx",
    name: "DokanX – E-Commerce Automation ERP",
    image: "/services/erp/dokanx.jpg",
    category: "ERP / SaaS",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://dokanxbd.com/",
      user: "https://user-demo.dokanxbd.com/",
      admin: "https://admin-demo.dokanxbd.com/Admin/",
    },
    description:
      "DokanX is a complete e-commerce automation ERP solution that manages products, vendors, orders, payments, and reporting in one centralized system.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Vendor & Product Management", "Order & Fulfillment System", "Commission Management", "Payment Gateway Integration", "Sales & Revenue Reports", "Admin Control Panel", "User & Role Management", "Multi-Store Capability"],
  },

  {
    id: "easy-pos",
    name: "Easy POS – Smart Point of Sale System",
    image: "/services/erp/easy-pos.jpg",
    category: "Retail ERP",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://easy-pos.easytechsolutions.xyz/",
      user: "",
      admin: "",
    },
    description:
      "A modern cloud-based POS system built for retail businesses to manage billing, inventory, and customer data in real time.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Sales & Billing System", "Barcode Scanning", "Inventory Management", "Customer Database", "Daily Sales Reports", "Multi-Store Support", "Cash & Card Payment Handling"],
  },

  {
    id: "easy-erp",
    name: "EasyTech ERP – Business Management System",
    image: "/services/erp/easy-solution.jpg",
    category: "Enterprise ERP",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://easytechsolutions.xyz/easy_data/easytech_erp_demo/",
      user: "",
      admin: "",
    },
    description:
      "A full-featured enterprise resource planning system designed to manage accounts, HR, inventory, sales, and operational workflows from a unified dashboard.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Accounts & Finance Management", "HR & Payroll System", "Inventory & Stock Control", "Sales & Purchase Management", "Role-Based Access Control", "Real-Time Business Reports", "Admin Dashboard"],
  },

  {
    id: "multi-vendor-ecommerce",
    name: "Easy Multi-Vendor E-Commerce Platform",
    image: "/services/erp/multi-ventor.jpg",
    category: "Marketplace / SaaS",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://easytechsolutions.xyz/easy_data/easy_multivendor/",
      user: "",
      admin: "",
    },
    description:
      "A scalable multi-vendor marketplace platform allowing multiple sellers to manage their stores, products, and earnings under one centralized system.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Multi-Vendor Store Management", "Vendor Dashboard", "Commission System", "Product & Category Control", "Order & Shipping Management", "Payment Integration", "Admin Monitoring Panel", "Sales Analytics"],
  },

  {
    id: "dokanx-admin-user",
    name: "DokanX Admin & User Portal",
    image: "/services/erp/dokanx2.jpg",
    category: "SaaS Platform",
    status: "Live",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    links: {
      project: "https://dokanxbd.com/",
      user: "https://user-demo.dokanxbd.com/",
      admin: "https://admin-demo.dokanxbd.com/Admin/",
    },
    description:
      "Dedicated admin and user portal for DokanX platform, providing centralized management, analytics, and user-level access control.",
    technologies: ["React.js", "Laravel (PHP)", "MySQL", "Tailwind CSS", "Cloud Hosting", "SEO Optimization", "Performance Optimization"],
    facilities: ["Admin Dashboard", "User Role Management", "Vendor Approval System", "Analytics & Reporting", "Order Monitoring", "Secure Authentication"],
  },
];