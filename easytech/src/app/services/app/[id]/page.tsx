"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { appProjects } from "@/components/data/appProjectData";
import { useParams } from "next/navigation";

export default function AppDetailPage() {
  const { id } = useParams();
  const project = appProjects.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/app"
      backLabel="Back to Apps"
      visitLabel="Download App"
      ctaLabel="Build My App"
    />
  );
}