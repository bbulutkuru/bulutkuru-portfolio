import React from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  MapPin,
} from "lucide-react";
import { EXPERIENCE, EDUCATION } from "../../utils/constants";

const isCurrent = (period) => /Günümüz|Devam|Present/i.test(period || "");

const Experience = () => {
  return (
    <section
      id="experience"
      aria-label="İş Deneyimi ve Eğitim"
      className="relative py-20 px-4 bg-gray-900/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Deneyim & Eğitim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mb-6">
              <Briefcase className="w-7 h-7 text-blue-400" aria-hidden="true" />
              İş Deneyimi
            </h3>

            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-400 rounded-full"
                aria-hidden="true"
              />
              <ol>
                {EXPERIENCE.map((job) => {
                  const current = isCurrent(job.period);
                  return (
                    <li
                      key={`${job.company}-${job.period}`}
                      className="relative pl-12 pb-10 last:pb-0"
                    >
                      <div
                        className={`absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-600 to-purple-400 ${
                          current ? "ring-4 ring-blue-500/30" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <h4 className="text-lg font-semibold text-white">
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 md:shrink-0">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <span>
                              {job.period}
                              {job.duration ? ` · ${job.duration}` : ""}
                            </span>
                            {current && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                                Devam ediyor
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-gray-300">
                          <span className="flex items-center gap-2">
                            <Building2
                              className="w-4 h-4 text-blue-400"
                              aria-hidden="true"
                            />
                            {job.company}
                          </span>
                          {job.location && (
                            <span className="flex items-center gap-2">
                              <MapPin
                                className="w-4 h-4 text-purple-400"
                                aria-hidden="true"
                              />
                              {job.location}
                            </span>
                          )}
                        </div>

                        {job.highlights?.length > 0 && (
                          <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                            {job.highlights.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {job.projects?.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-gray-700/50">
                            <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                              Öne Çıkan Projeler
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.projects.map((project) => (
                                <span
                                  key={project}
                                  className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/30"
                                >
                                  {project}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <aside>
            <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mb-6">
              <GraduationCap
                className="w-7 h-7 text-purple-400"
                aria-hidden="true"
              />
              Eğitim
            </h3>
            <ul className="space-y-4">
              {EDUCATION.map((edu) => (
                <li
                  key={`${edu.school}-${edu.year}`}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{edu.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
