import React from "react";
import {
  Code2,
  Rocket,
  Users,
  Award,
  Server,
  Gauge,
  LayoutDashboard,
  Monitor,
  Cloud,
} from "lucide-react";
import { STATS, SERVICES } from "../../utils/constants";

const serviceIcons = {
  server: Server,
  gauge: Gauge,
  layout: LayoutDashboard,
  monitor: Monitor,
  cloud: Cloud,
  users: Users,
};

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "PSR-12 standartları ve best practices ile temiz, okunabilir kod yazıyorum.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile metodoloji ile hızlı ve kaliteli teslimat sağlıyorum.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Ekip çalışmasına yatkın, mentorluk ve liderlik deneyimim var.",
  },
  {
    icon: Award,
    title: "15+ Years",
    description:
      "400+ projeyi başarıyla tamamladım ve müşteri memnuniyeti sağladım.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-label="Hakkımda"
      className="relative min-h-screen py-20 px-4 bg-gray-900/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hakkımda
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-blue-500 to-purple-400 rounded-full" />
              <div className="pl-8 space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Merhaba! Ben{" "}
                  <span className="text-white font-semibold">Bulut Kuru</span>,
                  15+ yıllık deneyime sahip bir{" "}
                  <span className="text-blue-400">
                    Software Development Coordinator &amp; Senior Backend
                    Architect
                  </span>
                  'ım.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-400">400+ kurumsal proje</span>,{" "}
                  <span className="text-blue-400">65 Laravel/DDD backend API</span>,{" "}
                  <span className="text-green-400">17 Node.js servisi</span> ve{" "}
                  <span className="text-pink-400">300+ React.js/Next.js</span> ön
                  yüzüyle; özel sektörden kamu kurumlarına uzanan geniş bir
                  yelpazede, yüksek trafikli ve milyonlarca kaydı yöneten
                  kurumsal sistemlerin mimari sorumluluğunu üstlendim.
                </p>
                <p className="text-lg leading-relaxed">
                  İBB bünyesinde{" "}
                  <span className="text-yellow-400">186 kurumsal web sitesi</span>{" "}
                  ve <span className="text-yellow-400">250+ uygulamadan</span>{" "}
                  oluşan dijital ekosistemin teknik liderliğini yürüttüm;{" "}
                  <span className="text-blue-400">17 kurum ve belediyeye</span>{" "}
                  danışmanlık hizmeti verdim. 8 Linux sunucusunu sıfırdan kurarak
                  Rancher + Kubernetes, GitLab, Docker ve CI/CD altyapısını uçtan
                  uca yapılandırdım.
                </p>
                <p className="text-lg leading-relaxed">
                  Şu anda{" "}
                  <span className="text-white font-semibold">ExtraNetwork</span>
                  'te otel teknolojileri platformunun teknik liderliğini
                  yürütüyorum.
                </p>
                <p className="text-lg leading-relaxed">
                  10–25 kişilik geliştirici ekiplerinde kod standartlarını
                  belirledim, mimari karar süreçlerini yönettim ve teknik
                  mentörlük yaptım. Code review, mentorluk ve ekip koordinasyonu
                  ile sürdürülebilir kalite kültürü oluşturuyorum.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Hizmetlerim
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon] || Server;
              return (
                <div
                  key={service.title}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
