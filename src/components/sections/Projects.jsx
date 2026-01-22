import React from "react";
import { PROJECTS } from "../../utils/constants";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative py-16 px-4 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projeler
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Geliştirdiğim ve katkıda bulunduğum öne çıkan projeler
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Öne Çıkan Projeler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Diğer Projeler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
