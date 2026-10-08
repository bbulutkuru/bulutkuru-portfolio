import React from "react";
import { Github, Linkedin, Mail, Terminal, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
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
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const techStack = [
  { icon: SiLaravel, color: "#FF2D20", name: "Laravel" },
  { icon: SiPhp, color: "#777BB4", name: "PHP" },
  { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { icon: SiExpress, color: "#FFFFFF", name: "Express" },
  { icon: SiNestjs, color: "#E0234E", name: "NestJS" },
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { icon: SiRedis, color: "#DC382D", name: "Redis" },
  { icon: SiDocker, color: "#2496ED", name: "Docker" },
  { icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
  { icon: SiLinux, color: "#FCC624", name: "Linux" },
  { icon: SiNginx, color: "#009639", name: "Nginx" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiGit, color: "#F05032", name: "Git" },
];

const whatsappDigits = (PERSONAL_INFO.whatsapp || "").replace(/\D/g, "");

const socialLinks = [
  { href: PERSONAL_INFO.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: PERSONAL_INFO.github, label: "GitHub", Icon: Github },
  { href: `mailto:${PERSONAL_INFO.email}`, label: "E-posta gönder", Icon: Mail, internal: true },
  { href: whatsappDigits ? `https://wa.me/${whatsappDigits}` : "", label: "WhatsApp", Icon: FaWhatsapp },
  { href: PERSONAL_INFO.instagram, label: "Instagram", Icon: Instagram },
].filter((item) => item.href && item.href.trim());

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-pulse">
          <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Yeni Projelere Açık - Hemen Kodlamaya Başlayalım!
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
          <span className="text-white transition-colors duration-300">
            Hi, I'm{" "}
          </span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-3 sm:mb-4 font-light transition-colors duration-300 px-2">
          {PERSONAL_INFO.title}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-colors duration-300 px-4">
          15+ yıllık deneyimle 400+ kurumsal proje teslim ettim. PHP/Laravel ve
          Node.js ile yüksek trafikli backend API'lar, React/Next.js ile
          ölçeklenebilir frontend çözümleri geliştiriyorum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              İletişime Geç
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 rounded-lg font-medium text-gray-300 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
          >
            Çalışmalarımı Gör
          </button>
        </div>

        <div
          className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
          role="list"
          aria-label="Sosyal medya linkleri"
        >
          {socialLinks.map((item) => {
            const { href, label, internal } = item;
            const Icon = item.Icon;
            return (
            <a
              key={label}
              href={href}
              target={internal ? undefined : "_blank"}
              rel={internal ? undefined : "noopener noreferrer"}
              aria-label={label}
              role="listitem"
              className="p-2 sm:p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
            >
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                aria-hidden="true"
              />
            </a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 bg-gradient-to-t from-black via-gray-900/50 to-transparent">
        <div className="relative overflow-hidden" aria-hidden="true">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex animate-scroll-right gap-6 sm:gap-8 w-max">
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  title={tech.name}
                >
                  <Icon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: tech.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
