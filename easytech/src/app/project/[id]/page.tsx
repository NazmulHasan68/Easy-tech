"use client";

import { useParams } from "next/navigation";
import { webProjects } from "@/components/data/webProjectData";
import { digitalServices } from "@/components/data/digitalProjectData";
import { appProjects } from "@/components/data/appProjectData";
import { erpProjects } from "@/components/data/erpProjectData";
import { mediaProjects } from "@/components/data/mediaProjectData";
import { businessProjects } from "@/components/data/businessProjectData";
import ServiceDetails from "@/components/about/Servicedetails";


/* Map each service group to its back path */
const SOURCES = [
  { data: webProjects,         basePath: "/services/web",                  backLabel: "Back to Web Projects" },
  { data: digitalServices,     basePath: "/services/marketing",            backLabel: "Back to Digital Services" },
  { data: appProjects,         basePath: "/services/app",                  backLabel: "Back to App Projects" },
  { data: erpProjects,         basePath: "/services/erp",                  backLabel: "Back to ERP Solutions" },
  { data: mediaProjects,       basePath: "/services/media",                backLabel: "Back to Campaigns" },
  { data: businessProjects,    basePath: "/services/business",             backLabel: "Back to Case Studies" },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  /* Find project + its source */
  let project = undefined;
  let backHref  = "/projects";
  let backLabel = "Back to Projects";

  for (const source of SOURCES) {
    const found = source.data.find((p) => p.id === id);
    if (found) {
      project   = found;
      backHref  = source.basePath;
      backLabel = source.backLabel;
      break;
    }
  }

  return (
    <ServiceDetails
      project={project}
      backHref={backHref}
      backLabel={backLabel}
      visitLabel="Visit Live Website"
      ctaLabel="Get a Similar Project"
      ctaHref="/contact"
    />
  );
}