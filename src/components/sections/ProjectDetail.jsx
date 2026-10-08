import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS, SITE } from "../../utils/constants";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users,
  Clock,
  Home,
  FolderKanban,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.title} · ${SITE.shortTitle}`
      : `Proje bulunamadı · ${SITE.shortTitle}`;
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Proje Bulunamadı
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FolderKanban size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">Portfolio</span>
            </div>

            <nav className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <Home size={18} />
                <span className="hidden sm:inline">Ana Sayfa</span>
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <FolderKanban size={18} />
                <span className="hidden sm:inline">Tüm Projeler</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative h-[60vh] overflow-hidden mt-16">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            {project.featured && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                <span>⭐ Öne Çıkan Proje</span>
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={24} className="text-blue-400" />
                <h3 className="text-gray-400 text-sm font-semibold uppercase">
                  Süre
                </h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {project.duration}
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users size={24} className="text-purple-400" />
                <h3 className="text-gray-400 text-sm font-semibold uppercase">
                  Takım
                </h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {project.teamSize}
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={24} className="text-green-400" />
                <h3 className="text-gray-400 text-sm font-semibold uppercase">
                  Rol
                </h3>
              </div>
              <p className="text-lg font-bold text-white">{project.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <ExternalLink size={20} />
                <span>Canlı Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600/50 transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>Kaynak Kodu</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Proje Hakkında
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Özellikler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 rounded-lg p-4 hover:border-blue-500/50 transition-colors"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-green-400 flex-shrink-0 mt-1"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Teknik Zorluklar
                </h2>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-700/30 rounded-lg p-4"
                    >
                      <AlertCircle
                        size={20}
                        className="text-orange-400 flex-shrink-0 mt-1"
                      />
                      <span className="text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Sonuçlar & Başarılar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-700/30 rounded-lg p-6 text-center"
                    >
                      <TrendingUp
                        size={32}
                        className="text-green-400 mx-auto mb-3"
                      />
                      <p className="text-white font-bold text-lg">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 sticky top-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kullanılan Teknolojiler
                </h3>
                <div className="space-y-6">
                  {project.detailedTechnologies.map((tech, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {tech.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/30 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
