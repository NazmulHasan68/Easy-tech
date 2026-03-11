"use client";
import ServiceDetails from "@/components/about/Servicedetails";
import { erpProjects } from "@/components/data/erpProjectData";
import { useParams } from "next/navigation";


export default function ErpDetailPage() {
  const { id } = useParams();
  const project = erpProjects.find((p) => p.id === id);
  return (
    <ServiceDetails
      project={project}
      backHref="/services/erp"
      backLabel="Back to Solutions"
      visitLabel="View Live Demo"
      ctaLabel="Request a Demo"
    />
  );
}