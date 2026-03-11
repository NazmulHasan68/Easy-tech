"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { mediaProjects } from "@/components/data/mediaProjectData";
import { useParams } from "next/navigation";

export default function MediaDetailPage() {
  const { id } = useParams();
  const project = mediaProjects.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/media-buying"
      backLabel="Back to Campaigns"
      visitLabel="View Campaign"
      ctaLabel="Start a Campaign"
    />
  );
}