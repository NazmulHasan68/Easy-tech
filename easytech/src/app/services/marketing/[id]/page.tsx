"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { digitalServices } from "@/components/data/digitalProjectData";
import { useParams } from "next/navigation";

export default function DigitalDetailPage() {
  const { id } = useParams();
  const project = digitalServices.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/marketing"
      backLabel="Back to Services"
      visitLabel="View Campaign"
      ctaLabel="Start a Campaign"
    />
  );
}