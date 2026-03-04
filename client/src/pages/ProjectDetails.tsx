import { useParams } from "react-router-dom";


import PorjectDetailsGole from "@/components/project/PorjectDetailsGole";
import ProjectDetailsAbout from "@/components/project/ProjectDetailsAbout";
import ProjectDetailsFetatures from "@/components/project/ProjectDetailsFetatures";
import ProjectDetailsHero from "@/components/project/ProjectDetailsHero";
import ProjectDetailsInfromation from "@/components/project/ProjectDetailsInfromation";
import { projectdetails } from "@/components/project/projectData";

export default function ProjectDetails() {
  const { prodectId } = useParams();

  const project = projectdetails.find(
    (p) => p.projectID === Number(prodectId)
  );

  if (!project) return <div>Project Not Found</div>;

  return (
    <>
      <ProjectDetailsHero project={project} />

      <div className="max-w-7xl mx-auto px-2 md:px-6 py-12 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectDetailsAbout project={project} />
        </div>

        <div className="lg:col-span-1">
          <ProjectDetailsInfromation project={project} />
        </div>
      </div>

      <PorjectDetailsGole />
      <ProjectDetailsFetatures project={project} />
    </>
  );
}
