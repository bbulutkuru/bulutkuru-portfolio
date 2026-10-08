import React from "react";
import { SKILLS } from "../../utils/constants";
import {
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiLinux,
  SiNginx,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGrafana,
  SiSentry,
  SiGit,
  SiGitlab,
  SiPostman,
} from "react-icons/si";

const iconComponents = {
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiLinux,
  SiNginx,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGrafana,
  SiSentry,
  SiGit,
  SiGitlab,
  SiPostman,
};

const Skills = () => {
  const displayedSkills = SKILLS.filter(
    (skill) => skill.icon && iconComponents[skill.icon]
  );

  return (
    <section
      id="skills"
      aria-label="Yetenekler ve Teknolojiler"
      className="relative py-16 px-4 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yetenekler & Teknolojiler
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 mx-auto rounded-full mb-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-5 px-4">
          {displayedSkills.map((tech) => {
            const Icon = iconComponents[tech.icon];
            return (
              <div
                key={tech.name}
                className="group w-[calc(50%-10px)] md:w-[calc(25%-15px)] lg:w-[calc(14.28%-18px)]"
              >
                <div className="w-full h-32 md:h-36 lg:h-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center p-4">
                  <Icon
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                    aria-hidden="true"
                  />
                  <p className="text-gray-200 text-xs md:text-sm text-center font-medium leading-tight">
                    {tech.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
