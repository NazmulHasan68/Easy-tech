"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { businessProjects } from "@/components/data/businessProjectData";
import { useParams } from "next/navigation";

export default function ConsultancyDetailPage() {
  const { id } = useParams();
  const project = businessProjects.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/business"
      backLabel="Back to Case Studies"
      visitLabel="View Case Study"
      ctaLabel="Book a Consultation"
    />
  );
}