"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { webProjects } from "@/components/data/webProjectData";
import { useParams } from "next/navigation";


export default function WebDetailPage() {
  const { id } = useParams();
  const project = webProjects.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/web"
      backLabel="Back to Projects"
      visitLabel="Visit Live Website"
      ctaLabel="Get a Similar Project"
    />
  );
}