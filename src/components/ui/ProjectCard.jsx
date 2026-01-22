import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  ArrowRight,
  Eye,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="group relative h-[500px] rounded-2xl overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/80 to-gray-900/95" />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
      </div>

      <div className="relative h-full flex flex-col p-6">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            {project.featured && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                <Sparkles size={14} className="animate-pulse" />
                <span>Öne Çıkan</span>
              </div>
            )}
            <div className="ml-auto bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-2 rounded-full border border-gray-600/50">
              <Code2 size={14} className="inline mr-1" />
              {project.technologies.length}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              {project.title}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-all duration-500 group-hover:w-32" />
          </div>
        </div>

        <div
          className={`transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-70"
          }`}
        >
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="mb-6">
            <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
              Teknolojiler
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/30 font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`flex gap-3 transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={handleViewDetails}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Eye size={16} />
              <span>Detaylar</span>
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-semibold py-3 px-4 rounded-lg border border-gray-600/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default ProjectCard;
