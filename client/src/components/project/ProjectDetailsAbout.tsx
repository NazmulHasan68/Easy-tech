export default function ProjectDetailsAbout({ project }: any) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
         {project?.project_name}
      </h1>

      <p className="text-gray-600 leading-relaxed mb-8">
        {project.project_details}
      </p>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 mb-8">
        <img loading="lazy"
          src={project?.project_images?.[1]}
          alt={project.project_name}
          className="w-full object-cover"
        />
      </div>

      <p className="text-gray-600 leading-relaxed">
        This project was developed with modern architecture, performance
        optimization, and user-centric design principles to deliver a seamless
        digital experience.
      </p>
    </div>
  );
}
