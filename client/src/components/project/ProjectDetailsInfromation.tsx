import { Facebook, Linkedin, Globe, Youtube } from "lucide-react";

export default function ProjectDetailsInfromation({ project }: any) {

  console.log(project);
  
  return (
    <div className="bg-[#2E7D32] text-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-xl font-semibold mb-8 tracking-wide">
        PROJECT INFORMATION
      </h3>

      <div className="space-y-6 text-sm">
        <InfoRow title="Client Website" value={project.clinet_website} />
        <InfoRow title="Category" value={project.catagory} />
        <InfoRow title="Start Date" value={project.start_date} />
        <InfoRow title="End Date" value={project.end_date} />
        <InfoRow title="Tag" value={project.tag} />
      </div>

      <div className="flex gap-4 mt-10">
        <Social icon={Facebook} link={project?.social_media.Facebook} />
        <Social icon={Linkedin} link={project?.social_media.Lindine} />
        <Social icon={Globe} link={project?.social_media.website} />
        <Social icon={Youtube} link={project?.social_media.youtubr} />
      </div>
    </div>
  );
}

function InfoRow({ title, value }: any) {
  return (
    <div className="border-b border-white/20 pb-4">
      <p className="text-white/70 mb-1">{title}</p>
      <a href={value} target="_blank" className="font-medium underline">
        {value}
      </a>
    </div>
  );
}

function Social({ icon: Icon, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
